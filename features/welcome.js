//
// Welcome message 
// sent as the bot is added to a Room
//
module.exports = function (controller) {

    controller.on( 'memberships.created', async( bot, message ) => {

        let markDown = `## **Welcome to DevNet!**\n\n Hi, I'm the **${ controller.adapter.identity.displayName }**!  \
                        \n\n If you need to submit a ticket, you can do so here \
                        --> https://devnetsupport.cisco.com/hc/en-us/requests/new \
                        \n\n Your Self-Help Options for the DevNet Associate Fundamentals Course:\
                        \n 1. Check the course <a href='https://developer.cisco.com/docs/fundamentals/help/'>FAQs<a> \
                        \n 2. Ask the Experts in the <a hreh='https://learningnetwork.cisco.com/s/topic/0TO3i0000008jY5GAI/devnet-certifications-community'> \
                            DevNet Certifications Community</a> \
                        \n 3. Open a Ticket regarding\
                        \n\t Payment \
                        \n\t Platform \
                        \n\t Content \
                        \n`


        if ( message.data.roomType == 'group' ) {

            markDown += `\n_Note that this is a "group" space.\n_I will answer only if mentioned!  \n`
            markDown += `For help, enter: ${ controller.checkAddMention( message.data.roomType, 'help' ) }`
        }
        console.log('memberships created', message);
        await bot.reply( message, { markdown : markDown} );
    });
}
