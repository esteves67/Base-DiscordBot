module.exports.info = {
    cmd: ['ping', 'p'],
    roles: [],
    users: []
}

module.exports.comando = (client, msg, args) => {
    msg.channel.send(`**Pong!** ${Math.round(client.ping)}ms`).then(m => m.delete(3000))
}