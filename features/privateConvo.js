

module.exports = function (controller) {

controller.hears('take this offline', 'message', async(bot, message) => {

    // switch to a different channel
    await bot.startConversationInRoom(WEBEX_ROOM_ID, message.user);

    // say hello
    await bot.say('Shall we discuss this matter over here?');
    // ... continue...
    await bot.beginDialog(ANOTHER_DIALOG);

});

}