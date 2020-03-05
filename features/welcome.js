//
// Welcome message 
// sent as the bot is added to a Room
//
module.exports = function (controller) {

    controller.on( 'memberships.created', async( bot, message ) => {

        let markDown = `** ##Welcome to DevNet!**\n\n Hi, I am the **${ controller.adapter.identity.displayName }**!  \n If you need to submit a ticket, go here --> https://devnetsupport.cisco.com/hc/en-us/requests/new \n`


        if ( message.data.roomType == 'group' ) {

            markDown += `\n_Note that this is a "group" space. \n  I will answer only if mentioned!  \n`
            markDown += `For help, enter: ${ controller.checkAddMention( message.data.roomType, 'help' ) }_`
        }
        console.log('memberships created', message);
        await bot.reply( message, { markdown : markDown} );
    });
}
