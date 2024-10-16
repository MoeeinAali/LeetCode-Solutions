package main

type Node struct {
	Val       int
	Neighbors []*Node
}

func cloneGraph(node *Node) *Node {
	if node == nil {
		return nil
	}
	copies := make([]*Node, 10001)

	dfs(node, copies)

	return copies[node.Val]
}

func dfs(node *Node, copies []*Node) {
	newNode := Node{
		Val:       node.Val,
		Neighbors: nil,
	}
	copies[node.Val] = &newNode
	for _, neighbor := range node.Neighbors {
		if copies[neighbor.Val] == nil {
			dfs(neighbor, copies)
		}
		newNode.Neighbors = append(newNode.Neighbors, copies[neighbor.Val])
	}
}
