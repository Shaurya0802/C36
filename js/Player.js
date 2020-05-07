class Player {
  constructor(){
    this.distance = 0;
    this.index = null;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data) =>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance : this.distance
    });
  }

  static getPlayerInfo(){
    var playersRef = database.ref('players');
    playersRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
