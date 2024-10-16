package main

func orangesRotting(grid [][]int) int {
	type Point struct {
		x, y int
	}

	directions := []Point{{0, 1}, {1, 0}, {0, -1}, {-1, 0}}
	rows, cols := len(grid), len(grid[0])
	queue := []Point{}
	freshOranges := 0

	for i := 0; i < rows; i++ {
		for j := 0; j < cols; j++ {
			if grid[i][j] == 2 {
				queue = append(queue, Point{i, j})
			} else if grid[i][j] == 1 {
				freshOranges++
			}
		}
	}

	if freshOranges == 0 {
		return 0
	}

	minutes := 0

	// BFS
	for len(queue) > 0 {
		minutes++
		newQueue := []Point{}

		for _, rotten := range queue {
			for _, dir := range directions {
				newX, newY := rotten.x+dir.x, rotten.y+dir.y
				if newX >= 0 && newX < rows && newY >= 0 && newY < cols && grid[newX][newY] == 1 {
					grid[newX][newY] = 2
					freshOranges--
					newQueue = append(newQueue, Point{newX, newY})
				}
			}
		}

		queue = newQueue

		if freshOranges == 0 {
			return minutes
		}
	}

	if freshOranges > 0 {
		return -1
	}

	return minutes
}
