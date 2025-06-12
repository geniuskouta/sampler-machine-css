import type { ReactiveController, ReactiveControllerHost } from 'lit';
import PlayerStates from 'youtube-player/dist/constants/PlayerStates';
import type { YouTubePlayer } from 'youtube-player/dist/types';

export type PlayerKey = 'track1' | 'track2' | 'track3';
export type QueuePoints = Record<string, number>;

type State = {
	players: Map<PlayerKey, YouTubePlayer | null>,
	queuePoints: Map<PlayerKey, QueuePoints>,
	lastPlayerKey: PlayerKey | null,
	lastQueueKey: string | null,
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
		queuePoints: new Map<PlayerKey, QueuePoints>([
			['track1', {}],
			['track2', {}],
			['track3', {}],
		]),
		lastPlayerKey: null,
		lastQueueKey: null
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

	addPlayer(key: PlayerKey, player: YouTubePlayer): void {
		this.value.players.set(key, player);
		this.value.lastPlayerKey = key;
		this.value.lastQueueKey = null;
		this.requestUpdate();
	}

	async setDefaultQueuePoints(key: PlayerKey, player: YouTubePlayer): Promise<void> {
		const duration = await this.getDuration(player);
		console.log(duration);
		const queuePoints = this.createQueuePointsFromDuration(this.playerKeyToKeys[key], duration);
		// console.log(queuePoints);
		this.value.queuePoints.set(key, queuePoints);
	}

	getCurrentPlayer(): YouTubePlayer | null {
		if (!this.value.lastPlayerKey) return null;
		return this.value.players.get(this.value.lastPlayerKey) ?? null;
	}

	getCurrentQueuePoints(): QueuePoints | null {
		if (!this.value.lastPlayerKey) return null;
		return this.value.queuePoints.get(this.value.lastPlayerKey) ?? null;
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

	async getDuration(player: YouTubePlayer): Promise<number> {
		return await player.getDuration();
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
