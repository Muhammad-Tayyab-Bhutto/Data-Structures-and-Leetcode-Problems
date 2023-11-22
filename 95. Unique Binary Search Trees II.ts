/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
const buildPossibleTrees = (val: any, head: any) => {
    if (!head) return [new TreeNode(val)]
    const res = []
    if (val > head.val) {
        const newNode = new TreeNode(val)
        newNode.left = head 
        res.push(newNode)
        buildPossibleTrees(val, head.right).forEach(t => {
            const x = new TreeNode(head.val)
            x.left = head.left
            x.right = t 
            res.push(x)
        })
    } else {
        const newNode = new TreeNode(val)
        newNode.right = head 
        res.push(newNode)
        buildPossibleTrees(val, head.left).forEach(t => {
            const x = new TreeNode(head.val)
            x.left = t 
            x.right = head.right
            res.push(x)
        })
    }
    return res
}
function generateTrees(n: number): Array<TreeNode | null> {
    let res = [new TreeNode(1)]
    for (let i = 2; i <= n; i++) {
        const nextRes = []
        res.forEach(t => {
            nextRes.push(...buildPossibleTrees(i,t))
        })

        res = nextRes
    }
    return res
};