const listeners = new Set<(key: string, type: 'down' | 'up') => void>();

function handleKey(e: KeyboardEvent, type: 'down' | 'up') {
	if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
	for (const l of listeners) l(e.key.toLowerCase(), type);
}

window.addEventListener('keydown', (e) => handleKey(e, 'down'));
window.addEventListener('keyup', (e) => handleKey(e, 'up'));

export const KeyboardManager = {
	subscribe: (fn: (key: string, type: 'down' | 'up') => void): Set<(key: string, type: 'down' | 'up') => void> => listeners.add(fn),
	unsubscribe: (fn: (key: string, type: 'down' | 'up') => void): boolean => listeners.delete(fn),
};
