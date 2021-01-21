// Create a Monsters Object 
// the monsters object should contain three keys in the object containing a monster name
// Each monster name key should contain an object including:
// traits: array containing at least 2 strings
// size: string
// description: string
// dangerous: boolean
// defeatMethods: an object containing tools to defeat as keys and descriptions of how to use as a string

let monsters = {
    Ghost: {
      traits: ['spooky', 'transparent', 'ooooo'],
      size: 'Varying',
      description: 'Spooky guy that haunts you.',
      dangerous: false,
      defeatMethods: {
        exorcism: 'Use actual priest for best results.',
        holyWater: 'Pair with super soaker',
        salt: 'For a well seasoned ghost'
      }
    },
    Zombie: {
      traits: ['undead', 'slow', 'decaying'],
      size: 'Varies by corpse',
      description: 'A corpse that has come back to life hungry',
      dangerous: true,
      defeatMethods:{
        gun: "Double tap always",
        chainsaw: "Messy but effective"
      }
    },
    Vampire: {
      traits: ['undead', 'pale', 'fangs'],
      size: 'Human sized',
      description: 'A corpse that has come back to life thirsty',
      dangerous: true,
      defeatMethods:{
        stake: "Right through the heart",
        sunlight: "They do not like long walks on the beach",
        garlic: "Eat enough and humans will leave you alone too"
      }
    }
  }

//!Console.log the following
 //*Description for monster 1
 //*The last trait for monster 2
 //*One of the defeat methods for monster 3
console.log(monsters.Ghost.description)
console.log(monsters.Zombie.traits[2])
console.log(monsters.Vampire.defeatMethods.garlic)