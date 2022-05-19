const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", () => {
	console.log(`Data recieved.`);
});

customEmitter.on("response", () => {
	console.log(`Pizza is ready.`);
});

customEmitter.emit("response");
