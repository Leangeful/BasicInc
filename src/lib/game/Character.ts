//import type { Stats } from './GameInterfaces';

export class Character {
	name: string = 'Leange';
	level: number = 0;
	exp: number = 0;
	exp_req: number = 100;

	stats = {
		Strength: 5,
		Endurance: 15,
		Dexterity: 12,
		Intelligence: 3,
		Wisdom: 4
	};
	/* stats: Stat[] = [
		{ name: 'Strength', value: 5 },
		{ name: 'Endurance', value: 15 },
		{ name: 'Dexterity', value: 12 },
		{ name: 'Intelligence', value: 3 },
		{ name: 'Wisdom', value: 4 }
	]; */
}
