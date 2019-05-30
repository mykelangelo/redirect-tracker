module.exports = stringifier => printer => ({
    writeResponse: res => printer.write(`${getCookies(res, stringifier)}\n- Status: ${res.statusCode} ${res.statusMessage}\n\n`),
    writeUrl: url => printer.write(`\n\n\u{1F517}\n> attempting to GET ${url}\n`),
    writeFinishMessage: () => printer.end(finalMessage)
});

function getCookies(res, toString) {
    const cookies = res.headers['set-cookie'];

    return cookies ? '  \u{1F36A} ' + toString(cookies, ';') : '';
}

const finalMessage = `\n\n\n=^_^= That's all, folks! =^_^=\n\n\n` +
    '🍈💝🔦🗾🐝🌺👸 💭🌾🏭👹🍯💱🌆🐮 🔙🍤🎄📰🏄 📒🌞🍡👴 🐅🐝🏭👇👖🎪 💙🐐💾👷📩🎢🏥 🌉🍧📃👩🔋 🌐👀👩💸💥🐭📙 🕖🕠🐁👞🎸🌜 🕧🕗🎾🐃📬🔠 🎬🐅🐮📦🕡 🕀📱🕠🌰💨🌂🎮. 🍶🎅🍠🔼🌛 🕠🌅🐫💆💦🔠 🌞🐕💗🍢 🍠🏦👋💵🔸🏭🌌 🌀🌾📛🐢🐵👏📠👖 💨💸📃👑📻👬📓 🔼🔁🔨📝💟 🌃🏉🎸🔽🐾🍰📂 📘🌼👸🔬📘🕠💿🐹 📵🐕🕙🐷📯🍇📱🎑 👟🔚🌌💦🏊📼 📷🔝📍🔘🌰👝 👋🏡💁🔈🍒🌔 🎧🍄💰💭📂💂🎠 👝💫💗🔇 🏡🌸🎢💋. 🍷🔧📔👕📈🔹 🍇🔣🌱🐇💯👝🔼🍀 🐹🐜👷🍟🐃🌸🔩 🔖👍🏢🐤🌚🏣📄 📥🎀🔮💒🏥🔐 🐌📹🎃🌋🔎 🌉💛🍳👳🏣🔛🔶 🐓💢💐🎶🎳🎍 🐮🐧🎅🌐🎴 🍟🍂🔃🍶🎼🐘 🔡🐝🎺🎮🕑🐾 📆🌅💉🐨📰🐘 👭🔝🎷🐖🔚🐉 🔈💍🍭💺💂👄🐅 💔🌼🔳👞 🎬📃🌒🐙🎱🐩🔊. 🐵🔟🌔🏂🕧🐑 🐊🎋📴🌐📈🍪 🏫🍸🍬💱📃💊 🐾🕐🔤🐶🎓 💐🔩💷👕💂 🏆🔗🎧🎾 🍀📶💬💻📹 📁🔫🐒👐👀🌖🔁🏬 🎷👐👙🍲🌛📳 📥📨💼🌽📩🌴 🔳👜📊🔐🕠 👏🔘🏫🔀🏰💚 🌇📦💍👂🔪 👠👕💦💵📆🎧 🌖🔫🔫📧🔐🕤💉🍢. 🍺👳🕢🌐🔉🎸 🎌💸🐟🕠🐞💂 🍂🐻🍇🍢 🔌👒👧🎶🐃 🔪🌛💷🏀🐷 💷📑🔍🏨 📏🗽🐩🌱🌻🔺📼 🏆💁📆🎏 👛📧💾📝💌.\n' +
    'psst: for more emojis go to /emojipsum';
