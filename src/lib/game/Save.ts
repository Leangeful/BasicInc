import type { GameInterface } from './GameInterfaces';

export function save(game: GameInterface) {
	console.debug('Saving:', game);
	const saveJSON = JSON.stringify(game);
	const saveB64 = btoa(saveJSON);
	localStorage.setItem('save', saveB64);
}

export function load(): GameInterface | undefined {
	const saveB64 = localStorage.getItem('save');
	if (saveB64) {
		return JSON.parse(atob(saveB64));
	}

	return undefined;
}
