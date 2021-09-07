function tree(trunks) {
  this.trunks = trunks
  this.branches = trunks * 10
  this.twigs = trunks * 100
  this.leaves = trunks * 1000
  this.chopTrunk = function (n) {
    if (n >= this.trunks) {
      this.trunks = 0
      this.branches = 0
      this.twigs = 0
      this.leaves = 0
    } else {
      this.trunks -= n
      this.branches -= n * 10
      this.twigs -= n * 100
      this.leaves -= n * 1000
      if (this.trunks < 0) {
        this.trunks = 0
      }
      if (this.branches < 0) {
        this.branches = 0
      }
      if (this.twigs < 0) {
        this.twigs = 0
      }
      if (this.leaves < 0) {
        this.leaves = 0
      }
    }
  }
  this.chopBranch = function (n) {
    if (n >= this.branches) {
      this.branches = 0
      this.twigs = 0
      this.leaves = 0
    } else {
      this.branches -= n
      this.twigs -= n * 10
      this.leaves -= n * 100

      if (this.branches < 0) {
        this.branches = 0
      }
      if (this.twigs < 0) {
        this.twigs = 0
      }
      if (this.leaves < 0) {
        this.leaves = 0
      }
    }
  }
  this.chopTwig = function (n) {
    if (n >= this.twigs) {
      this.twigs = 0
      this.leaves = 0
    } else {
      this.twigs -= n
      this.leaves -= n * 10

      if (this.twigs < 0) {
        this.twigs = 0
      }
      if (this.leaves < 0) {
        this.leaves = 0
      }
    }
  }
  this.chopLeaf = function (n) {
    // console.log(this.trunks)
    // console.log(this.branches)
    // console.log(this.twigs)
    // console.log(this.leaves)
    // console.log(n)

    if (n >= this.leaves) {
      this.leaves = 0
    } else {
      this.leaves -= n

      if (this.leaves < 0) {
        this.leaves = 0
      }
    }
  }
  this.describe = function () {
    return `This tree has ${this.trunks} trunks, ${this.branches} branches, ${this.twigs} twigs and ${this.leaves} leaves.`
  }
}

var myTree = new tree(64)
myTree.chopTrunk(2)
myTree.chopBranch(43)
myTree.chopTwig(77)
myTree.chopLeaf(9861)
myTree.describe()
