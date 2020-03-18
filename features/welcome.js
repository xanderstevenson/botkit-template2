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
                        \n 2. For any questions on content, or for help with the course labs, please go to the <a href='https://learningnetwork.cisco.com/s/topic/0TO3i0000008jY5GAI/devnet-certifications-community'> \
                            DevNet Certifications Community</a> and ask/interact with the Experts there. \
                        \n 3. For any <strong>technical issues</strong> with your course, including page appearance, video or lab functionality, or payments, please open a ticket with \
                        <a href='https://devnetsupport.cisco.com/hc/en-us/requests/new?ticket_form_id=360002862214'>DevNet Course Support</a> \
//                         \n\t\t\t e.g. The Terminal isn't reciving input \
//                         \n\t\t\t e.g. \
//                         \n\t\t\t Content \
                        \n`


        if ( message.data.roomType == 'group' ) {

            markDown += `\n_Note that this is a "group" space.\n_I will answer only if mentioned!  \n`
            markDown += `For help, enter: ${ controller.checkAddMention( message.data.roomType, 'help' ) }`
        }
        console.log('memberships created', message);
        await bot.reply( message, { markdown : markDown} );
    });
}
