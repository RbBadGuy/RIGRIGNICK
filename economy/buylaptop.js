module.exports = {
  
  name: "buy-laptop",
  aliases: ['buy-lp'],
  code: `
$description[**@$username Success in buying a Laptop💻 !!**]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];13000]]
$setGlobalUserVar[laptop;$sum[$getGlobalUserVar[laptop];1]]
$onlyIf[$getGlobalUserVar[cash]>=13000;Not enough cash!]`
}