var util = require('util');
var winston = require('winston');
var youtube_node = require('youtube-node');
var ConfigFile = require("../settings.json");


function YoutubePlugin () {
	this.RickrollUrl = 'http://www.youtube.com/watch?v=oHg5SJYRHA0';
	this.youtube = new youtube_node();
	this.youtube.setKey(ConfigFile.youtube_api_key);
}


YoutubePlugin.prototype.respond = function (query, channel, bot) {
    this.youtube.addParam('type', 'video');
    this.youtube.search(query, 1, function(error, result) {
			if (error) {
				//winston.error("Error querying youtube: " + error);
				bot.send(channel, "Error querying YouTube! (╯°□°）╯︵ ┻━┻");
			}
			else {
				if (!result || !result.items || result.items.length < 1) {
					//winston.error("No results from youtube");
					bot.send(channel, "No results! (╯°□°）╯︵ ┻━┻");
				} else {
					bot.send(channel, "http://www.youtube.com/watch?v=" + result.items[0].id.videoId );
				}
			}
		});

};
