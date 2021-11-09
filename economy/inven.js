module.exports = {
  
  name: "inven",
  aliases: ['inventory'],
  code: `$title[Your Inventory $username]
$thumbnail[$userAvatar[$authorID]]
$description[**❤Health**
**Health**: $getGlobalUserVar[health]% 
**Hunger Level**: $getGlobalUserVar[hungry]%
**Level of thirst**: $getGlobalUserVar[thirsty]%

**🗃Inventory:**
**Pizza**: $getGlobalUserVar[pizza] 🍕
**apple**: $getGlobalUserVar[apple] 🍎
**Drink**: $getGlobalUserVar[drink] 🥛
**Health Medicine**: $getGlobalUserVar[hm]
**Fish**: $getGlobalUserVar[fish] Kg
**Fishing equipment**: $getGlobalUserVar[fishrod] 🎣
**Diamond**: $getGlobalUserVar[diamond] 💎
**Laptop**: $getGlobalUserVar[laptop] 💻
**Car**: $getGlobalUserVar[car] 🚗
**House**: $getGlobalUserVar[house] 🏡

**⛽Fuel:**
**Fuel of Car**: $getGlobalUserVar[fuel]L]
$color[00c8de]
$footer[/Menu /Health/ Inventory/]
$addTimestamp`
}