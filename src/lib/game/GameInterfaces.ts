export interface GameInterface {
	character: CharacterInterface;

	n: number;
	clicker: number;
	clicker_inc: number;
}

export interface SettingsInterface {
	tickspeed: number;
	autosave: number;
}

export interface CharacterInterface {
	name: string;
	level: number;
	exp: number;
	exp_req: number;
	stats: Stats;
}

export interface Stats {
	Strength: number;
	Endurance: number;
	Dexterity: number;
	Intelligence: number;
	Wisdom: number;
}

export interface Upgrade {
	id: string;
	name: string;
	level: number;
	cost: number;
}
