import type { SettingsInterface } from './GameInterfaces';

export class Settings implements SettingsInterface {
	tickspeed = 10;
	autosave = 10000;
}
