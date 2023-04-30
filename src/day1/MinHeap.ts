// todo revisit this
export default class MinHeap<T> {
	public length: number;
	public data: T[];

	constructor() {
		this.length = 0;
		this.data = [];
	}

	insert(value: T): void {
		this.data[this.length] = value;
		this.heapifyUp(this.length);
		this.length++;
	}

	delete(): T | undefined {
		if (this.length === 0) {
			return undefined;
		}
		const out = this.data[0];
		this.length--;
		if (this.length === 0) {
			this.data = [];
			return out;
		}
		this.data[0] = this.data[this.length];
		this.heapifyDown(0);
		return out;
	}

	private heapifyDown(idx: number): void {
		const leftIdx = this.leftChild(idx);
		const rightIdx = this.rightChild(idx);
		if (leftIdx >= this.length || idx >= this.length) {
			return;
		}
		const leftValue = this.data[leftIdx];
		const rightValue = this.data[rightIdx];
		const currValue = this.data[idx];
		if (leftValue > rightValue && currValue > rightValue) {
			this.data[idx] = rightValue;
			this.data[rightIdx] = currValue;
			this.heapifyDown(rightIdx);
		} else if (rightValue > leftValue && currValue > leftValue) {
			this.data[idx] = leftValue;
			this.data[leftIdx] = currValue;
			this.heapifyDown(leftIdx);
		}
	}

	private heapifyUp(idx: number): void {
		if (idx === 0) {
			return;
		}
		const p = this.parent(idx);
		const parentValue = this.data[p];
		const currentValue = this.data[idx];
		if (parentValue > currentValue) {
			this.data[idx] = parentValue;
			this.data[p] = currentValue;
			this.heapifyUp(p);
		}
	}

	private parent(idx: number): number {
		return Math.floor((idx - 1) / 2);
	}

	private leftChild(idx: number): number {
		return idx * 2 + 1;
	}

	private rightChild(idx: number): number {
		return idx * 2 + 2;
	}
}
