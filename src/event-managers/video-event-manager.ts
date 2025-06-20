export type VideoEventType = 'video-loaded' | 'pad-pointerdown' | 'track-switched' | 'video-play' | 'video-pause';
import { type PlayerKey } from '../reactive-controllers/video-player-controller';

export type VideoEventDetail = {
	trackName: PlayerKey
}

type Listener = (eventType: VideoEventType, detail: VideoEventDetail) => void;

const listeners = new Set<Listener>();

function handleEvent(e: CustomEvent) {
	// Only handle events of the types we care about
	if (!['video-loaded', 'pad-pointerdown', 'track-switched', 'video-play', 'video-pause'].includes(e.type)) return;

	for (const listener of listeners) {
		listener(e.type as VideoEventType, e.detail as VideoEventDetail);
	}
}

// Listen to custom video events bubbling and composed on document
document.addEventListener('pad-pointerdown', handleEvent as EventListener);
document.addEventListener('track-switched', handleEvent as EventListener);
document.addEventListener('video-loaded', handleEvent as EventListener);
document.addEventListener('video-play', handleEvent as EventListener);
document.addEventListener('video-pause', handleEvent as EventListener);

export const VideoEventManager = {
	subscribe: (fn: Listener): Set<Listener> => {
		listeners.add(fn);
		return listeners;
	},
	unsubscribe: (fn: Listener): boolean => listeners.delete(fn),

	dispatchPadPointerdownEvent: (detail: VideoEventDetail): void => {
		document.dispatchEvent(new CustomEvent('pad-pointerdown', {
			bubbles: true,
			composed: true,
			detail,
		}));
	},

	dispatchVideoSwitchedEvent: (detail: VideoEventDetail): void => {
		document.dispatchEvent(new CustomEvent('track-switched', {
			bubbles: true,
			composed: true,
			detail,
		}));
	},

	dispatchVideoLoadedEvent: (detail: VideoEventDetail): void => {
		document.dispatchEvent(new CustomEvent('video-loaded', {
			bubbles: true,
			composed: true,
			detail,
		}));
	},

	dispatchVideoPlayEvent: (detail: VideoEventDetail): void => {
		document.dispatchEvent(new CustomEvent('video-play', {
			bubbles: true,
			composed: true,
			detail,
		}));
	},

	dispatchVideoPauseEvent: (detail: VideoEventDetail): void => {
		document.dispatchEvent(new CustomEvent('video-pause', {
			bubbles: true,
			composed: true,
			detail,
		}));
	},
};
