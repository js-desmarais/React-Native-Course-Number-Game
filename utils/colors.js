export const COLORS = {
	primary500: '#72063c',
	primary600: '#640233',
	primary800: '#4e0329',

	accent500: '#ddb52f',
};

export function hexToRgba(hex, alpha = 1) {
	let r = 0,
		g = 0,
		b = 0;
	if (hex.length === 7) {
		r = parseInt(hex.slice(1, 3), 16);
		g = parseInt(hex.slice(3, 5), 16);
		b = parseInt(hex.slice(5, 7), 16);
	}
	return `rgba(${r},${g},${b},${alpha})`;
}
