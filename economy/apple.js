module.exports = {
  
  name: "eat-apple",
    aliases: ['ep-mi'],
  code: `
$description[Ummm... This is so Healthy!]
$setGlobalUserVar[apple;$sub[$getGlobalUserVar[apple];1]]
$setGlobalUserVar[health;$sum[$getGlobalUserVar[health];9]]
$setGlobalUserVar[hungry;$sum[$getGlobalUserVar[hungry];10]]
$setGlobalUserVar[thirsty;$sum[$getGlobalUserVar[thirsty];10]]
$onlyIf[$getGlobalUserVar[health]<=100;Your health level is 100%]
$onlyIf[$getGlobalUserVar[hungry]<=100;Your hungry level is 100%]
$onlyIf[$getGlobalUserVar[thirsty]<=100;Your thirsty level is 100%]
$onlyIf[$getGlobalUserVar[apple]>=1;Not enough Apple!]`
}