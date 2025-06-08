import type { ReactiveController, ReactiveControllerHost } from 'lit';
import PlayerStates from 'youtube-player/dist/constants/PlayerStates';
import type { YouTubePlayer } from 'youtube-player/dist/types';

export type PlayerKey = 'track1' | 'track2' | 'track3';

type State = {
	players: Map<PlayerKey, YouTubePlayer | null>,
	lastPlayerKey: PlayerKey | null,
	lastQueueKey: string | null,
};

export class VideoPlayerController implements ReactiveController {
	private static _instance: VideoPlayerController;

	private hosts = new Set<ReactiveControllerHost>();

	value: State = {
		players: new Map<PlayerKey, YouTubePlayer | null>([
			['track1', null],
			['track2', null],
			['track3', null],
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

	getCurrentPlayer(): YouTubePlayer | null {
		if (!this.value.lastPlayerKey) return null;
		return this.value.players.get(this.value.lastPlayerKey) ?? null;
	}

	async getIsPlaying(player: YouTubePlayer): Promise<boolean> {
		return await player.getPlayerState()
			.then(state => state === PlayerStates.PLAYING)
			.catch(() => false);
	}

	toggleCurrentPlayer(): void {
		const player = this.getCurrentPlayer();
		if (!player) return;

		player.getPlayerState()
			.then(state => {
				if (state === PlayerStates.PLAYING) {
					return player.pauseVideo();
				} else {
					return player.playVideo();
				}
			})
			.catch(console.error);
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
