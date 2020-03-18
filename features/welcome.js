//
// Welcome message 
// sent as the bot is added to a Room
//
module.exports = function (controller) {

    controller.on( 'memberships.created', async( bot, message ) => {

        let markDown = `## **Welcome to DevNet!**\n\n Hi, I'm the **${ controller.adapter.identity.displayName }**!  \
                        \n\n Your Self-Help Options for the DevNet Associate Fundamentals Course:\
                        \n 1. <strong>Search for common issues and their answers</strong> in the course <a href='https://developer.cisco.com/docs/fundamentals/help/'>FAQs<a> \
                        \n 2. For any <strong>questions on content</strong>, or for <strong>help with the course labs</strong>, please go to the DevNet Certifications Community and<a href='https://learningnetwork.cisco.com/s/topic/0TO3i0000008jY5GAI/devnet-certifications-community'> \
                             ask the Experts</a> there. \
                        \n 3. For any <strong>technical issues</strong> with your course, including page appearance, video or lab functionality, or payments, please \
                        <a href='https://devnetsupport.cisco.com/hc/en-us/requests/new?ticket_form_id=360002862214'>open a ticket</a> with DevNet Course Support \
                        \n`


        if ( message.data.roomType == 'group' ) {

            markDown += `\n_Note_ this is a "group" space.\n_I will answer only if mentioned!  \n`
            markDown += `For help, enter: ${ controller.checkAddMention( message.data.roomType, 'help' ) }`
        }
        console.log('memberships created', message);
        await bot.reply( message, { markdown : markDown} );
    });
}
