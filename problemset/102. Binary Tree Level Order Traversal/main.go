package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func levelOrder(root *TreeNode) [][]int {
	var result [][]int

	bfs(root, &result, 0)

	return result
}

func bfs(root *TreeNode, result *[][]int, level int) {
	if root == nil {
		return
	}

	if len(*result) == level {
		*result = append(*result, make([]int, 0))
	}

	(*result)[level] = append((*result)[level], root.Val)

	bfs(root.Left, result, level+1)
	bfs(root.Right, result, level+1)
}
