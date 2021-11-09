module.exports = {
  
  name: "dep",
  aliases: ['deposit'],
  code: `
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$message]]
$setGlobalUserVar[bank;$sum[$getGlobalUserVar[bank];$message]]
$description[**Success deposit $$message Cash to bank!**]
$color[00c8de]
$onlyIf[$message<=$getGlobalUserVar[cash];**The deposit should not exceed the money you have!**]
$onlyIf[$message>=1;**You can only deposit more than $1.**]
$argsCheck[>1;Use: \`$getServerVar[prefix]dep <Ammount>\`]`
}