Template.playersList.helpers({
	player : function(){
		return Players.find({},{sort:{score:-1,name :+1}});
	}
});
Template.players.helpers({
	'selectedClass': function(){
		var playerId = this._id;
		var selectedPlayer = Session.get('selectedPlayer');
		if(playerId == selectedPlayer){
			return "selected"
		}
	}
});
Template.body.events({
	'submit form': function(evt){
		evt.preventDefault();
		var playerName = evt.target.playerName.value;
		evt.target.playerName.value = "";
		Players.insert({name:playerName,score:0})
	},
	'click .player':function(){
		Session.set('selectedPlayer',this._id);
		//console.log(this._id);
	},
	'click .increment': function(){
		var selectedPlayer = Session.get('selectedPlayer');
		Players.update(selectedPlayer, {$inc: {score: 5} });
	},
	'click .decrement': function(){
		var selectedPlayer = Session.get('selectedPlayer');
		Players.update(selectedPlayer, {$inc: {score: -5} });
	}
});