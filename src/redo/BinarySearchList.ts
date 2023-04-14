export default function bsSearch(array: number[], target: number): boolean {
	let high = array.length;
	let low = 0;
	do {
		let m = Math.floor(low + (high - low) / 2)
		if (array[m] === target) {
			return true;
		} else if (array[m] < target) {
			low = m + 1;
		} else {
			high = m
		}
	} while (low < high)
	return false;
}
