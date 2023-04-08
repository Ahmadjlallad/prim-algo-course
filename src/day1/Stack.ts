type Node<T> = {
	prev?: Node<T>
	value: T
}
export default class Stack<T> {
	public length = 0;
	public tail?: Node<T>
	public head?: Node<T>

	constructor() {
		this.head = undefined;
		this.tail = undefined;
		this.length = 0;
	}

	push(item: T): void {
		this.length++
		const node: Node<T> = {value: item}
		if (!this.head) {
			this.head = node;
			return;
		}
		node.prev = this.head;
		this.head = node;
	}

	pop(): T | undefined {
		this.length = Math.max(this.length - 1, 0)
		if (this.length === 0) {
			const head = this.head;
			this.head = undefined;
			return head?.value;
		}
		const head = this.head
		if (!head) {
			return undefined;
		}
		this.head = head.prev;
		return head.value;
	}

	peek(): T | undefined {
		return this.head?.value;
	}
}
