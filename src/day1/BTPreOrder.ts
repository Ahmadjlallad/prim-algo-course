function walk<T>(curr: BinaryNode<T> | null, path: T[]): T[] {
	if (!curr) {
		return path;
	}
	path.push(curr.value);
	walk(curr.left, path);
	walk(curr.right, path);
	return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
	return walk(head, []);
}
