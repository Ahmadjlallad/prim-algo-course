export default class MinHeap<T> {
	public length: number;
	public data: T[];

	constructor() {
		this.length = 0;
		this.data = [];
	}

	insert(value: number): void {
	}

	delete(): number {
	}

	private parent(idx: number): number {
		return Math.floor((idx - 1) / 2);
	}

	private leftChild(idx: number): number {
		return idx * 2 - 1;
	}

	private rightChild(idx: number): number {
		return idx * 2 - 2;
	}
}
