module.exports = {
  
  name: "buy-apple",
  aliases: ['buy-a'],
  code: `
$description[**@$username Success in buying a apple🍎 !!**]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];45]]
$setGlobalUserVar[apple;$sum[$getGlobalUserVar[apple];1]]
$onlyIf[$getGlobalUserVar[cash]>=30;Not enough cash!]`
}