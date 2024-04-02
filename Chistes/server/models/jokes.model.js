const { default: mongoose } = require("mongoose")

const JokeSchema = new mongoose.Schema({
	setup: String,

	punchline: String

});

const Jokes = mongoose.model("Broma", JokeSchema);


module.exports = Jokes;