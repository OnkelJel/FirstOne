class Character {
  constructor(name, gameClass, item, talent) {
    this.name = name

    this.gameClass = gameClass
    this.item = item
    this.talent = talent
    this.level = 0
    this.skillPoints = 0
  }

  greetings (theOtherCharacterName) {
    console.log(
      `Hello Traveller ${theOtherCharacterName} I have been awaiting you`
    )
  }
}


const lordSteve = new Character("lordSteve", "Melee", null, "Leadership")
const onkelJel = new Character("onkelJel", "Mage", null, "Drip")

lordSteve.greetings(onkelJel.name)
onkelJel.greetings(lordSteve.name)
