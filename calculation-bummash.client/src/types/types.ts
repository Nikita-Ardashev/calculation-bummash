export interface IDiscCalc {
	volume: number;
	milimeterDisc: number;
	milimeterDiscWithHole: number;
	sphericity: number;
	weight: number;
	newHeight: number;
	newDiameter: number;
}

export type TDiscCalcParameters = 'height' | 'diameterDisc' | 'diameterHole';

export interface IDiscCalcParameters {
	height: number;
	diameterDisc: number;
	diameterHole: number;
}
