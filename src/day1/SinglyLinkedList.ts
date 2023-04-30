type Node<T> = {
	next?: Node<T>;
	value: T;
};
export default class SinglyLinkedList<T> {
	public length: number;
	public nodes: Node<any>;

	constructor() {
	}

	prepend(item: T): void {
	}

	insertAt(item: T, idx: number): void {
	}

	append(item: T): void {
	}

	remove(item: T): T | undefined {
	}

	get(idx: number): T | undefined {
	}

	removeAt(idx: number): T | undefined {
	}
}
