class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution(object):
    def isSubtree(self, s, t):
        def traverse_tree(node):
            if not node:
                return None
            return f"#{node.val} {traverse_tree(node.left)} {traverse_tree(node.right)}"
        return traverse_tree(t) in traverse_tree(s)
