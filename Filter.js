function getShortMessages(messages){
	return messages.filter(function (e){ return e.message.length<50;}).map(function (e){ return e.message;});
}

module.exports = getShortMessages;