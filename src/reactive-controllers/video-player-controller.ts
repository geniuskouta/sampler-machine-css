import type { ReactiveController, ReactiveControllerHost } from 'lit';
import PlayerStates from 'youtube-player/dist/constants/PlayerStates';
import type { YouTubePlayer } from 'youtube-player/dist/types';

export type PlayerKey = 'track1' | 'track2' | 'track3';
export type QueuePoints = Record<string, number>;

type State = {
	players: Map<PlayerKey, YouTubePlayer | null>,
	queuePoints: Map<PlayerKey, QueuePoints>,
	playerDurations: Map<PlayerKey, number>,
	videoIds: Map<PlayerKey, string | null>,
	lastPlayerKey: PlayerKey,
	lastQueueKey: string | null,
	showRecordModal: boolean
};

export class VideoPlayerController implements ReactiveController {
	private static _instance: VideoPlayerController;

	private hosts = new Set<ReactiveControllerHost>();

	private queueKeySets = [
		'123456789',
		'qwertyuio',
		'asdfghjkl'
	];

	private playerKeyToKeys = {
		'track1': this.queueKeySets[0],
		'track2': this.queueKeySets[1],
		'track3': this.queueKeySets[2]
	};

	value: State = {
		players: new Map<PlayerKey, YouTubePlayer | null>([
			['track1', null],
			['track2', null],
			['track3', null],
		]),
		videoIds: new Map<PlayerKey, string | null>([
			['track1', 'jL99kKewy_Q'],
			['track2', ''],
			['track3', ''],
		]),
		queuePoints: new Map<PlayerKey, QueuePoints>([
			['track1', {}],
			['track2', {}],
			['track3', {}],
		]),
		playerDurations: new Map<PlayerKey, number>([
			['track1', 0],
			['track2', 0],
			['track3', 0]
		]),
		lastPlayerKey: 'track1',
		lastQueueKey: null,
		showRecordModal: false
	};

	private constructor() { }

	static getInstance(host?: ReactiveControllerHost): VideoPlayerController {
		if (!VideoPlayerController._instance) {
			VideoPlayerController._instance = new VideoPlayerController();
		}

		if (host) {
			VideoPlayerController._instance.hosts.add(host);
			host.addController(VideoPlayerController._instance);
		}

		return VideoPlayerController._instance;
	}

	getPlayerKeyByQueueKey(key: string): PlayerKey | null {
		for (const [playerKey, queueKey] of Object.entries(this.playerKeyToKeys)) {
			if (queueKey.includes(key)) {
				return playerKey as PlayerKey;
			}
		}
		return null;
	}

	getShowRecordModal(): boolean {
		return this.value.showRecordModal;
	}

	setShowRecordModal(value: boolean): void {
		this.value.showRecordModal = value;
		this.requestUpdate();
	}

	getLastPlayerKey(): PlayerKey {
		return this.value.lastPlayerKey;
	}

	getPlayerKeys(): PlayerKey[] {
		return Object.keys(this.playerKeyToKeys) as PlayerKey[];
	}

	getVideoIds(): Map<PlayerKey, string | null> {
		return this.value.videoIds;
	}

	getLastQueueKey(): string | null {
		return this.value.lastQueueKey;
	}

	setVideoId(key: PlayerKey, videoId: string): void {
		this.value.videoIds.set(key, videoId);
		this.requestUpdate();
	}

	updateLastQueuePoint(newTime: number): void {
		if (!this.value.lastPlayerKey || !this.value.lastQueueKey) return;
		const target = this.value.queuePoints.get(this.value.lastPlayerKey);
		if (!target) return;
		target[this.value.lastQueueKey] = newTime;
		this.requestUpdate();
	}

	setLastPlayerKey(key: PlayerKey): void {
		if (this.value.lastPlayerKey !== key) {
			this.value.lastPlayerKey = key;
			this.requestUpdate();
		}
	}

	setLastQueueKey(key: string): void {
		if (this.value.lastQueueKey !== key) {
			this.value.lastQueueKey = key;
			this.requestUpdate();
		}
	}

	addInitialPlayer(key: PlayerKey, player: YouTubePlayer): void {
		this.value.players.set(key, player);
		this.requestUpdate();
	}

	setPlayer(key: PlayerKey, player: YouTubePlayer): void {
		this.value.players.set(key, player);
		this.value.lastPlayerKey = key;
		this.value.lastQueueKey = null;
		this.requestUpdate();
	}

	async setDefaultQueuePoints(key: PlayerKey, player: YouTubePlayer): Promise<void> {
		const duration = await this.getDuration(player);
		const queuePoints = this.createQueuePointsFromDuration(this.playerKeyToKeys[key], duration);
		this.value.queuePoints.set(key, queuePoints);
		this.value.playerDurations.set(key, duration); // cache player duration
	}

	getKeysByPlayerKey(key: PlayerKey): string {
		return this.playerKeyToKeys[key];
	}

	getPlayerByPlayerKey(key: PlayerKey): YouTubePlayer | null {
		return this.value.players.get(key) ?? null;
	}

	getCurrentPlayer(): YouTubePlayer | null {
		if (!this.value.lastPlayerKey) return null;
		return this.value.players.get(this.value.lastPlayerKey) ?? null;
	}

	getCurrentQueuePoints(): QueuePoints | null {
		if (!this.value.lastPlayerKey) return null;
		return this.value.queuePoints.get(this.value.lastPlayerKey) ?? null;
	}

	getQueuePointsByPlayerKey(playerKey: PlayerKey): QueuePoints | null {
		return this.value.queuePoints.get(playerKey) ?? null;
	}

	async playFromSeekTime(player: YouTubePlayer, seekTime: number): Promise<void> {
		await player.seekTo(seekTime, true);
		const playerState = await player.getPlayerState();
		if (playerState !== PlayerStates.PLAYING) {
			await player.playVideo();
		}
	}

	async getIsPlaying(player: YouTubePlayer): Promise<boolean> {
		return await player.getPlayerState()
			.then(state => state === PlayerStates.PLAYING)
			.catch(() => false);
	}

	async setVolume(player: YouTubePlayer, volume: number): Promise<void> {
		await player.setVolume(volume);
	}

	async getVolume(player: YouTubePlayer): Promise<number> {
		return await player.getVolume();
	}

	async setPlaybackRate(player: YouTubePlayer, rate: number): Promise<void> {
		await player.setPlaybackRate(rate);
	}

	async pauseVideo(player: YouTubePlayer): Promise<void> {
		const playerState = await player.getPlayerState();
		if (playerState !== PlayerStates.PLAYING) return;
		await player.pauseVideo();
	}

	async playVideo(player: YouTubePlayer): Promise<void> {
		const playerState = await player.getPlayerState();
		if (playerState === PlayerStates.PLAYING) return;
		await player.playVideo();
	}

	getCachedDurationByPlayerKey(playerKey: PlayerKey): number {
		return this.value.playerDurations.get(playerKey) ?? 0;
	}

	async getDuration(player: YouTubePlayer): Promise<number> {
		return await player.getDuration();
	}

	async loadVideoById(player: YouTubePlayer, videoId: string): Promise<void> {
		await player.loadVideoById(videoId);
	}

	createQueuePointsFromDuration(keys: string, duration: number): QueuePoints {
		const queuePoints: QueuePoints = {};
		const count = keys.length;
		keys.split('').forEach((key, i) => {
			// Distribute from start to just before the end
			const seekTime = Math.floor((i / count) * duration);
			queuePoints[key] = seekTime;
		});
		return queuePoints;
	}

	hostConnected(): void {
		this.requestUpdate();
	}

	private requestUpdate(): void {
		for (const host of this.hosts) {
			host.requestUpdate();
		}
	}
}
