module.exports = {
  
  name: "selldiamond",
  aliases: ['selldm'],
  code: `
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];1000]]
$setGlobalUserVar[diamond;$sub[$getGlobalUserVar[diamond];1]]
$title[__**SELLING DIAMOND💎**__]
$color[00ff59]
$description[
**@$username Successfully selling 1 diamond for $1000.**]
$onlyIf[$getGlobalUserVar[diamond]>=1;You don't have that many diamonds!.]`
}