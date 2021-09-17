function Coffee(roast, ounces) {
  this.roast = roast
  this.ounces = ounces
  this.toString = () => {
    if (this.ounces <= 8) {
      return `You’ve ordered a smolle ${this.roast} coffee`
    }
    if (this.ounces > 8 && this.ounces <= 12) {
      return `You’ve ordered a medium ${this.roast} coffee`
    }
    if (this.ounces > 12) {
      return `You’ve ordered a large ${this.roast} coffee`
    }
  }
}
var houseBlend = new Coffee('House Blend', 12)
console.log(houseBlend.toString())
var darkRoast = new Coffee('Dark Roast', 16)
console.log(darkRoast.toString())
