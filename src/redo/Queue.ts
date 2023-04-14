type Node<T> = {
	next?: Node<T>
	value: T
}
export default class Queue<T> {
	public length: number;
	public tail?: Node<T>
	public head?: Node<T>

	constructor() {
		this.head = undefined;
		this.tail = undefined;
		this.length = 0;
	}

	enqueue(item: T): void {
		this.length += 1;
		const node: Node<T> = {value: item}
		if (!this.tail) {
			this.head = this.tail = node;
			return;
		}
		this.tail.next = node;
	}

	deque(): T | undefined {
		if (!this.head) {
			return undefined;
		}
		this.length -= 1;
		const temp = this.head;

		this.head = temp.next;
		temp.next = undefined;
		return temp.value;
	}

	peek(): T | undefined {
		return this.head?.value;
	}
}
