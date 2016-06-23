var Game = function(options){
	this.dealerHand = [];
	this.playerHand = [];
	this.playerFinal;
	this.dealerFinal;
	this.playerCheck;
	this.dealerCheck;
	this.winna = null;
	this.dealerFirst;
	this.deck = {"acespades":['ace','http://thumb7.shutterstock.com/display_pic_with_logo/1952729/312744605/stock-vector-poker-playing-card-ace-spade-312744605.jpg'],"acehearts":['ace','http://thumb1.shutterstock.com/display_pic_with_logo/1952729/312744590/stock-vector-poker-playing-card-ace-heart-312744590.jpg'],"aceclubs":['ace','http://thumb1.shutterstock.com/display_pic_with_logo/1952729/312744578/stock-vector-poker-playing-card-ace-club-312744578.jpg'],"acediamonds":['ace','http://thumb7.shutterstock.com/display_pic_with_logo/1952729/312744581/stock-vector-poker-playing-card-ace-diamond-312744581.jpg'],"twospades":[2,'http://thumb7.shutterstock.com/display_pic_with_logo/1952729/315405191/stock-vector-poker-playing-card-spade-315405191.jpg'],"twohearts":[2,'http://thumb9.shutterstock.com/display_pic_with_logo/1952729/315405026/stock-vector-poker-playing-card-heart-315405026.jpg'],"twoclubs":[2,'http://thumb9.shutterstock.com/display_pic_with_logo/1952729/315405146/stock-vector-poker-playing-card-club-315405146.jpg'],"twodiamonds":[2,'http://thumb1.shutterstock.com/display_pic_with_logo/1952729/315404900/stock-vector-poker-playing-card-diamond-315404900.jpg'],"threespades":[3,'http://thumb1.shutterstock.com/display_pic_with_logo/1952729/315405134/stock-vector-poker-playing-card-spade-315405134.jpg'],"threehearts":[3,'http://thumb7.shutterstock.com/display_pic_with_logo/1952729/315405215/stock-vector-poker-playing-card-heart-315405215.jpg'],"threeclubs":[3,'http://thumb101.shutterstock.com/display_pic_with_logo/1952729/315405077/stock-vector-poker-playing-card-club-315405077.jpg'],"threediamonds":[3,'http://thumb101.shutterstock.com/display_pic_with_logo/1952729/315404963/stock-vector-poker-playing-card-diamond-315404963.jpg'],"fourspades":[4,'http://thumb9.shutterstock.com/display_pic_with_logo/1952729/315405086/stock-vector-poker-playing-card-spade-315405086.jpg'],"fourhearts":[4,'http://thumb101.shutterstock.com/display_pic_with_logo/1952729/315404867/stock-vector-poker-playing-card-heart-315404867.jpg'],"fourclubs":[4,'http://thumb7.shutterstock.com/display_pic_with_logo/1952729/315404831/stock-vector-poker-playing-card-club-315404831.jpg'],"fourdiamonds":[4,'http://thumb1.shutterstock.com/display_pic_with_logo/1952729/315404810/stock-vector-poker-playing-card-diamond-315404810.jpg'],"fivespades":[5,'http://thumb7.shutterstock.com/display_pic_with_logo/1952729/315404951/stock-vector-poker-playing-card-spade-315404951.jpg'],"fivehearts":[5,'http://thumb1.shutterstock.com/display_pic_with_logo/1952729/315405218/stock-vector-poker-playing-card-heart-315405218.jpg'],"fiveclubs":[5,'http://thumb7.shutterstock.com/display_pic_with_logo/1952729/315405209/stock-vector-poker-playing-card-club-315405209.jpg'],"fivediamonds":[5,'http://thumb7.shutterstock.com/display_pic_with_logo/1952729/315404825/stock-vector-poker-playing-card-diamond-315404825.jpg'],"sixspades":[6,'http://thumb9.shutterstock.com/display_pic_with_logo/1952729/315404846/stock-vector-poker-playing-card-spade-315404846.jpg'],"sixhearts":[6,'http://thumb101.shutterstock.com/display_pic_with_logo/1952729/315405053/stock-vector-poker-playing-card-heart-315405053.jpg'],"sixclubs":[6,'http://thumb9.shutterstock.com/display_pic_with_logo/1952729/315405176/stock-vector-poker-playing-card-club-315405176.jpg'],"sixdiamonds":[6,'http://thumb7.shutterstock.com/display_pic_with_logo/1952729/315404801/stock-vector-poker-playing-card-diamond-315404801.jpg'],"sevenspades":[7,'http://thumb101.shutterstock.com/display_pic_with_logo/1952729/315405203/stock-vector-poker-playing-card-spade-315405203.jpg'],"sevenhearts":[7,'http://thumb101.shutterstock.com/display_pic_with_logo/1952729/315405197/stock-vector-poker-playing-card-heart-315405197.jpg'],"sevenclubs":[7,'http://thumb7.shutterstock.com/display_pic_with_logo/1952729/315405065/stock-vector-poker-playing-card-club-315405065.jpg'],"sevendiamonds":[7,'http://thumb101.shutterstock.com/display_pic_with_logo/1952729/315404933/stock-vector-poker-playing-card-diamond-315404933.jpg'],"eightspades":[8,'http://thumb7.shutterstock.com/display_pic_with_logo/1952729/315405119/stock-vector-poker-playing-card-spade-315405119.jpg'],"eighthearts":[8,'http://thumb9.shutterstock.com/display_pic_with_logo/1952729/315405002/stock-vector-poker-playing-card-heart-315405002.jpg'],"eightclubs":[8,'http://thumb7.shutterstock.com/display_pic_with_logo/1952729/315404855/stock-vector-poker-playing-card-club-315404855.jpg'],"eightdiamonds":[8,'http://thumb7.shutterstock.com/display_pic_with_logo/1952729/315404879/stock-vector-poker-playing-card-diamond-315404879.jpg'],"ninespades":[9,'http://thumb1.shutterstock.com/display_pic_with_logo/1952729/315404840/stock-vector-poker-playing-card-spade-315404840.jpg'],"ninehearts":[9,'http://thumb7.shutterstock.com/display_pic_with_logo/1952729/315404921/stock-vector-poker-playing-card-heart-315404921.jpg'],"nineclubs":[9,'http://thumb7.shutterstock.com/display_pic_with_logo/1952729/315404849/stock-vector-poker-playing-card-club-315404849.jpg'],"ninediamonds":[9,'http://thumb7.shutterstock.com/display_pic_with_logo/1952729/315404819/stock-vector-poker-playing-card-diamond-315404819.jpg'],"tenspades":[10,'http://www.mathematik.com/Blackjack/cards/spades-10.gif'],"tenhearts":[10,'http://thumb1.shutterstock.com/display_pic_with_logo/1952729/315405098/stock-vector-poker-playing-card-heart-315405098.jpg'],"tenclubs":[10,'http://thumb1.shutterstock.com/display_pic_with_logo/1952729/315404984/stock-vector-poker-playing-card-club-315404984.jpg'],"tendiamonds":[10,'http://thumb101.shutterstock.com/display_pic_with_logo/1952729/315405167/stock-vector-poker-playing-card-diamond-315405167.jpg'],"jackspades":[10,'http://thumb1.shutterstock.com/display_pic_with_logo/1952729/312744548/stock-vector-poker-playing-card-jack-spade-312744548.jpg'],"jackhearts":[10,'http://thumb7.shutterstock.com/display_pic_with_logo/1952729/312744575/stock-vector-poker-playing-card-jack-heart-312744575.jpg'],"jackclubs":[10,'http://thumb7.shutterstock.com/display_pic_with_logo/1952729/312744611/stock-vector-poker-playing-card-jack-club-312744611.jpg'],"jackdiamonds":[10,'http://thumb1.shutterstock.com/display_pic_with_logo/1952729/312744608/stock-vector-poker-playing-card-jack-diamond-312744608.jpg'],"queenspades":[10,'http://thumb101.shutterstock.com/display_pic_with_logo/1952729/312744593/stock-vector-poker-playing-card-queen-spade-312744593.jpg'],"queenhearts":[10,'http://thumb7.shutterstock.com/display_pic_with_logo/1952729/312744569/stock-vector-poker-playing-card-queen-heart-312744569.jpg'],"queenclubs":[10,'http://thumb7.shutterstock.com/display_pic_with_logo/1952729/312744599/stock-vector-poker-playing-card-queen-club-312744599.jpg'],"queendiamonds":[10,'http://thumb9.shutterstock.com/display_pic_with_logo/1952729/312744602/stock-vector-poker-playing-card-queen-diamond-312744602.jpg'],"kingspades":[10,'http://thumb9.shutterstock.com/display_pic_with_logo/1952729/312744596/stock-vector-poker-playing-card-king-spade-312744596.jpg'],"kinghearts":[10,'http://thumb1.shutterstock.com/display_pic_with_logo/1952729/312744560/stock-vector-poker-playing-card-king-heart-312744560.jpg'],"kingclubs":[10,'http://thumb1.shutterstock.com/display_pic_with_logo/1952729/312744614/stock-vector-poker-playing-card-king-club-312744614.jpg'],"kingdiamonds":[10,'http://thumb101.shutterstock.com/display_pic_with_logo/1952729/312744587/stock-vector-poker-playing-card-king-diamond-312744587.jpg'],};
};

Game.prototype.startGame = function() {
	$('.deal').remove()
		var dealLength = 4;
		for(var i=1; i <= dealLength; i++){
			var deckList = Object.keys(this.deck);
			var randomCard = deckList[Math.floor(Math.random()*deckList.length)];
			var cardValue = this.deck[randomCard][0];
			var cardPic = this.deck[randomCard][1];
				
			if(i%2 === 0){
				this.playerHand.push(cardValue);
				var myCard = $('<div>',{class:'myCard '+ randomCard});
				var image = $('<img>',{src:cardPic})
				var appendImage = "." + randomCard
				$('.player').append(myCard);
				$(appendImage).append(image)
				delete this.deck[randomCard];
			}else if(i === 1){
				this.dealerHand.push(cardValue);
				var myCard = $('<div>',{class:'myCard '+ randomCard});
				var image = $('<img>',{src:'http://thumb9.shutterstock.com/display_pic_with_logo/670804/670804,1315086183,2/stock-vector-playing-card-back-side-83952118.jpg'})
				var appendImage = "." + randomCard
				dealerFirst = {div:appendImage,img:cardPic};
				$('.dealer').append(myCard);
				$(appendImage).append(image)
				delete this.deck[randomCard];
			}else{
				this.dealerHand.push(cardValue);
				var myCard = $('<div>',{class:'myCard '+ randomCard});
				var image = $('<img>',{src:cardPic})
				var appendImage = "." + randomCard
				$('.dealer').append(myCard);
				$(appendImage).append(image)
				delete this.deck[randomCard];
			}
		}
		this.playerCheck = this.totalHand(this.playerHand);
		this.checkScorePlayer(this.playerCheck);
	if(this.playerFinal === "BLACK JACK"){
		this.dealerCheck = this.totalHand(this.dealerHand)
		this.checkScoreDealer(this.dealerCheck)
		while((this.dealerFinal < 17) && (this.dealerFinal !== "BUST") && (this.dealerFinal !== "BLACK JACK")){
				this.addCard(this.dealerHand,".dealer")
				this.dealerCheck = this.totalHand(this.dealerHand)
				this.checkScoreDealer(this.dealerCheck)
			}
		$(dealerFirst['div']).empty();
		var dealerReal = $('<img>',{src:dealerFirst['img']});
		$(dealerFirst['div']).append(dealerReal);
		this.winna = this.checkWin()
		}
};

Game.prototype.hitMe = function(){
	this.addCard(this.playerHand,".player")
	this.playerCheck = this.totalHand(this.playerHand)
	this.checkScorePlayer(this.playerCheck)
	if ((this.playerFinal === "BUST") || (this.playerFinal === "BLACK JACK")){
		this.dealerCheck = this.totalHand(this.dealerHand);
		this.checkScoreDealer(this.dealerCheck);
		if((this.dealerFinal < 17) && (this.dealerFinal !== "BLACK JACK")){
			while((this.dealerFinal < 17) && (this.dealerFinal !== "BUST") && (this.dealerFinal !== "BLACK JACK")){
				this.addCard(this.dealerHand,".dealer")
				this.dealerCheck = this.totalHand(this.dealerHand)
				this.checkScoreDealer(this.dealerCheck)
			}
		}
	$(dealerFirst['div']).empty();
	var dealerReal = $('<img>',{src:dealerFirst['img']});
	$(dealerFirst['div']).append(dealerReal);
	this.winna = this.checkWin();
	}
}

Game.prototype.stayBoy = function(){
	$('.stay').remove()
	$('.hit').remove()

	this.dealerCheck = this.totalHand(this.dealerHand);
	this.checkScoreDealer(this.dealerCheck);
	while((this.dealerFinal <= this.playerFinal) && (this.dealerFinal < 17) && (this.dealerFinal !== "BUST") && (this.dealerFinal !== "BLACK JACK")){
		this.addCard(this.dealerHand,".dealer")
		this.dealerCheck = this.totalHand(this.dealerHand)
		this.checkScoreDealer(this.dealerCheck)
	}
		$(dealerFirst['div']).empty();
		var dealerReal = $('<img>',{src:dealerFirst['img']});
		$(dealerFirst['div']).append(dealerReal);
		this.winna = this.checkWin();
}

Game.prototype.isAce = function(hand){
	return hand.indexOf('ace') > -1
};

Game.prototype.addCard = function(handName,who){
	var deckList = Object.keys(this.deck);
	var randomCard = deckList[Math.floor(Math.random()*deckList.length)];
	var cardValue = this.deck[randomCard][0];
	var cardPic = this.deck[randomCard][1];
	handName.push(cardValue);
	var myCard = $('<div>',{class:'myCard '+ randomCard});
	var image = $('<img>',{src:cardPic})
	var appendImage = "." + randomCard		
	$(who).append(myCard);
	$(appendImage).append(image)
	delete this.deck[randomCard];
};

Game.prototype.checkScoreDealer = function(score){
	$('.dScore').remove();
	$('.dealerName').remove();
	if(score > 21){
		this.dealerFinal = "BUST";
		var scoreDiv = $('<div>',{class:'dScore',text:"BUST " + score});
		var dealerName = $('<h5>',{class:'dealerName',text:'Dealer'});
		$('.dealerScore').append(dealerName);
		$('.dealerScore').append(scoreDiv);
	}else if(score === 21){
		this.dealerFinal = "BLACK JACK";
		var scoreDiv = $('<div>',{class:'dScore',text:"BLACK JACK"});
		var dealerName = $('<h5>',{class:'dealerName',text:'Dealer'});
		$('.dealerScore').append(dealerName);
		$('.dealerScore').append(scoreDiv);		
	}else{
		this.dealerFinal = score;
		var scoreDiv = $('<div>',{class:'dScore',text:score});
		var dealerName = $('<h5>',{class:'dealerName',text:'Dealer'});
		$('.dealerScore').append(dealerName);
		$('.dealerScore').append(scoreDiv);
	}
};

Game.prototype.checkScorePlayer = function(score){
	$('.pScore').remove();
	$('.hit').remove();
	$('.stay').remove();
	$('.yourScore').remove();
	$('.dealerName').remove();
	if(score > 21){
		this.playerFinal = "BUST";
		var scoreDiv = $('<div>',{class:'pScore',text:"BUST " + score});
		var yourScore = $('<h5>',{class:'yourScore',text:'You'});
		$('.myScore').append(yourScore);
		$('.myScore').append(scoreDiv);
		var dealerName = $('<h5>',{class:'dealerName',text:'Dealer'});
		$('.dealerScore').append(dealerName);
	}else if(score === 21){
		this.playerFinal = "BLACK JACK";
		var scoreDiv = $('<div>',{class:'pScore',text:"BLACK JACK"});
		var yourScore = $('<h5>',{class:'yourScore',text:'You'});
		$('.myScore').append(yourScore);
		$('.myScore').append(scoreDiv);
		var dealerName = $('<h5>',{class:'dealerName',text:'Dealer'});
		$('.dealerScore').append(dealerName);		
	}else{
		this.playerFinal = score;
		var scoreDiv = $('<div>',{class:'pScore',text:score});
		var hitButton = $("<button>",{class:'hit waves-effect waves-light btn red darken-4',text:'Hit'});
		var stayButton = $("<button>",{class:'stay waves-effect waves-light btn red darken-4',text:"Stay"});
		var yourScore = $('<h5>',{class:'yourScore',text:'You'});
		var dealerName = $('<h5>',{class:'dealerName',text:'Dealer'});
		$('.dealerScore').append(dealerName);
		$('.myScore').append(yourScore);
		$('.myScore').append(scoreDiv);
		$('.betButtons').append(hitButton);
		$('.betButtons').append(stayButton);
	};
};

Game.prototype.totalHand = function(hand){
	var haveAce = this.isAce(hand)
	var aceCounter = 0
	var total = 0
	var handLength = hand.length
	if(haveAce){
		for(var i=0; i<hand.length; i++){
			if(hand[i] === 'ace'){
				if(aceCounter === 0){
					aceCounter ++
				}else{
					hand[i] = 1
				}
			}
		}
	}
	if(haveAce){
		for(var i=0; i<hand.length; i++){
			if(hand[i] === "ace"){
				hand.push(11);
			}else if(hand[i] === 11){
				total = total + 11;
				hand.pop();
				if(total > 21){
					total = total - 10;
				}
			}else{
				total = total + hand[i];
			}
		}
	}else{
		for(var i=0; i<handLength; i++){
			total = total + hand[i]
		}
	}

	return total;
};

Game.prototype.checkWin = function(){
	if(this.playerFinal === "BUST"){
		if(this.dealerFinal === "BUST"){
			var winner = "PUSH";
		}else{
			var winner = "Dealer";
		}
	}else if(this.dealerFinal === "BUST"){
		var winner = "You";
	}else if(this.playerFinal === "BLACK JACK"){
		if(this.dealerFinal === "BLACK JACK"){
			var winner = "PUSH";
		}else{
			var winner = 'You';
		}
	}else if(this.dealerFinal === "BLACK JACK"){
		var winner = "Dealer";
	}else if(this.dealerFinal > this.playerFinal){
		var winner = 'Dealer';
	}else if(this.dealerFinal < this.playerFinal){
		var winner = 'You';
	}else if(this.dealerFinal === this.playerFinal){
		var winner = "PUSH";
	}
	return winner
};

Game.prototype.isWinner = function(){
	if(this.winna !== null){
		if(this.winna === "PUSH"){
			var winnerDiv = $('<h5>',{class:'winnerDiv',text:"PUSH"});
			$('.theBetWrapper').append(winnerDiv);
			return this.winna
		}else{
			var winnerDiv = $('<h5>',{class:'winnerDiv',text:this.winna + " win"});
			$('.theBetWrapper').append(winnerDiv);
			return this.winna
		};	
	};
	return this.winna
};
var Money = function(options){
	this.playerMoney = 200;
	this.betMoney = 0;
};
Money.prototype.betTime = function(){
	$('.fucboi').css('display','inline-block');
};
Money.prototype.betTen = function(){
	var check = this.playerMoney - 100;
	if(check > -1){
		this.playerMoney = this.playerMoney - 100;
		this.betMoney = this.betMoney + 100;
	};
};
Money.prototype.betFive = function(){
	var check = this.playerMoney - 50;
	if(check > -1){
		this.playerMoney = this.playerMoney - 50;
		this.betMoney = this.betMoney + 50;
	};
};
Money.prototype.betOne = function(){
	var check = this.playerMoney - 10;
	if(check > -1){
		this.playerMoney = this.playerMoney - 10;
		this.betMoney = this.betMoney + 10;
	};
};
Money.prototype.updateBet = function(){
	$('.pot').remove();
	var pot = "$" + this.betMoney;
	var potDiv = $('<div>',{class:"pot",text:"Your bet: " + pot});
	$('.theBetWrapper').append(potDiv);
	$('.myFunds').remove();
	var funds = "$" + this.playerMoney;
	var fundsDiv = $('<div>',{class:'myFunds',text:funds});
	$('.myMoney').append(fundsDiv);
};

Money.prototype.winnerPot = function(winner){
	if(winner !== null){
	if(winner === 'PUSH'){
		this.playerMoney = this.playerMoney + this.betMoney
		$('.myFunds').remove();
		var funds = "$" + this.playerMoney;
		var fundsDiv = $('<div>',{class:'myFunds',text:funds});
		$('.myMoney').append(fundsDiv);
	}else if(winner === "You"){
		this.playerMoney = this.playerMoney + (this.betMoney * 2);
		$('.myFunds').remove();
		var funds = "$" + this.playerMoney;
		var fundsDiv = $('<div>',{class:'myFunds',	text:funds});
		$('.myMoney').append(fundsDiv);
	}
	this.betMoney = 0;
	$('.pot').remove();
	$('.hit').remove();
	$('.stay').remove();
	if(this.playerMoney >= 10){
		var playAgain = $('<button>',{class:'playAgain waves-effect waves-light btn red darken-4',text:'Play Again'});
		$('.betButtons').append(playAgain);
	}else{
		var playButton = $('<button>',{text:"New Game",class:'newGame waves-effect waves-light btn red darken-4'});
		$('.betButtons').append(playButton);
	};
};
};
$(document).ready(function(){
	console.log("Hi");
	var myGame;
	var myMoney;
	var clearTable = function(){
		$('.newGame').remove();
		$('.play').remove();
		$('.myCard').remove();
		$('.pScore').remove();
		$('.dScore').remove();
		$('.dealerCard').remove();
		$('.winnerDiv').remove();
		$('.hit').remove();
		$('.stay').remove();
		$('.dealerName').remove();
		$('.yourScore').remove();
	}
	$('.betButtons').on('click','.newGame',function(event){
		event.preventDefault();
		$('.myFunds').remove();
		var newMoney = $('<div>',{class:'myFunds',text:'$200'});
		$('.myMoney').append(newMoney);
		myMoney = new Money({});
		clearTable();
		myMoney.betTime();
		
	});
	$('.betButtons').on('click','.play',function(event){
		event.preventDefault();
		myGame = new Game({});
		clearTable();
		myGame.startGame();
		$('.fucboi').css('display','none');
		var getMoney = myGame.isWinner();
		myMoney.winnerPot(getMoney);
	});
	$('.betButtons').on('click','.playAgain',function(event){
		event.preventDefault();
		$('.playAgain').remove();
		clearTable();
		myMoney.betTime();
	})
	$('.betTenButton').on('click',function(event){
		event.preventDefault();
		myMoney.betTen();
		myMoney.updateBet();
		$('.play').remove();
		var playButton = $('<button>',{class:'play waves-effect waves-light btn red darken-4',text:'Ready'});
		$('.betButtons').append(playButton);
	});
	
	$('.betFiveButton').on('click',function(event){
		event.preventDefault();
		myMoney.betFive();
		myMoney.updateBet();
		$('.play').remove();
		var playButton = $('<button>',{class:'play waves-effect waves-light btn red darken-4',text:'Ready'});
		$('.betButtons').append(playButton);
	});

	$('.betOneButton').on('click',function(event){
		event.preventDefault();
		myMoney.betOne();
		myMoney.updateBet();
		$('.play').remove();
		var playButton = $('<button>',{class:'play waves-effect waves-light btn red darken-4',text:'Ready'});
		$('.betButtons').append(playButton);
	});

	$('.betButtons').on('click','.stay',function(event){
		event.preventDefault();
		$('.fucboi').css('display','none');
		$('.stay').remove();
		$('.hit').remove();
		myGame.stayBoy();
		var getMoney = myGame.isWinner();
		myMoney.winnerPot(getMoney);

	});

	$('.betButtons').on('click','.hit',function(event){
		event.preventDefault();
		$('.fucboi').css('display','none');
		myGame.hitMe();
		var getMoney = myGame.isWinner();
		myMoney.winnerPot(getMoney);
	});

})