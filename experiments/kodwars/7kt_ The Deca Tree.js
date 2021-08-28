function tree(trunks) {
  this.trunks = trunks
  this.branches = trunks * 10
  this.twigs = trunks * 100
  this.leaves = trunks * 1000
}

function myTree(tree) {
  console.log(tree)
}

var myTree = new tree(10)

myTree.chopLeaf(1)
Test.assertEquals(myTree.leaves, 9999)
myTree.chopTwig(1)
Test.assertEquals(myTree.twigs, 999)
Test.assertEquals(
  myTree.leaves,
  9989,
  'Removing a twig should also remove 10 leaves'
)
myTree.chopBranch(1)
Test.assertEquals(myTree.branches, 99)
Test.assertEquals(
  myTree.twigs,
  989,
  'Removing a branch should also remove 10 twigs'
)
Test.assertEquals(
  myTree.leaves,
  9889,
  'Removing a branch should also remove 100 leaves'
)
myTree.chopTrunk(1)
Test.assertEquals(myTree.trunks, 9)
Test.assertEquals(
  myTree.branches,
  89,
  'Removing a trunk should also remove 10 branches'
)
Test.assertEquals(
  myTree.twigs,
  889,
  'Removing a trunk should also remove 100 twigs'
)
Test.assertEquals(
  myTree.leaves,
  8889,
  'Removing a trunk should also remove 1000 leaves'
)
Test.assertEquals(
  myTree.describe(),
  'This tree has 9 trunks, 89 branches, 889 twigs and 8889 leaves.'
)
