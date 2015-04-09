var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });
function preload(){
	game.load.spritesheet('button', 'assets/buttons/buttons.png', 900, 100);
	game.load.image('background', 'assets/background.png');
}  

var background; 
var button1;
var button2;
var button3;
var button4;
var buttonText1;
var buttonText2;
var buttonText3;
var buttonText4;
var song;
var times;
//var score;
var text;
function create(){
	//intialize times the questions have been answered
	times = 0;
	score = 0;
	this.background = this.add.tileSprite(0,0,1280, 720, 'background');
	this.score = 0;
	button1 = this.game.add.button(64, 400, 'button', click, this, 2, 1, 0);
	//copied from Phaser examples
	button1.onInputOver.add(over, this);
	button1.onInputOut.add(out,this);
	button1.onInputUp.add(onUp,this);
	
	button2 = this.game.add.button(64, 469, 'button', click, this, 2, 1, 0);
	button2.onInputOver.add(over, this);
	button2.onInputOut.add(out,this);
	button2.onInputUp.add(onUp,this);
	
	button3 = this.game.add.button(64, 538, 'button', click, this, 2, 1, 0);
	button3.onInputOver.add(over, this);//move the mouse over the button
	button3.onInputOut.add(out,this); //the button isn't doing anything
	button3.onInputUp.add(onUp,this); //Click the button
	
	button4 = this.game.add.button(64, 607, 'button', click, this, 2, 1, 0);
	button4.onInputOver.add(over, this);
	button4.onInputOut.add(out,this);
	button4.onInputUp.add(onUp,this);
	//copied from Phaser examples
	text = game.add.text(game.world.centerX, game.world.centerY, "Here we go, let's start the test.");
    text.anchor.set(0.5);
    text.align = 'center';

    text.font = 'Arial Black';
    text.fontSize = 20;
    text.fontWeight = 'bold';
    text.fill = '#ec008c';
	
	buttonText1 = game.add.text(81, 400, "Take a seat");
	buttonText1.fill = '#000000';
	buttonText1.fontSize = 9;
	buttonText1.font = 'Arial Black';
	buttonText1.align = 'left';
	
	buttonText2 = game.add.text(81, 467, "Take a seat");
	buttonText2.fill = '#000000';
	buttonText2.fontSize = 9;
	buttonText2.font = 'Arial Black';
	buttonText2.align = 'left';
	
	buttonText3 = game.add.text(81, 538, "Take a seat");
	buttonText3.fill = '#000000';
	buttonText3.fontSize = 9;
	buttonText3.font = 'Arial Black';
	buttonText3.align = 'left';
	
	buttonText4 = game.add.text(81, 607, "Take a seat");
	buttonText4.fill = '#000000';
	buttonText4.fontSize = 9;
	buttonText4.font = 'Arial Black';
	buttonText4.align = 'left';
	//copied from Phaser examples
	function up() {
		
		console.log('button up', arguments);
		
	}
	function onUp(button, pointer, isOver) {

		//  In this example if the Pointer is no longer over the Button, then we'll treat it
		//  as if the user cancelled the operation and didn't want to press the Button after all

		if (isOver)
		{
			if(times == 1 && button == button4){
				score+=4;
			}
			if(times == 1 && button == button3){
				score+=2;
			}
			if(times == 1 && button == button2){
				score+=3;
			}
			if(times == 1 && button == button1){
				score+=1;
			}
			if(times == 2 && button == button4){
				score+=4;
			}
			if(times == 2 && button == button2){
				score+=2;
			}
			if(times == 2 && button == button1){
				score+=3;
			}
			if(times == 2 && button == button3){
				score+=1;
			}
			if(times == 3 && button == button2){
				score+=4;
			}
			if(times == 3 && button == button3){
				score+=3;
			}
			if(times == 3 && button == button1){
				score+=2;
			}
			if(times == 3 && button == button4){
				score+=1;
			}
			if(times == 4 && button == button4){
				score+=4;
			}
			if(times == 4 && button == button1){
				score+=3;
			}
			if(times == 4 && button == button2){
				score+=2;
			}
			if(times == 4 && button == button3){
				score+=1;
			}
			if(times == 5 && button == button3){
				score+=4;
			}
			if(times == 5 && button == button1){
				score+=3;
			}
			if(times == 5 && button == button4){
				score+=2;
			}
			if(times == 5 && button == button2){
				score+=1;
			}
			if(times == 6 && button == button3){
				score+=4;
			}
			if(times == 6 && button == button1){
				score+=3;
			}
			if(times == 6 && button == button2){
				score+=2;
			}
			if(times == 6 && button == button4){
				score+=1;
			}
			if(times == 7 && button == button3){
				score+=4;
			}
			if(times == 7 && button == button1){
				score+=3;
			}
			if(times == 7 && button == button2){
				score+=2;
			}
			if(times == 7 && button == button4){
				score+=1;
			}
			if(times == 8 && button == button1){
				score+=4;
			}
			if(times == 8 && button == button3){
				score+=3;
			}
			if(times == 8 && button == button2){
				score+=2;
			}
			if(times == 8 && button == button4){
				score+=1;
			}
			if(times == 9 && button == button1){
				score+=4;
			}
			if(times == 9 && button == button4){
				score+=3;
			}
			if(times == 9 && button == button3){
				score+=2;
			}
			if(times == 9 && button == button2){
				score+=1;
			}
			if(times == 10 && button == button1){
				score+=4;
			}
			if(times == 10 && button == button4){
				score+=3;
			}
			if(times == 10 && button == button3){
				score+=2;
			}
			if(times == 10 && button == button2){
				score+=1;
			}
			if(times == 11 && button == button2){
				score+=4;
			}
			if(times == 11 && button == button4){
				score+=3;
			}
			if(times == 11 && button == button3){
				score+=2;
			}
			if(times == 11 && button == button1){
				score+=1;
			}
			if(times == 12 && button == button1){
				score+=4;
			}
			if(times == 12 && button == button2){
				score+=3;
			}
			if(times == 12 && button == button3){
				score+=2;
			}
			if(times == 12 && button == button4){
				score+=1;
			}
			if(times == 13 && button == button2){
				score+=4;
			}
			if(times == 13 && button == button1){
				score+=3;
			}
			if(times == 13 && button == button3){
				score+=2;
			}
			if(times == 13 && button == button4){
				score+=1;
			}
			if(times == 14 && button == button3){
				score+=4;
			}
			if(times == 14 && button == button4){
				score+=3;
			}
			if(times == 14 && button == button1){
				score+=2;
			}
			if(times == 14 && button == button2){
				score+=1;
			}
			if(times == 15 && button == button2){
				score+=4;
			}
			if(times == 15 && button == button1){
				score+=3;
			}
			if(times == 15 && button == button4){
				score+=2;
			}
			if(times == 15 && button == button3){
				score+=1;
			}
			if(times == 16 && button == button4){
				score+=4;
			}
			if(times == 16 && button == button3){
				score+=3;
			}
			if(times == 16 && button == button2){
				score+=2;
			}
			if(times == 16 && button == button1){
				score+=1;
			}
			if(times == 17 && button == button1){
				score+=4;
			}
			if(times == 17 && button == button3){
				score+=3;
			}
			if(times == 17 && button == button4){
				score+=2;
			}
			if(times == 17 && button == button2){
				score+=1;
			}
			if(times == 18 && button == button1){
				score+=4;
			}
			if(times == 18 && button == button4){
				score+=3;
			}
			if(times == 18 && button == button2){
				score+=2;
			}
			if(times == 19 && button == button3){
				score+=1;
			}
			if(times == 19 && button == button1){
				score+=4;
			}
			if(times == 19 && button == button2){
				score+=3;
			}
			if(times == 19 && button == button4){
				score+=2;
			}
			if(times == 19 && button == button3){
				score+=1;
			}
			if(times == 20 && button == button1){
				score+=4;
			}
			if(times == 20 && button == button2){
				score+=3;
			}
			if(times == 20 && button == button4){
				score+=2;
			}
			if(times == 20 && button == button3){
				score+=1;
			}
			if(times == 21 && button == button2){
				score+=4;
			}
			if(times == 21 && button == button1){
				score+=3;
			}
			if(times == 21 && button == button3){
				score+=2;
			}
			if(times == 21 && button == button4){
				score+=1;
			}
			if(times == 22 && button == button1){
				score+=4;
			}
			if(times == 22 && button == button2){
				score+=3;
			}
			if(times == 22 && button == button3){
				score+=2;
			}
			if(times == 22 && button == button4){
				score+=1;
			}
			if(times == 23 && button == button1){
				score+=4;
			}
			if(times == 23 && button == button3){
				score+=3;
			}
			if(times == 23 && button == button2){
				score+=2;
			}
			if(times == 23 && button == button4){
				score+=1;
			}
			if(times == 24 && button == button1){
				score+=4;
			}
			if(times == 24 && button == button4){
				score+=3;
			}
			if(times == 24 && button == button3){
				score+=2;
			}
			if(times == 24 && button == button2){
				score+=1;
			}
		}
	}
	function over() {
		console.log('button over');
	}

	function out() {
		console.log('button out');
	}
	
}
function click(){
	times = times +1;
	if(times ==1){
		text.setText("Okay, let's start. Question 1, how do you express your feelings toward the lunch demon?");   
		buttonText1.setText("A) Well, I will ask you, does the lunch demon exist? I may have been hallucinating a bit");
		buttonText2.setText("B) I have anger towards it because it has eaten my breakfast today and is going to eat me soon");
		buttonText3.setText("C) I feel very glad that he is there for me and provides the food that I need");
		buttonText4.setText("D) I feel like the lunch demon has eaten the rainbow and I must now save the world from him. I see him as the greatest enemy on this Earth");
		//if(button4.forceOut ==true){
			//console.log('came here');
			//this.score +=1;
		//}
		
	}
	if(times ==2){
		text.setText("Question 2, What do you think about the rainbow?");   
		buttonText1.setText("A) I think it shines while I am at the beach having a good time and that the rainbow salutes me with peace");
		buttonText2.setText("B) I admit to him that I am a failure at life and I feel very angry for its presence and I think it has distracted me from my serious life");
		buttonText3.setText("C) The rainbow does not want to help me because I trust on myself to get my work done. ");
		buttonText4.setText("D) I go to the rainbow to eat skittles so that the lunch demon does not attack me.  So, implying that, the rainbow protects me from the lunch demon. ");
	}
	if(times ==3){
		text.setText("Question 3) What do you think about the slug? no kidding here");   
		buttonText1.setText("A) The slug is not very kind to me because it is eating parts of the rainbow. Therefore, it is a disturber of peace");
		buttonText2.setText("B) I can fight him by going into his black hole via a super fast spaceship and kill his heart instantly");
		buttonText3.setText("C) I think he is sweaty and smelly because he eats nasty particles in the world and vommits them to us. ");
		buttonText4.setText("D) I really think that he is a great friend of mine because he gives bacteria which is good for most of the people");
	}
	if(times ==4){
		text.setText("Question 4) What is the deal here with the alien puppy which he came from a UFO? ");   
		buttonText1.setText("A) He is a great buddy of mine as he wants to defeat the lunch demon with me");
		buttonText2.setText("B) I think he is some kind of idiot who should go back to Mars, which is controlled by the slime");
		buttonText3.setText("C) This puppy looks worse than the dogs I have ever seen in my life");
		buttonText4.setText("D) I think he is ready to do floating point operations to save this world as it is trying to be divided by zero");
	}
	if(times ==5){
		text.setText("Question 5) What does the Magic School Bus do for you?");   
		buttonText1.setText("A) I think the bus gives me willings as I am trying to go to school in it and I learn more about the lunch demon");
		buttonText2.setText("B) HAHAAHAHAHHAHAH I like talking to friends on the bus, nothing much to say");
		buttonText3.setText("C) I hope this bus takes me to outer space so that all the people on the bus take part in destroying the lunch demon and slime to smithereens");
		buttonText4.setText("D) I hope the bus slip streams through time to give me what life I need.");
	}
	if(times ==6){
		text.setText("Question 6) What has the fungus told you?");   
		buttonText1.setText("A) He said he wants to infect my food with E. Coli and Salmonella and did so intentionally.");
		buttonText2.setText("B) He said he wants to grow some plants and I am glad of him for that.");
		buttonText3.setText("C) He said he would kill the lunch demon by infecting him with fungi.");
		buttonText4.setText("D) he said he wants to make love with the slime and read the rainbow. ");
	}
	if(times ==7){
		text.setText("Question 7) What do you think about the word sweaty?");   
		buttonText1.setText("A) working in construction for a very long time.");
		buttonText2.setText("B) Life sucks, so I am sweaty all the time.");
		buttonText3.setText("C) I go out in the woods a lot, so the sweat stays with me as I encounter the lunch demon, slime, and flop moist");
		buttonText4.setText("D) I am irritated of what you are asking, So I am going to bed and don't want to deal with this.");
	}
	if(times ==8){
		text.setText("Question 8), What do you think about the number 13?");   
		buttonText1.setText("A) the number of days till the lunch demon destroys my city");
		buttonText2.setText("B) the number of days till I graduate from school");
		buttonText3.setText("C) the number of days till the Friday the 13th");
		buttonText4.setText("D) The number is irrelavent as to what destiny I choose. Please go on.");
	}
	if(times ==9){
		text.setText("Question 9, What do you think about the sandwich you are going to eat after the test?");   
		buttonText1.setText("A) I will feel disgusted because the lunch demon will eat it.");
		buttonText2.setText("B) I put the sandwich in a lunch box and I will eat it when the time is right.");
		buttonText3.setText("C) I will share the sandwich with a friend.");
		buttonText4.setText("D) The fungus had spread fungi on my sandwich, so I will have to make another one.");
	}
	if(times ==10){
		text.setText("Question 10, Where is my money?");   
		buttonText1.setText("A) The lunch demon and the slime ate it and they handled that robbery pretty good.");
		buttonText2.setText("B) I am tired of this, I want to go to bed now cuz you are boring me with this stuff.");
		buttonText3.setText("C) You still have the money what are you talking about.");
		buttonText4.setText("D) The money is in the black hole and is in no point of return, so your never getting it back.");
	}
	if(times ==11){
		text.setText("Question 11) Where do you want to move?");   
		buttonText1.setText("A) Virginia, that is not where the lunch demon is.");
		buttonText2.setText("B) California, that is where the rainbow is");
		buttonText3.setText("C) Florida, that is where you are at peace with the rainbow and enjoying your life");
		buttonText4.setText("D) New York, that is where the lunch demon is at");
	}
	if(times ==12){
		text.setText("Question 12) Let's just say you want to move to Alaska, what do you see?");   
		buttonText1.setText("A) flying polar bears who are armed with slimy AK-47s, and they might help me in defeating the lunch demon");
		buttonText2.setText("B) Whales that block invaders");
		buttonText3.setText("C) I smell the arctic breeze as the lunch demon comes closer");
		buttonText4.setText("D) I failed at life and decided to live in a trailer all by myself.");
	}
	if(times ==13){
		text.setText("Question 13) What is your reaction to soggy bread?");   
		buttonText1.setText("A) I am pretty sure it is the most trending topic on Twitter.");
		buttonText2.setText("B) It smells bad because the fungus and slime had already approached it");
		buttonText3.setText("C) I don't eat it because I may get sick from eating it");
		buttonText4.setText("D) They smell like shoes that I have worn for a year.");
	}
	if(times ==14){
		text.setText("Question 14), What are you going to do after the exam today?");   
		buttonText1.setText("A) Meet Professor Gingold and give him the soggy sandwich(Just joking!!!)");
		buttonText2.setText("B) Read a book");
		buttonText3.setText("C) Hope that the lunch demon does not approach me");
		buttonText4.setText("D) Look for soggy bread at home.");
	}
	if(times ==15){
		text.setText("Question 15) What is most entertaining to you?");   
		buttonText1.setText("A) I think I am out to blow up some slimy police as it threatens our way of life.  Hence the term 'slimy police state'. ");
		buttonText2.setText("B) Traveling through the black hole in a super fast spaceship");
		buttonText3.setText("C) Bore myself to death instead.");
		buttonText4.setText("D) Looking at the rainbow");
	}
	if(times ==16){
		text.setText("Question 16) What are you afraid of?");   
		buttonText1.setText("A) The slug ");
		buttonText2.setText("B) Soggy Bread");
		buttonText3.setText("C) Lunch Demon");
		buttonText4.setText("D) The Slime who is trying to suck you into the black hole");
	}
	if(times ==17){
		text.setText("Question 17) You see a train coming and five workers are working on the rail. What do you do?");   
		buttonText1.setText("A) Push the slug off the balconey and onto the train, slowing it down completely");
		buttonText2.setText("B) Do nothing and let the lunch demon kill the workers");
		buttonText3.setText("C) Put soggy bread in the conductor's(train driver's) mouth");
		buttonText4.setText("D) Put a black hole on the rail so that the train cannot return");
	}
	if(times ==18){
		text.setText("Question 18) You have a smartphone and what are you gonna use it for?");   
		buttonText1.setText("A) Killing the lunch demon with crazy automated tasks");
		buttonText2.setText("B) Taking care of your productivity");
		buttonText3.setText("C) Schoolwork");
		buttonText4.setText("D) Viewing the rainbow in different ways");
	}
	if(times ==19){
		text.setText("Question 19) What TV show do you watch?");   
		buttonText1.setText("A) Slimebob Sluggypants");
		buttonText2.setText("B) The Sweatystones");
		buttonText3.setText("C) The Flopsons");
		buttonText4.setText("D) Slug Rangers");
	}
	if(times ==20){
		text.setText("Question 20) What car do you drive?");   
		buttonText1.setText("A) Slugborghini");
		buttonText2.setText("B) Floperrari");
		buttonText3.setText("C) Fungoyota");
		buttonText4.setText("D) Sluggati");
	}
	if(times ==21){
		text.setText("Question 21) What involves the theory of emergence?");   
		buttonText1.setText("A) Slimy molds in a first person shooter");
		buttonText2.setText("B) Shooting the fungus aliens and their emotions change");
		buttonText3.setText("C) Going into a black hole and shooting the lunch demon");
		buttonText4.setText("D) Driving the sluggati and killing some fungus aliens and having the police on it.");
	}
	if(times ==22){
		text.setText("Question 22) What is your favorite boook?");   
		buttonText1.setText("A) Slomeo and Fuliet");
		buttonText2.setText("B) To kill a floppy bird who is infected with fungus");
		buttonText3.setText("C) Floppy Fungus meets Little Red Riding Hood");
		buttonText4.setText("D) My High School Flappuration");
	}
	if(times ==23){
		text.setText("Question 23) Which college did you go to?");   
		buttonText1.setText("A) Florvard");
		buttonText2.setText("B) The Slime Institute of Fungus Research");
		buttonText3.setText("C) Rainbow University");
		buttonText4.setText("D) Slugtown University");
	}
	if(times ==24){
		text.setText("Question 24) Which gangs have you killed already?");   
		buttonText1.setText("A) The Floppy Gangsters");
		buttonText2.setText("B) The Slimey Slums");
		buttonText3.setText("C) The Sluggafia");
		buttonText4.setText("D) The Fungus Five");
	}
	if(times ==25){
		text.setText("Score is "+score);   
		buttonText1.setText("");
		buttonText2.setText("");
		buttonText3.setText("");
		buttonText4.setText("");
	}
	if(score>=80 && times ==25){
		text.setText("Score is "+score);  
		buttonText1.setText("you got an A for imaginative effort and you get an A automatically in this class. Just joking!!");
		buttonText2.setText("You have defeated the Lunch Demon, the slime, the flop moist, and the slug, and have thrown away the soggy sandwich");
		buttonText3.setText("You are considered the number 1 hero of this city!!!");
		buttonText4.setText("You have been invited to party at Slugtown University");
	}
	if(score>=64 && score < 80 && times == 25){
		text.setText("Score is "+score);  
		buttonText1.setText("you got a B for a not so creative effort and you get a B automatically in this class. Just joking!!");
		buttonText2.setText("You have defeated the slime and slug and the flop moist, and have thrown away the soggy sandwich!!!");
		buttonText3.setText("You are considered the number 2 hero of this city!!!");
		buttonText4.setText("You have been invited to party at Rainbow University");
	}
	if(score>=48 && score < 64 && times==25){
		text.setText("Score is "+score);  
		buttonText1.setText("you got a C for being fair and you get a C automatically in this class. Just joking!!");
		buttonText2.setText("You have defeated the slug and slime and have thrown away the soggy sandwich!!");
		buttonText3.setText("You have earned the respect of a gentlemen, but still no hero!!");
		buttonText4.setText("You have been invited to party at Slugtown University");
	}
	if(score>=32 && score < 48 && times == 25){
		text.setText("Score is "+score);  
		buttonText1.setText("you got a D for being to hard on yourself and you get a D automatically in this class. Just joking!!");
		buttonText2.setText("You have defeated the slug and have thrown away the soggy sandwich!!");
		buttonText3.setText("You are just an ordinary person");
		buttonText4.setText("You have been invited to party at someone's house at 4577 Slug Avenue");
	}
	if(score>=0 && score < 32 && times ==25){
		text.setText("Score is "+score);  
		buttonText1.setText("You just failed the test. Refresh to take the test again. Just joking!!");
		buttonText2.setText("You have only thrown away the soggy sandwich");
		buttonText3.setText("You have only considered yourself only an average citizen who is an average 9-5 working person!!!");
		buttonText4.setText("You have been invited to party at someone's house at 7890 Moist Street");
	}
	
	
}
