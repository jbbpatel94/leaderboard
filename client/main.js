Template.addPlayer.events({
	'submit form': function(evt){
		evt.preventDefault();
		console.log("Form submitted");
		console.log(event.type);
	}
});
