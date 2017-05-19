import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from './../imports/api/players';
import TitleBar from './../imports/ui/Titlebar';
import AddPlayer from './../imports/ui/AddPlayer';
import Player from './../imports/ui/Player';


const renderPlayers = (playersList) => {
    return playersList.map((player) => {
        return <p key={player._id}>
            {player.name}
           <br />
           <br />
            {player.score} :
           <button onClick={() => Players.update(player._id, {$inc: {score: 1}})}>Upvote</button>
           <button onClick={() => Players.update({_id: player._id}, {$inc: {score: -1}})}>Downvote</button>
           <button onClick={() => {
              Players.remove(player._id)
           }
           }>X</button>
        </p>;
    });
};

const handleSubmit = (e) => {
   let playerName = e.target.playerName.value;

   e.preventDefault();

   if (playerName) {
      e.target.playerName.value = '';
      // players insert
       Players.insert({
           name: playerName,
           score: 0
       });
   }
};


Meteor.startup(() => {

   Tracker.autorun(() => {
      let players = Players.find().fetch();
      let title = "IMHO";
      let name = 'Question?';
      let jsx = (
        <div>
           <TitleBar title={title} subtitle="Created by Bien Pham"/>
           <AddPlayer/>
           <form onSubmit={handleSubmit}>
              <input type='text' name="playerName" placeholder="Ask or Search"/>
              <button>What is your question?</button>
           </form>
           <p>Ask your {name}</p>
            {renderPlayers(players)}
        </div>
      );
      ReactDOM.render(jsx, document.getElementById('app'));
   });
});