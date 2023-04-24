function search<T>(curr: BinaryNode<T> | null, needle: T): boolean {
	if (!curr) {
		return false;
	}
	if (needle === curr.value) {
		return true;
	}
	if (curr.value < needle) {
		return search(curr.right, needle);
	}
	return search(curr.left, needle);
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
	return search(head, needle);
}
