import { Character } from './Character';
import type { GameInterface } from './GameInterfaces';
import { save } from './Save';
import { Settings } from './Settings';

export class Game {
	settings: Settings = new Settings();

	data: {
		character: Character;
		n: number;
		clicker: number;
		clicker_inc: number;
	};

	private time_last = 0;
	private time_since_save = 0;

	constructor(saveData?: GameInterface | undefined) {
		if (saveData) {
			this.data = saveData;
		} else {
			this.data = {
				character: new Character(),
				n: 0,
				clicker: 0,
				clicker_inc: 100
			};
		}

		this.time_last = Date.now();
	}

	private getDeltaT(): number {
		const t = Date.now();
		const dT = t - this.time_last;
		this.time_last = t;
		return dT;
	}

	process() {
		const dT = this.getDeltaT();
		this.data.clicker = this.data.clicker + (this.data.clicker_inc * dT) / 1000;
		if (this.data.clicker >= 100) {
			this.data.clicker = 0;
			this.data.n++;
		}
		this.time_since_save += dT;
		if (this.time_since_save >= this.settings.autosave) {
			console.debug('saving');
			save(this.data);
			this.time_since_save = 0;
		}
	}
}
