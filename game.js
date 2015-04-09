window.onload = function() {
	// You might want to start with a template that uses GameStates:
	//     https://github.com/photonstorm/phaser/tree/master/resources/Project%20Templates/Basic

	// You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
	// You will need to change the fourth parameter to "new Phaser.Game()" from
	// 'phaser-example' to 'game', which is the id of the HTML element where we
	// want the game to go.
	// The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
	// You will need to change the paths you pass to "game.load.image()" or any other
	// loading functions to reflect where you are putting the assets.
	// All loading functions will typically all be found inside "preload()".

	"use strict";

	var game = new Phaser.Game( 1100, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );

	function preload() {
		game.load.audio("question1", "assets/rec_12s.mp3");
		
		game.load.audio("question2", "assets/rec_12s.mp3");
		game.load.audio("question3", "assets/rec_12s.mp3");
		game.load.audio("question4", "assets/rec_12s.mp3");
		game.load.audio("question5", "assets/rec_12s.mp3");
		game.load.audio("question6", "assets/rec_12s.mp3");
		game.load.audio("question7", "assets/rec_12s.mp3");
		game.load.audio("question8", "assets/rec_12s.mp3");
		game.load.audio("question9", "assets/rec_12s.mp3");
		game.load.audio("question10", "assets/rec_12s.mp3");
		game.load.audio("question11", "assets/rec_12s.mp3");
		game.load.audio("question12", "assets/rec_12s.mp3");
		game.load.audio("question13", "assets/rec_12s.mp3");
		game.load.audio("question14", "assets/rec_12s.mp3");
		game.load.audio("question15", "assets/rec_12s.mp3");
		game.load.audio("question16", "assets/rec_12s.mp3");
		game.load.audio("question17", "assets/rec_12s.mp3");
		game.load.audio("question18", "assets/rec_12s.mp3");
		game.load.audio("question19", "assets/rec_12s.mp3");
		game.load.audio("question20", "assets/rec_12s.mp3");
		game.load.audio("question21", "assets/rec_12s.mp3");
		game.load.audio("question22", "assets/rec_12s.mp3");
		game.load.audio("question23", "assets/rec_12s.mp3");
		game.load.audio("question24", "assets/rec_12s.mp3");
		game.load.audio("question25", "assets/rec_12s.mp3");
		game.load.audio("question26", "assets/rec_12s.mp3");
		game.load.audio("question27", "assets/rec_12s.mp3");
		game.load.audio("question28", "assets/rec_12s.mp3");
		game.load.audio("question29", "assets/rec_12s.mp3");
		game.load.audio("question30", "assets/rec_12s.mp3");
		game.load.audio("question31", "assets/rec_12s.mp3");
		game.load.audio("question32", "assets/rec_12s.mp3");
		game.load.audio("question33", "assets/rec_12s.mp3");
		game.load.audio("question34", "assets/rec_12s.mp3");
		game.load.audio("question35", "assets/rec_12s.mp3");
		game.load.audio("question36", "assets/rec_12s.mp3");
		game.load.audio("question37", "assets/rec_12s.mp3");
		game.load.audio("question38", "assets/rec_12s.mp3");
		game.load.audio("question39", "assets/rec_12s.mp3");
		game.load.audio("question40", "assets/rec_12s.mp3");
		game.load.audio("question41", "assets/rec_12s.mp3");
		game.load.audio("question42", "assets/rec_12s.mp3");
		game.load.audio("question43", "assets/rec_12s.mp3");
	}

	var answerText = [];
	var answerRect = [];
	var questionText;	
	var questionRect;

	var question = [];
	var questionAudio = [];
	var q_index = 0;
	var lastIndex = 0;
	var numQuestions = 43;
	//var start = 1;

	var points = 0;
	function create() {
		var styleQ = { font: "20px Verdana", fill: "#9999ff", align: "center" };
		var styleA = { font: "14px Verdana", fill: "#ffffff", align: "left" };

		populateQuestions(question);
		questionRect = new Phaser.Rectangle(game.world.width/2, 20, game.world.width -40, 50);

		for(var i=0; i<4; i++){
			answerRect[i] = new Phaser.Rectangle(i*game.world.width/4 + 15, 340, game.world.width/4 - 30, game.world.height-340);

			answerText[i] = game.add.text(answerRect[i].x, answerRect[i].y, "", styleA);
			answerText[i].name = "answer "+i;
			answerText[i].wordWrap = true;
			answerText[i].wordWrapWidth = answerRect[i].width;
			answerText[i].inputEnabled = true;

			answerText[i].events.onInputDown.add(down, this);
			answerText[i].events.onInputUp.add(up, this);
		}
		answerRect[4] = new Phaser.Rectangle(1*game.world.width/8 + 15, 140, game.world.width/4 - 30, 200);
		answerText[4] = game.add.text(answerRect[4].x, answerRect[4].y, "", styleA);
		answerText[4].name = "answer 4";
		answerText[4].wordWrap = true;
		answerText[4].wordWrapWidth = answerRect[4].width;
		answerText[4].inputEnabled = true;
		answerText[4].events.onInputDown.add(down, this);
		answerText[4].events.onInputUp.add(up, this);

		answerRect[5] = new Phaser.Rectangle(5*game.world.width/8 + 15, 140, game.world.width/4 - 30, 200);
		answerText[5] = game.add.text(answerRect[5].x, answerRect[5].y, "", styleA);
		answerText[5].name = "answer 4";
		answerText[5].wordWrap = true;
		answerText[5].wordWrapWidth = answerRect[5].width;
		answerText[5].inputEnabled = true;
		answerText[5].events.onInputDown.add(down, this);
		answerText[5].events.onInputUp.add(up, this);
		
		var click = game.add.text(game.world.width/2, game.world.height/2, "Click here to start", styleQ);
		click.name = "begin";
		click.anchor.setTo(0.5,0.5);
		click.inputEnabled = true;
		click.events.onInputDown.add(down, this);
		click.events.onInputUp.add(up, this);

		questionText = game.add.text( questionRect.x , questionRect.y,"", styleQ );
		questionText.anchor.setTo(0.5,0.0);
		questionText.wordWrap = true;
		questionText.wordWrapWidth = questionRect.width;

		for(var i=1; i<=numQuestions; i++){
			questionAudio.push(game.add.audio('question' + i));
		}
	}

	function update() {
	}

	function down(item) {
		if(item.name === "begin"){
			item.destroy(true);
//			start = 0;
		}
		else if(q_index === 11){
			if(item.name === "answer 0"){
				item.text = "Thanks";
			}
			else if(item.name === "answer 1"){
				item.text = "This SUCKS! Yuck!";
			}
		}
		else if(q_index === 13){
			if(item.name === "answer 0"){
				item.text = "I am here to get in your opening.";
			}
			else if(item.name === "answer 1"){
				item.text = "I don't understand what things are?";
			}
			else if(item.name === "answer 2"){
				item.text = "Hey, that girl out there is HAWT!";
			}
			else if(item.name === "answer 3"){
				item.text = "*Burp*";
			}
		}
		else if(q_index === 15){
			if(item.name === "answer 0"){
				item.text = "I'll leave now.  Bye.";
			}
			else if(item.name === "answer 1"){
				item.text = "You heard me!";
			}
		}
	}

	function up(item) {
		if(item === "begin"){
			item(true);
	//			start = 0;
			q_index = 0;
		}
		else{
			for(var i=0; i<question[q_index].answerNum;i++){
				if(item.name === "answer " + i){
					points += question[q_index].points[i];
					lastIndex = q_index;
					q_index = question[q_index].next[i];
					break;
				}
			}
			var job;
			if(lastIndex === 15){
				job = "Drunken Hobo.";
			}
			else if(lastIndex === 39){
				if(points >= 15){
					job = "Lobbyist";
				}
				else if(points >= 10){
					job = "Lawyer";
				}
				else if(points >= 0){
					job = "PR Manager";
				}
				else if(points >= -14){
					job = "Used Car Salesman";
				}
				else{
					job = "Dumpster Diver";
				}
			}
			else if(lastIndex === 40){
				if(item.name === "answer 0"){
					if(points >= 15){
						job = "R&D Engineer";
					}
					else if(points >= 0){
						job = "Problem Resolution Specialist";
					}
					else if(points >= -14){
						job = "Support Analyst";
					}
					else{
						job = "Used Computer Store Clerk";
					}
				}
				else if(item.name === "answer 1"){
					if(points >= 15){
						job = "Inside Sales Manager";
					}
					else if(points >= 0){
						job = "Inside Sales Lead Specialist";
					}
					else if(points >= -14){
						job = "TimeShare Phone Sales";
					}
					else{
						job = "Human Sign Spinner";
					}
				}
				else if(item.name === "answer 2"){
					if(points >= 15){
						job = "Credit Union Operations Manager";
					}
					else if(points >= 0){
						job = "Business Analyst";
					}
					else if(points >= -14){
						job = "Delivery Truck Driver";
					}
					else{
						job = "Garbage Collector";
					}
				}
			}
			else if(lastIndex === 41){
				if(item.name === "answer 0"){
					if(points >= 15){
						job = "Director of Sales";
					}
					else if(points >= 0){
						job = "Ticket Manager";
					}
					else if(points >= -14){
						job = "Gym Trainer";
					}
					else{
						job = "Peanut Vender";
					}
				}
				else if(item.name === "answer 1"){
					if(points >= 15){
						job = "Casino Property Manager";
					}
					else if(points >= 0){
						job = "Hotel Manager";
					}
					else if(points >= -14){
						job = "Catering Manager";
					}
					else{
						job = "House Keeper";
					}
				}
				else if(item.name === "answer 2"){
					if(points >= 15){
						job = "Training Development Director";
					}
					else if(points >= 0){
						job = "Training Manager";
					}
					else if(points >= -14){
						job = "Training Specialist";
					}
					else{
						job = "Dog Trainer";
					}
				}
			}
			else if(lastIndex === "42"){
				if(item.name === "answer 0"){
					if(points >= 20){
						job = "Aerospace Engineering Director";
					}
					else if(points >= 15){
						job = "Engineering Manager";
					}
					else if(points >= 0){
						job = "Nuclear Engineer";
					}
					else if(points >= -14){
						job = "Mechanic";
					}
					else{
						job = "Food Production Assembly Worker";
					}
				}
				else if(item.name === "answer 1"){
					if(points >= 20){
						job = "CEO";
					}
					else if(points >= 15){
						job = "Marketing Manager";
					}
					else if(points >= 0){
						job = "Area Operations Manager";
					}
					else if(points >= -14){
						job = "Merchandising Area Manager";
					}
					else{
						job = "Mall Food Court Kiosk Manager";
					}
				}
				else if(item.name === "answer 2"){
					if(points >= 20){
						job = "Hedge Fund Manager";
					}
					else if(points >= 15){
						job = "Forensic Accountant";
					}
					else if(points >= 0){
						job = "investment Analyst";
					}
					else if(points >= -14){
						job = "Auto Loan Credit Analyst";
					}
					else{
						job = "Tele Credit Card Sales";
					}
				}
		

			}		
		}
		if(q_index <43){
			loadQuestion();
		}
		else{
			questionText.text = "Your score was: " + points + ".  Your job fit is " + job;
			for(var i=0; i<6; i++){
				answerText[i].text = "";
			}
		}
	}
	function loadQuestion(){
		for(var i=0; i<6; i++){
			answerText[i].text = "";
		}
		var q = questionAudio[q_index].play();
		q.onStop.add(loadAnswers);
		questionText.text = question[q_index].q;
		
	}
	function loadAnswers(){
		for(var i=0; i<4; i++){
			answerText[i].text = question[q_index].text[i];
		}
		if(q_index === 18){
			answerText[4].text = question[q_index].text[4];
			answerText[5].text = question[q_index].text[5];
		}
		else if(q_index === 34){
			answerText[4].text = question[q_index].text[4];
		}
	}
	function populateQuestions(question){
		question.push({});
		question[0].text = new Array();
		question[0].next = new Array();
		question[0].points = new Array();
		question[0].q ="Hello, so you are qualified to take this game design examination which will test you on your literary and brainstorming skills. You may not like what you see. Do you need to go to the bathroom before taking this exam?";
		question[0].answerNum = 4;
		question[0].text[0] = "No, I'm fine thank you."
		question[0].next[0] = 6;
		question[0].points[0] = 0;
		question[0].text[1] = "Yes, I really need to go.";
		question[0].next[1] = 6;
		question[0].points[1] = 1;

		question.push({});
		question[1].text = new Array();
		question[1].next = new Array();
		question[1].points = new Array();
		question[1].q = "Okay, let's start. Question 1, how do you express your feelings toward the lunch demon?"
		question[1].answerNum = 3;
		question[1].text[0] = "A) Well, I will ask you, does the lunch demon exist? I may have been hallucinating a bit";
		question[1].next[0] = 6;
		question[1].points[0] = 0;
		question[1].text[1] = "B) I have anger towards it because it has eaten my breakfast today and is going to eat me soon";
		question[1].next[1] = 3;
		question[1].points[1] = 0;
		question[1].text[2] = "C) I feel very glad that he is there for me and provides the food that I need";
		question[1].next[2] = 6;
		question[1].points[2] = 0;
		question[1].text[3] = "D) I feel like the lunch demon has eaten the rainbow and I must now save the world from him. I see him as the greatest enemy on this Earth";
		question[1].next[3] = q_index;
		question[1].points[3] = 0;

		question.push({});
		question[2].text = new Array();
		question[2].next = new Array();
		question[2].points = new Array();
		question[2].q ="Question 2, What do you think about the rainbow?";
		question[2].answerNum = 4;
		question[2].text[0] = "A) I think it shines while I am at the beach having a good time and that the rainbow salutes me with peace";
		question[2].next[0] = 6;
		question[2].points[0] = -1;
		question[2].text[1] = "B) I admit to him that I am a failure at life and I feel very angry for its presence and I think it has distracted me from my serious life";
		question[2].next[1] = 6;
		question[2].points[1] = 0;
		question[2].text[2] = "C) The rainbow does not want to help me because I trust on myself to get my work done. ";
		question[2].next[2] = 6;
		question[2].points[2] = -1;
		question[2].text[3] = "D) I go to the rainbow to eat skittles so that the lunch demon does not attack me.  So, implying that, the rainbow protects me from the lunch demon. ";
		question[2].next[3] = 5;
		question[2].points[3] = -3;

		question.push({}); //go to next question
		question[3].text = new Array();
		question[3].next = new Array();
		question[3].points = new Array();
		question[3].q = "Question 3) What do you think about the slug? no kidding here";
		question[3].answerNum = 4;
		question[3].text[0] = "A) The slug is not very kind to me because it is eating parts of the rainbow. Therefore, it is a disturber of peace";
		question[3].next[0] = 4;
		question[3].points[0] = 0;
		question[3].text[1] = "B) I can fight him by going into his black hole via a super fast spaceship and kill his heart instantly";
		question[3].next[1] = 6;
		question[3].points[1] = 1;
		question[3].text[2] = "C) I think he is sweaty and smelly because he eats nasty particles in the world and vommits them to us. ";
		question[3].next[2] = 4;
		question[3].points[2] = 0;
		question[3].text[3] = "D) I really think that he is a great friend of mine because he gives bacteria which is good for most of the people";
		question[3].next[3] = 6;
		question[3].points[3] = -3;

		question.push({});
		question[4].text = new Array();
		question[4].next = new Array();
		question[4].points = new Array();
		question[4].q = "Question 4) What is the deal here with the alien puppy which he came from a UFO? ";
		question[4].answerNum = 3;
		question[4].text[0] = "A) He is a great buddy of mine as he wants to defeat the lunch demon with me";
		question[4].next[0] = 7
		question[4].points[0] = -2;
		question[4].text[1] = "B) I think he is some kind of idiot who should go back to Mars, which is controlled by the slime";
		question[4].next[1] = 7
		question[4].points[1] = 0;
		question[4].text[2] = "C) This puppy looks worse than the dogs I have ever seen in my life";
		question[4].next[2] = 7
		question[4].points[2] = -1;
		question[4].text[3] = "D) I think he is ready to do floating point operations to save this world as it is trying to be divided by zero";
		question[4].next[3] = q_index;
		question[4].points[3] = 0;

		question.push({});
		question[5].text = new Array();
		question[5].next = new Array();
		question[5].points = new Array();
		question[5].q = "Question 5) What does the Magic School Bus do for you?";
		question[5].answerNum = 3;
		question[5].text[0] = "A) I think the bus gives me willings as I am trying to go to school in it and I learn more about the lunch demon";
		question[5].next[0] = 6;
		question[5].points[0] = 0;
		question[5].text[1] = "B) HAHAAHAHAHHAHAH I like talking to friends on the bus, nothing much to say";
		question[5].next[1] = 6;
		question[5].points[1] = -1;
		question[5].text[2] = "C) I hope this bus takes me to outer space so that all the people on the bus take part in destroying the lunch demon and slime to smithereens";
		question[5].next[2] = 6;
		question[5].points[2] = 1;
		question[5].text[3] = "D) I hope the bus slip streams through time to give me what life I need.";
		question[5].next[3] = q_index;
		question[5].points[3] = 0;

		question.push({});
		question[6].text = new Array();
		question[6].next = new Array();
		question[6].points = new Array();
		question[6].q = "Question 6) What has the fungus told you?";
		question[6].answerNum = 4;
		question[6].text[0] = "A) He said he wants to infect my food with E. Coli and Salmonella and did so intentionally.";
		question[6].next[0] = 12;
		question[6].points[0] = 1;
		question[6].text[1] = "B) He said he wants to grow some plants and I am glad of him for that.";
		question[6].next[1] = 8;
		question[6].points[1] = -1;
		question[6].text[2] = "C) He said he would kill the lunch demon by infecting him with fungi."
		question[6].next[2] = 12;
		question[6].points[2] = 0;
		question[6].text[3] = "D) he said he wants to make love with the slime and read the rainbow. ";
		question[6].next[3] = 12;
		question[6].points[3] = -2;

		question.push({});
		question[7].text = new Array();
		question[7].next = new Array();
		question[7].points = new Array();
		question[7].q ="Question 7) What do you think about the word sweaty?";
		question[7].answerNum = 4;
		question[7].text[0] = "A) working in construction for a very long time.";
		question[7].next[0] = 12;
		question[7].points[0] = 1;
		question[7].text[1] = "B) Life sucks, so I am sweaty all the time.";
		question[7].next[1] = 9;
		question[7].points[1] = -1;
		question[7].text[2] = "C) I go out in the woods a lot, so the sweat stays with me as I encounter the lunch demon, slime, and flop moist";
		question[7].next[2] = 12;
		question[7].points[2] = 0;
		question[7].text[3] = "D) I am irritated of what you are asking, So I am going to bed and don't want to deal with this.";
		question[7].next[3] = 12;
		question[7].points[3] = -2;

		question.push({});
		question[8].text = new Array();
		question[8].next = new Array();
		question[8].points = new Array();
		question[8].q = "Question 8), What do you think about the number 13?";
		question[8].answerNum = 3;
		question[8].text[0] = "A) the number of days till the lunch demon destroys my city";
		question[8].next[0] = 12;
		question[8].points[0] = -1;
		question[8].text[1] = "B) the number of days till I graduate from school";
		question[8].next[1] = 12;
		question[8].points[1] = 0;
		question[8].text[2] = "C) the number of days till the Friday the 13th";
		question[8].next[2] = 10;
		question[8].points[2] = 0;
		question[8].text[3] = "D) The number is irrelavent as to what destiny I choose. Please go on.";
		question[8].next[3] = q_index;
		question[8].points[3] = 0;

		question.push({});
		question[9].text = new Array();
		question[9].next = new Array();
		question[9].points = new Array();
		question[9].q = "Question 9, What do you think about the sandwich you are going to eat after the test?";
		question[9].answerNum = 3;
		question[9].text[0] = "A) I will feel disgusted because the lunch demon will eat it.";
		question[9].next[0] = 12;
		question[9].points[0] = -1;
		question[9].text[1] = "B) I put the sandwich in a lunch box and I will eat it when the time is right.";
		question[9].next[1] = 12;
		question[9].points[1] = 0;
		question[9].text[2] = "C) I will share the sandwich with a friend.";
		question[9].next[2] = 11;
		question[9].points[2] = 0;
		question[9].text[3] = "D) The fungus had spread fungi on my sandwich, so I will have to make another one.";
		question[9].next[3] = q_index;
		question[9].points[3] = 0;

		question.push({});
		question[10].text = new Array();
		question[10].next = new Array();
		question[10].points = new Array();
		question[10].q = "Question 10, Where is my money?";
		question[10].answerNum = 2;
		question[10].text[0] = "The lunch demon and the slime ate it and they handled that robbery pretty good.";
		question[10].next[0] = 12;
		question[10].points[0] = 0;
		question[10].text[1] = "B) I am tired of this, I want to go to bed now cuz you are boring me with this stuff.";
		question[10].next[1] = 12;
		question[10].points[1] = -1;
		question[10].text[2] = "C) You still have the money what are you talking about.";
		question[10].next[2] = q_index;
		question[10].points[2] = 0;
		question[10].text[3] = "D) The money is in the black hole and is in no point of return, so your never getting it back.";
		question[10].next[3] = q_index;
		question[10].points[3] = 0;

		question.push({});
		question[11].text = new Array();
		question[11].next = new Array();
		question[11].points = new Array();
		question[11].q = "Question 11) Where do you want to move?";
		question[11].answerNum = 4;
		question[11].text[0] = "A) Virginia, that is not where the lunch demon is.";
		question[11].next[0] = 13;
		question[11].points[0] = 0;
		question[11].text[1] = "B) California, that is where the rainbow is";
		question[11].next[1] = 13;
		question[11].points[1] = -1;
		question[11].text[2] = "C) Florida, that is where nothing evil is at";
		question[11].next[2] = q_index;
		question[11].points[2] = 0;
		question[11].text[3] = "D) New York, that is where the lunch demon is at";
		question[11].next[3] = q_index;
		question[11].points[3] = 0;

		question.push({});
		question[12].text = new Array();
		question[12].next = new Array();
		question[12].points = new Array();
		question[12].q = "Question 12) Let's just say you want to move to Alaska, what do you see?";
		question[12].answerNum = 4;
		question[12].text[0] = "A) flying polar bears who are armed with slimy AK-47s, and they might help me in defeating the lunch demon";
		question[12].next[0] = 18;
		question[12].points[0] = 1;
		question[12].text[1] = "B) Whales that block invaders";
		question[12].next[1] = 16;
		question[12].points[1] = -1;
		question[12].text[2] = "C) I smell the arctic breeze as the lunch demon comes closer";
		question[12].next[2] = 14;
		question[12].points[2] = 0;
		question[12].text[3] = "D) I failed at life and decided to live in a trailer all by myself.";
		question[12].next[3] = 18;
		question[12].points[3] = 0;

//Q13 has different responses
		question.push({});
		question[13].text = new Array();
		question[13].next = new Array();
		question[13].points = new Array();
		question[13].q = "Question 13) What is your reaction to soggy bread?";
		question[13].answerNum = 4;
		question[13].text[0] =  "A) I am pretty sure it is the most trending topic on Twitter.";
		question[13].next[0] = 15;
		question[13].points[0] = -1;
		question[13].text[1] = "B) It smells bad because the fungus and slime had already approached it";
		question[13].next[1] = 15;
		question[13].points[1] = 0;
		question[13].text[2] = "C) I don't eat it because I may get sick from eating it";
		question[13].next[2] = 15;
		question[13].points[2] = -1;
		question[13].text[3] = "D) They smell like shoes that I have worn for a year.";
		question[13].next[3] = 15;
		question[13].points[3] = -2;

		question.push({});
		question[14].text = new Array();
		question[14].next = new Array();
		question[14].points = new Array();
		question[14].q = "Question 14), What are you going to do after the exam today?";
		question[14].answerNum = 3;
		question[14].text[0] = "A) Please pass the question";
		question[14].next[0] = 18;
		question[14].points[0] = 1;
		question[14].text[1] = "B) Read a book";
		question[14].next[1] = 18;
		question[14].points[1] = 0;
		question[14].text[2] = "C) Hope that the lunch demon does not approach me";
		question[14].next[2] = 18;
		question[14].points[2] = -1;
		question[14].text[3] = "D) Look for soggy break at home.";
		question[14].next[3] = q_index;
		question[14].points[3] = 0;

//q15 has different answers
		question.push({});
		question[15].text = new Array();
		question[15].next = new Array();
		question[15].points = new Array();
		question[15].q = "Question 15) What is most entertaining to you?";
		question[15].answerNum = 4;
		question[15].text[0] = "A) I think I am out to blow up some slimy police as it threatens our way of life.  Hence the term 'slimy police state'. ";
		question[15].next[0] = 43;
		question[15].points[0] = 0;
		question[15].text[1] = "B) Traveling through the black hole in a super fast spaceship";
		question[15].next[1] = 43;
		question[15].points[1] = 0;
		question[15].text[2] = "C) Bore myself to death instead.";
		question[15].next[2] = q_index;
		question[15].points[2] = 0;
		question[15].text[3] = "D) Looking at the rainbow";
		question[15].next[3] = q_index;
		question[15].points[3] = 0;

		question.push({});
		question[16].text = new Array();
		question[16].next = new Array();
		question[16].points = new Array();
		question[16].q = "I am a little disappointed to hear you ask that. Why would you show up here if you didn't know why you were showing up. This is a very important job interview; one that will define your entire career. I am afraid that is all I can tell you.";
		question[16].answerNum = 3;
		question[16].text[0] = "Very well, let's continue.";
		question[16].next[0] = 18;
		question[16].points[0] = 0;
		question[16].text[1] = "Don't forget that this interview is two ways. As much as you say that it is important for me, remember that it was you that said that you were excited to meet me.";
		question[16].next[1] = 17;
		question[16].points[1] = 1;
		question[16].text[2] = "So this is the tone that you want to sent for the interview. Very well.";
		question[16].next[2] = 17;
		question[16].points[2] = -1;
		question[16].text[3] = "";
		question[16].next[3] = q_index;
		question[16].points[3] = 0;

		question.push({});
		question[17].text = new Array();
		question[17].next = new Array();
		question[17].points = new Array();
		question[17].q = "Fair enough, let's continue with the interview and see if we can find a position that will suit both your needs and help our vast corporation.";
		question[17].answerNum = 2;
		question[17].text[0] = "Agreed.";
		question[17].next[0] = 18;
		question[17].points[0] = 0;
		question[17].text[1] = "Okay, but you have been warned.";
		question[17].next[1] = 18;
		question[17].points[1] = -1;
		question[17].text[2] = "";
		question[17].next[2] = q_index;
		question[17].points[2] = 0;
		question[17].text[3] = "";
		question[17].next[3] = q_index;
		question[17].points[3] = 0;

		question.push({});
		question[18].text = new Array();
		question[18].next = new Array();
		question[18].points = new Array();
		question[18].q ="Where to you see yourself in 5 years?";
		question[18].answerNum = 6;
		question[18].text[0] = "I see me as your boss, and with you groveling at my feet.";
		question[18].next[0] = 19;
		question[18].points[0] = -2;
		question[18].text[1] = "In an executive position where I can shape the direction of a company, hopefully this one.";
		question[18].next[1] = 19;
		question[18].points[1] = 2;
		question[18].text[2] = "Retired, living of the vast amount of wealth accumulated over the past 5 years.";
		question[18].next[2] = 19;
		question[18].points[2] = -1;
		question[18].text[3] = "I see myself progressing in the company, and learning new skills to benefit the company.";
		question[18].next[3] = 19;
		question[18].points[3] = 1;
		question[18].text[4] =  "I keep all options open, and do not plan that far ahead, so that I can make the decisions as they happen.";
		question[18].next[4] = 19;
		question[18].points[4] = -1;
		question[18].text[5] = "Same place as I am now, just with moderate advances.";
		question[18].next[5] = 19;
		question[18].points[6] = 0;

		question.push({});
		question[19].text = new Array();
		question[19].next = new Array();
		question[19].points = new Array();
		question[19].q ="Which of these areas most interests you?";
		question[19].answerNum = 4;
		question[19].text[0] = "Management.";
		question[19].next[0] = 20;
		question[19].points[0] = 0;
		question[19].text[1] = "Math.";
		question[19].next[1] = 21;
		question[19].points[1] = 0;
		question[19].text[2] = "Science.";
		question[19].next[2] = 21;
		question[19].points[2] = 0;
		question[19].text[3] = "Sales.";
		question[19].next[3] = 22;
		question[19].points[3] = 0;

		question.push({});
		question[20].text = new Array();
		question[20].next = new Array();
		question[20].points = new Array();
		question[20].q = "What is it about Management that interests you?";
		question[20].answerNum = 4;
		question[20].text[0] = "I like bossing people around.";
		question[20].next[0] = 29;
		question[20].points[0] = -2;
		question[20].text[1] = "It is a position that has a great impact in the direction of a company.";
		question[20].next[1] = 29;
		question[20].points[1] = 2;
		question[20].text[2] = "I enjoy assisting and improving the career paths of other employees.";
		question[20].next[2] = 29;
		question[20].points[2] = 1;
		question[20].text[3] = "Management is where the money and advances come from, that is what I am looking for.";
		question[20].next[3] = 29;
		question[20].points[3] = 0;

		question.push({});
		question[21].text = new Array();
		question[21].next = new Array();
		question[21].points = new Array();
		question[21].q = "What is the maximum number of edges in a directed graph with n nodes?"
		question[21].answerNum = 4;
		question[21].text[0] = "N * (N - 1)";
		question[21].next[0] = 29;
		question[21].points[0] = 3;
		question[21].text[1] = "In an undirected graph the Max achievable 137.";
		question[21].next[1] = 29;
		question[21].points[1] = -2;
		question[21].text[2] = "This is an unsolvable question with the information given";
		question[21].next[2] = 29;
		question[21].points[2] = -1;
		question[21].text[3] = "I will not answer any questions that are designed to put me on the spot like this.";
		question[21].next[3] = 29;
		question[21].points[3] = -3;

		question.push({});
		question[22].text = new Array();
		question[22].next = new Array();
		question[22].points = new Array();
		question[22].q = "Sell me this pen.";
		question[22].answerNum = 4;
		question[22].text[0] = "This is a great pen, especially for helpful for those who drop pens, as it is has a grip built in.";
		question[22].next[0] = 23;
		question[22].points[0] = -1;
		question[22].text[1] = "This a very sturdy pen.  Its Titanium design is resistant to all sorts of abuse, so you don't need to worry about damage.";
		question[22].next[1] = 24;
		question[22].points[1] = -1;
		question[22].text[2] = "This pen has style.  It is an award winning design sure to impress all who look at it.";
		question[22].next[2] = 25;
		question[22].points[2] = -1;
		question[22].text[3] = "Tell me a bit about yourself and what your challenges are.";
		question[22].next[3] = 27;
		question[22].points[3] = 1;

		question.push({});
		question[23].text = new Array();
		question[23].next = new Array();
		question[23].points = new Array();
		question[23].q ="I am not interested in the grip of a pen, that has not been a problem in the past.";
		question[23].answerNum = 4;
		question[23].text[0] = "Well, let me tell you that this pen is strong, no need to worry about damaged pens with this titanium design.";
		question[23].next[0] = 26;
		question[23].points[0] = -1;
		question[23].text[1] = "Let me tell you that this pen has won several awards based on its design; it looks great.";
		question[23].next[1] = 26;
		question[23].points[1] = -1;
		question[23].text[2] = "I think you are overlooking the value in having a strong grip in a pen.  Sweaty hands at the end of the day cause embarrassing drops.";
		question[23].next[2] = 26;
		question[23].points[2] = -2;
		question[23].text[3] = "What is it that you are looking for then?";
		question[23].next[3] = 27;
		question[23].points[3] = 1;

		question.push({});
		question[24].text = new Array();
		question[24].next = new Array();
		question[24].points = new Array();
		question[24].q = "I am not interested in the strength of a pen; that has not been an issue.";
		question[24].answerNum = 4;
		question[24].text[0] = "Let me point out the grip of the pen; designed to prevent drops.";
		question[24].next[0] = 26;
		question[24].points[0] = -1;
		question[24].text[1] = "Allow me to point out the award winning design of the pen, sure to impress anyone that sees it.";
		question[24].next[1] = 26;
		question[24].points[1] = -1;
		question[24].text[2] = "I think you are underestimating the importance of strength, if someone steps on a weak pen, it could break and cause a mess.";
		question[24].next[2] = 26;
		question[24].points[2] = -2;
		question[24].text[3] = "What is it that you are looking for then?";
		question[24].next[3] = 27;
		question[24].points[3] = 1;

		question.push({});
		question[25].text = new Array();
		question[25].next = new Array();
		question[25].points = new Array();
		question[25].q = "I am not interested in the look of a pen. That has not been an issue.";
		question[25].answerNum = 4;
		question[25].text[0] = "Let me point out the strenth of the pen, can survive an 18 wheeler running over it with no damage.";
		question[25].next[0] = 26;
		question[25].points[0] = -1;
		question[25].text[1] = "Let me point out the grip of the pen, designed to prevent drops.";
		question[25].next[1] = 26;
		question[25].points[1] = -1;
		question[25].text[2] = "I think you are underestimating the importance of appearance, a good appearance sets first impressions.";
		question[25].next[2] = 26;
		question[25].points[2] = -2;
		question[25].text[3] = "What is it that you are looking for then?";
		question[25].next[3] = 27;
		question[25].points[3] = 1;

		question.push({});
		question[26].text = new Array();
		question[26].next = new Array();
		question[26].points = new Array();
		question[26].q = "That has not been a concern of mine either; i do not think that I will be needing to purchase any of your pens.";
		question[26].answerNum = 3;
		question[26].text[0] = "Well, here is my business card incase you change your mind.";
		question[26].next[0] = 27;
		question[26].points[0] = 0;
		question[26].text[1] = "Sorry I couldn't help you.";
		question[26].next[1] = 27;
		question[26].points[1] = -1;
		question[26].text[2] = "There is no pleasing some people.";
		question[26].next[2] = 27;
		question[26].points[2] = -2;
		question[26].text[3] = "";
		question[26].next[3] = q_index;
		question[26].points[3] = 0;

		question.push({});
		question[27].text = new Array();
		question[27].next = new Array();
		question[27].points = new Array();
		question[27].q = "I have a workforce that is required to work around powerful magnets, and in high temperatures that melt plastics, I need something that is non magnetic, and that will not melt.";
		question[27].answerNum = 4;
		question[27].text[0] = "Our Titanium design is both non-magnetic, and will not melt in high temperatures.";
		question[27].next[0] = 28;
		question[27].points[0] = 2;
		question[27].text[1] = "Hmm, don't know how to help you.";
		question[27].next[1] = 29;
		question[27].points[1] = -2;
		question[27].text[2] = "You could have just told me that in the beginning, just for that, I will sell you nothing.";
		question[27].next[2] = 29;
		question[27].points[2] = -2;
		question[27].text[3] = "";
		question[27].next[3] = q_index;
		question[27].points[3] = 0;

		question.push({});
		question[28].text = new Array();
		question[28].next = new Array();
		question[28].points = new Array();
		question[28].q = "I am interested, what is the Price?";
		question[28].answerNum = 3;
		question[28].text[0] = "Two dollars per pen.";
		question[28].next[0] = 29;
		question[28].points[0] = 1;
		question[28].text[1] = "Two dollars per pen, but if you buy one hundred, it is $1.75 per pen, and orders of 1,000 or more the price is $1.50 per pen, and orders above $10,000 are $1 per pen.";
		question[28].next[1] = 29;
		question[28].points[1] = 3;
		question[28].text[2] = "Not for sale, look what I have that you can't have";
		question[28].next[2] = 29;
		question[28].points[2] = -3;
		question[28].text[3] = "";
		question[28].next[3] = q_index;
		question[28].points[3] = 0;

		question.push({});
		question[29].text = new Array();
		question[29].next = new Array();
		question[29].points = new Array();
		question[29].q = "What is your ideal workload level.";
		question[29].answerNum = 4;
		question[29].text[0] = "No work at all.";
		question[29].next[0] = 30;
		question[29].points[0] = -1;
		question[29].text[1] =  "I will work on anything no matter how hard it is from 9am to 5pm, but after those time, it is my time.";
		question[29].next[1] = 30;
		question[29].points[1] = 0;
		question[29].text[2] = "I want to always be challenged.";
		question[29].next[2] = 30;
		question[29].points[2] = 1;
		question[29].text[3] = "100% work, all the time.";
		question[29].next[3] = 30;
		question[29].points[3] = -1;

		question.push({});
		question[30].text = new Array();
		question[30].next = new Array();
		question[30].points = new Array();
		question[30].q ="You are driving a car; a two seater. You have no passenger, but can fit one other person in the car. You pull up to an intersection and there are 3 people: An old Man, dying of a heart attack that will die if he does not get in your car to go to the hospital now, but can be saved if he makes it to a hospital. You Best Friend that has recently saved your life. He is on his way to the airport, and needs you to drive him to the airport. If he does not get in your car, he will miss his flight. The love of your life, they are a perfect match for you in both looks and personality, and you are guaranteed that if you spend time with this person right now, you will hit it off, but it will never work if you pass on this moment. Who do you pick up in your 1 remaining seat? (The car can only fit the driver and 1 passenger, no other people can be \"Squeezed\" in).";
		question[30].answerNum = 4;
		question[30].text[0] = "The old man to the hospital, saving a life is the most important.";
		question[30].next[0] = 32;
		question[30].points[0] = -1;
		question[30].text[1] = "Your best friend to the airport, you owe him your life and loyalty is most important.";
		question[30].next[1] = 32;
		question[30].points[1] = -1;
		question[30].text[2] = "The love of your life. Love is important, and the butterfly affect of missing out on this moment would impact not just you, but the potential family members in your future.";
		question[30].next[2] = 32;
		question[30].points[2] = -1;
		question[30].text[3] = "None of these.";
		question[30].next[3] = 31;
		question[30].points[3] = 0;

		question.push({});
		question[31].text = new Array();
		question[31].next = new Array();
		question[31].points = new Array();
		question[31].q = "What would you do then?";
		question[31].answerNum = 4;
		question[31].text[0] = "I refuse to answer this ridiculous question.";
		question[31].next[0] = 32;
		question[31].points[0] = -2;
		question[31].text[1] = "It is better to pick up no one than to pick one over the other.";
		question[31].next[1] = 32;
		question[31].points[1] = -3;
		question[31].text[2] = "I would cram them all into the car. I know it was against the rules, but I'm a rule breaker.";
		question[31].next[2] = 32; 
		question[31].points[2] = -1;
		question[31].text[3] = "I would get out of the car, hand the keys to my friend and tell him to drive the old man to the hospital, and then himself to the airport, which leaves me and the love of my life together on the street corner to get to know each other.";
		question[31].next[3] = 32;
		question[31].points[3] = 3;

		question.push({});
		question[32].text = new Array();
		question[32].next = new Array();
		question[32].points = new Array();
		question[32].q = "Why did you leave your last job?";
		question[32].answerNum = 4;
		question[32].text[0] = "I was fired.";
		question[32].next[0] = 33;
		question[32].points[0] = -3;
		question[32].text[1] = "The company was a mess and did not meet my standards.";
		question[32].next[1] = 33;
		question[32].points[1] = -2;
		question[32].text[2] = "They were a great company, but they were no longer challenging me in the areas I needed to be challenged in.";
		question[32].next[2] = 33;
		question[32].points[2] = 2;
		question[32].text[3] = "Because I wanted more money.";
		question[32].next[3] = 33;
		question[32].points[3] = -1;

		question.push({});
		question[33].text = new Array();
		question[33].next = new Array();
		question[33].points = new Array();
		question[33].q = "What characterize a good boss or colleague in your opinion?";
		question[33].answerNum = 4;
		question[33].text[0] = "I can get along with everyone. But the most important thing is that they are qualified for the job they are doing.";
		question[33].next[0] = 34;
		question[33].points[0] = 2;
		question[33].text[1] = "Someone who is relaxed, and nurtures. They preferably do not cause unneeded stress.";
		question[33].next[1] = 34;
		question[33].points[1] = -1;
		question[33].text[2] = "Someone that is super hot.";
		question[33].next[2] = 34;
		question[33].points[2] = -2;
		question[33].text[3] = "It does not matter to me.";
		question[33].next[3] = 34;
		question[33].points[3] = -1;

		question.push({});
		question[34].text = new Array();
		question[34].next = new Array();
		question[34].points = new Array();
		question[34].q = "What motivates you?";
		question[34].answerNum = 5;
		question[34].text[0] = "Attracting Hotties.";
		question[34].next[0] = 35;
		question[34].points[0] = -2;
		question[34].text[1] = "The meaningful purpose of a job, if I am working on exciting projects, it motivates me.";
		question[34].next[1] = 35;
		question[34].points[1] = 2;
		question[34].text[2] = "Money.";
		question[34].next[2] = 35;
		question[34].points[2] = -1;
		question[34].text[3] = "Recognition.";
		question[34].next[3] = 35;
		question[34].points[3] = -1;
		question[34].text[4] = "Promotions.";
		question[34].next[4] = 35;
		question[34].points[4] = -1;

		question.push({});
		question[35].text = new Array();
		question[35].next = new Array();
		question[35].points = new Array();
		question[35].q = "What working style best matches you?";
		question[35].answerNum = 4;
		question[35].text[0] = "Speed at all costs.";
		question[35].next[0] = 36;
		question[35].points[0] = -1;
		question[35].text[1] = "To approach my work carefully and methodically.";
		question[35].next[1] = 37;
		question[35].points[1] = 2;
		question[35].text[2] = "Prepare all the time so that I am ready in the moment.";
		question[35].next[2] = 37;
		question[35].points[2] = 2;
		question[35].text[3] = "Be flexible, and take things as they come.";
		question[35].next[3] = 38;
		question[35].points[3] = -2;

		question.push({});
		question[36].text = new Array();
		question[36].next = new Array();
		question[36].points = new Array();
		question[36].q = "We are almost done, lets discuss your potential job over lunch, lets take your car.";
		question[36].answerNum = 2;
		question[36].text[0] = "Sure.";
		question[36].next[0] = 40;
		question[36].points[0] = 0;
		question[36].text[1] = "I would prefer if we finished the discussion here.";
		question[36].next[1] = 39;
		question[36].points[1] = 0;
		question[36].text[2] = "";
		question[36].next[2] = q_index;
		question[36].points[2] = 0;
		question[36].text[3] = "";
		question[36].next[3] = q_index;
		question[36].points[3] = 0;

		question.push({});
		question[37].text = new Array();
		question[37].next = new Array();
		question[37].points = new Array();
		question[37].q = "We are almost done, lets discuss your potential job over lunch, lets take your car.";
		question[37].answerNum = 2;
		question[37].text[0] = "Sure.";
		question[37].next[0] = 42;
		question[37].points[0] = 0;
		question[37].text[1] = "I would prefer if we finished the discussion here.";
		question[37].next[1] = 39;
		question[37].points[1] = 0;
		question[37].text[2] = "";
		question[37].next[2] = q_index;
		question[37].points[2] = 0;
		question[37].text[3] = "";
		question[37].next[3] = q_index;
		question[37].points[3] = 0;

		question.push({});
		question[38].text = new Array();
		question[38].next = new Array();
		question[38].points = new Array();
		question[38].q = "We are almost done, lets discuss your potential job over lunch. Let's take your car.";
		question[38].answerNum = 4;
		question[38].text[0] = "Sure.";
		question[38].next[0] = 41;
		question[38].points[0] = 0;
		question[38].text[1] = "I would prefer if we finished the discussion here.";
		question[38].next[1] = 39;
		question[38].points[1] = 0;
		question[38].text[2] = "";
		question[38].next[2] = q_index;
		question[38].points[2] = 0;
		question[38].text[3] = "";
		question[38].next[3] = q_index;
		question[38].points[3] = 0;

		question.push({});
		question[39].text = new Array();
		question[39].next = new Array();
		question[39].points = new Array();
		question[39].q ="Very well then, based on your answers you have qualified for the following position:";
		question[39].answerNum = 1;
		question[39].text[0] = "Okay.";
		question[39].next[0] = 43;
		question[39].points[0] = 0;
		question[39].text[1] = "";
		question[39].next[1] = q_index;
		question[39].points[1] = 0;
		question[39].text[2] = "";
		question[39].next[2] = q_index;
		question[39].points[2] = 0;
		question[39].text[3] = "";
		question[39].next[3] = q_index;
		question[39].points[3] = 0;

		question.push({});
		question[40].text = new Array();
		question[40].next = new Array();
		question[40].points = new Array();
		question[40].q = "My Goodness, is this your car? It is a mess! Anyway, I have one final question for you: what area most interests you?"
		question[40].answerNum = 3;
		question[40].text[0] = "Tech.";
		question[40].next[0] = 43;
		question[40].points[0] = 0;
		question[40].text[1] = "Sales.";
		question[40].next[1] = 43;
		question[40].points[1] = 0;
		question[40].text[2] = "Operations.";
		question[40].next[2] = 43;
		question[40].points[2] = 0;
		question[40].text[3] = "";
		question[40].next[3] = q_index;
		question[40].points[3] = 0;

		question.push({});
		question[41].text = new Array();
		question[41].next = new Array();
		question[41].points = new Array();
		question[41].q ="Is this your car? It looks like it has a flat tire; this will put a hitch in our lunch plans, but I only had one more question for you: which of these fields most interest you?";
		question[41].answerNum = 4;
		question[41].text[0] = "Sports.";
		question[41].next[0] = 43;
		question[41].points[0] = 0;
		question[41].text[1] = "Hospitality.";
		question[41].next[1] = 43;
		question[41].points[1] = 0;
		question[41].text[2] = "Training.";
		question[41].next[2] = 43;
		question[41].points[2] = 0;
		question[41].text[3] = "";
		question[41].next[3] = q_index;
		question[41].points[3] = 0;

		question.push({});
		question[42].text = new Array();
		question[42].next = new Array();
		question[42].points = new Array();
		question[42].q = "Great! Before we get to your car, I have one final question to ask you: which of these fields most interests you?";
		question[42].answerNum = 3;
		question[42].text[0] = "Engineering.";
		question[42].next[0] = 43;
		question[42].points[0] = 0;
		question[42].text[1] = "Management.";
		question[42].next[1] = 43;
		question[42].points[1] = 0;
		question[42].text[2] = "Finance.";
		question[42].next[2] = 43;
		question[42].points[2] = 0;
		question[42].text[3] = "";
		question[42].next[3] = q_index;
		question[42].points[3] = 0;
	}
};
