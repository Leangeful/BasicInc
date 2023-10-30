export interface IncInterface {
	name: string;
	level: number;
	progress: number;
	inc_sec: number;
}

export class Incrementer implements IncInterface {
	name = '';
	level = 0;
	progress = 0;
	inc_sec = 0;
}
