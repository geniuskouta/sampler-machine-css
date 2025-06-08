import type { ReactiveController, ReactiveControllerHost } from 'lit';
import type { YouTubePlayer } from 'youtube-player/dist/types';

export type PlayerKey = 'track1' | 'track2' | 'track3'

type State = {
	players: Map<PlayerKey, YouTubePlayer | null>,
	lastPlayerKey: PlayerKey | null,
	lastQueueKey: string | null,
}

export class VideoPlayerController implements ReactiveController {
	host: ReactiveControllerHost;

	value: State = {
		players: new Map<PlayerKey, YouTubePlayer | null>([
			['track1', null],
			['track2', null],
			['track3', null],
		]),
		lastPlayerKey: null,
		lastQueueKey: null
	};

	constructor(host: ReactiveControllerHost) {
		(this.host = host).addController(this);
	}

	addPlayer(key: PlayerKey, player: YouTubePlayer): void {
		this.value.players.set(key, player);
		this.host.requestUpdate();
	}

	hostConnected(): void {
		this.host.requestUpdate();
	}
}
