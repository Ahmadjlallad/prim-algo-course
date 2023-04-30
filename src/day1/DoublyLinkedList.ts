const util = require("util");

type Node<T> = {
	value: T;
	prev?: Node<T>;
	next?: Node<T>;
};
export default class DoublyLinkedList<T> {
	public length: number;
	private head?: Node<T>;
	private tail?: Node<T>;

	constructor() {
		this.length = 0;
		this.head = this.tail = undefined;
	}

	prepend(item: T): void {
		const node = {value: item} as Node<T>;
		this.length++;
		if (!this.head) {
			this.head = this.tail = node;
			return;
		}
		node.next = this.head;
		this.head.prev = node;
		this.head = node;
	}

	insertAt(item: T, idx: number): void {
		if (idx > this.length) {
			throw new Error("index out of bonce");
		} else if (idx === this.length) {
			this.append(item);
			return;
		} else if (idx === 0) {
			this.prepend(item);
			return;
		}
		this.length++;
		const node: Node<T> = {value: item};
		let curr = this.getAt(idx) as Node<T>;
		node.next = curr;
		node.prev = curr?.prev;
		curr.prev = node;

		if (node?.prev) {
			node.prev.next = node;
		}
	}

	append(item: T): void {
		this.length++;
		const node: Node<T> = {value: item};
		if (!this.tail) {
			this.tail = this.head = node;
			return;
		}
		node.prev = this.tail;
		this.tail.next = node;
		this.tail = node;
	}

	remove(item: T): T | undefined {
		let curr = this.head;
		for (let i = 0; curr && i < this.length; i++) {
			if (curr.value === item) {
				break;
			}
			curr = curr.next;
		}
		if (!curr) {
			return undefined;
		}
		return this.removeNode(curr);
	}

	get(idx: number): T | undefined {
		return this.getAt(idx)?.value;
	}

	removeAt(idx: number): T | undefined {
		this.debugHead();
		const node = this.getAt(idx);
		if (!node) {
			return undefined;
		}
		return this.removeNode(node);
	}

	private getAt(idx: number): Node<T> | undefined {
		let curr = this.head;
		for (let i = 0; curr && i < idx; i++) {
			curr = curr?.next;
		}
		return curr;
	}

	private removeNode(node: Node<T>): T | undefined {
		this.length--;
		if (this.length === 0) {
			const out = this.head?.value;
			this.tail = this.head = undefined;
			return out;
		}
		if (node.prev) {
			node.prev.next = node.next;
		}
		if (node.next) {
			node.next.prev = node.prev;
		}
		if (this.head === node) {
			this.head = node.next;
		}
		if (this.tail === node) {
			this.head = node.prev;
		}
		this.debugHead();
		node.prev = node.next = undefined;
		return node.value;
	}

	private debugHead() {
		console.log(
			util.inspect(this.head, false, null, true /* enable colors */),
		);
	}
}
