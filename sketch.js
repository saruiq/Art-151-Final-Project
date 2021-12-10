let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let buttonClicked = false;
let birdpic;
let birdpic2;

//sound variables
let osc;
let env;

// debug variable
let test;

// color variables
let h = 1;
let s = 100;

function setup() {
  createCanvas(1000, 1000);
  angleMode(degrees)
  
  img1 = loadImage("square-gold-frame-png-11552738661aw8addgwjz.png");
  
  img2 = loadImage("red.jpg")
  
  img3 = loadImage("orange.gif")
  
  img4 = loadImage("pink.jpg")
  
  img5 = loadImage("green.jpg")
  
  img6 = loadImage("blue.jpg")
  
  img7 = loadImage("purple.jpg")
  
  img8 = loadImage("yellow.jpg")
  
  img9 = loadImage("sunny.jpg")
  
  birdpic = createImg("bird.gif")
  
  birdpic2 = createImg("birds.gif")
  
  fill(255)
  rect(10, 290, 70,400/2)
  rect(80, 290, 70,400/2)
  rect(150, 290, 70,400/2)
  rect(220, 290, 70,400/2)
  rect(290, 290, 70,400/2)
  rect(360, 290, 70,400/2)
  rect(430, 290, 70,400/2)
  rect(500, 290, 70,400/2)
  
  fill(0)
  rect(65, 290, 30, 120)
  rect(135, 290, 30, 120)
  rect(277, 290, 30, 120)
  rect(345, 290, 30, 120)
  rect(415, 290, 30, 120)
  rect(540, 290, 30, 120)
  
  soundFormats('mp3', 'ogg');
  thunderSound1 = loadSound('Storm_exclamation.mp3');
  thunderSound2 = loadSound('donnerre2.mp3');
  thunderSound3 = loadSound('storm-thunder.mp3');
  thunderSound4 = loadSound('thunder.mp3');
  thunderSound5 = loadSound('thunder2.mp3');
  thunderSound6 = loadSound('thunder3.mp3');
  thunderSound7 = loadSound('thunderrumble.mp3');
  thunderSound8 = loadSound('thundr04.mp3');

  test = false;

  // DO NOT MODIFY CODE AFTER THIS LINE
  env = new p5.Envelope();
  // creates an envelope (see reference for more info)

  env.setADSR(0.1, 0.7, 0.3, 0.1);
  // sets Attack Decay Sustain Release

  env.setRange(1, 0);
  // sets the envelope range

  osc = new p5.Oscillator('sine');
  // you CAN modify the above line :)
  // creates a new oscillator
  // try 'sine', 'triangle', 'sawtooth', and 'square'

  osc.start();
  osc.amp(env);
  // DO NOT MODIFY CODE ABOVE THIS LINE
}

function draw() {
  image(img9, 0, 0, 1143, 580)

  imageMode(CENTER)
  image(img1,290,150, 260, 260)
  fill(255)
  rect(183, 43, 208, 208)


  // ===================================================
  // some note numbers to get you started!
  // on signal 176: k1 - k4, midi notes 14-17
  // on sigal 144: P1-P4, notes 36, 38, 42, 46
  // on 224: PB (pitch bend)
  // on 176: Mod, Sus
  // on 144: key pressed
  // C4 and C5 Octaves:
  // notes 48-72
  // C4 Octave only:
  // notes 48-59

  // ===================================================
  // for your reference:
  // song of time from Legend of Zelda: Ocarina of Time
  // A D F - A D F - A C B G F G A D - C E D

  // ==========================================================
  // This is the if statement to execute code depending on what
  // key on the MIDI Controller has been pressed.
  if (on == 176 && note == 14) {
    // K1 Knob code goes here
  } else if (on == 176 && note == 15) {
    // K2 Knob code goes here
  } else if (on == 176 && note == 16) {
    // K3 Knob code goes here
  } else if (on == 176 && note == 17) {
    // K4 Knob code goes here

  } else if (on == 144 && note == 48) {
    // code for the C4 key goes here (very first white key) on
     fill(255, 0, 0)
     rect(10, 290, 70,400/2)
     image(img2,287, 147, 208, 208)
    
     fill(0)
     rect(65, 290, 30, 120)
     rect(135, 290, 30, 120)
     rect(277, 290, 30, 120)
     rect(345, 290, 30, 120)
     rect(415, 290, 30, 120)
     rect(540, 290, 30, 120)
  
    
     thunderSound1.play()
    
    // default octave
    //s = vel; // this sets the saturation as equal to the velocity
  } else if (on == 144 && note == 50) {
     fill(255, 100, 0)
     rect(80, 290, 70,400/2)
     image(img3,287, 147, 208, 208)
    
     fill(0)
     rect(65, 290, 30, 120)
     rect(135, 290, 30, 120)
     rect(277, 290, 30, 120)
     rect(345, 290, 30, 120)
     rect(415, 290, 30, 120)
     rect(540, 290, 30, 120)
    
    thunderSound2.play()
    
  } else if (on == 144 && note == 52) {
     fill(255, 243, 0)
     rect(150, 290, 70,400/2)
     image(img8,287, 147, 208, 208)
    
     fill(0)
     rect(65, 290, 30, 120)
     rect(135, 290, 30, 120)
     rect(277, 290, 30, 120)
     rect(345, 290, 30, 120)
     rect(415, 290, 30, 120)
     rect(540, 290, 30, 120)
    
     thunderSound3.play()
    
  } else if (on == 144 && note == 53) {
     fill(0, 255, 0)
     rect(220, 290, 70,400/2)
     image(img5,287, 147, 208, 208)
     
     fill(0)
     rect(65, 290, 30, 120)
     rect(135, 290, 30, 120)
     rect(277, 290, 30, 120)
     rect(345, 290, 30, 120)
     rect(415, 290, 30, 120)
     rect(540, 290, 30, 120)
    
     thunderSound4.play()
    
  } else if (on == 144 && note == 55) {
     fill(0, 0, 255)
     rect(290, 290, 70,400/2)
     image(img6,287, 147, 208, 208)
    
     fill(0)
     rect(65, 290, 30, 120)
     rect(135, 290, 30, 120)
     rect(277, 290, 30, 120)
     rect(345, 290, 30, 120)
     rect(415, 290, 30, 120)
     rect(540, 290, 30, 120) 
    
     thunderSound5.play()
    
  } else if (on == 144 && note == 57) {
     fill(139, 0, 255)
     rect(360, 290, 70,400/2)
     image(img7,287, 147, 208, 208)
    
     fill(0)
     rect(65, 290, 30, 120)
     rect(135, 290, 30, 120)
     rect(277, 290, 30, 120)
     rect(345, 290, 30, 120)
     rect(415, 290, 30, 120)
     rect(540, 290, 30, 120)
    
     thunderSound6.play()
    
  } else if (on == 144 && note == 59) {
     fill(255, 0, 124)
     rect(430, 290, 70,400/2)
     image(img4,287, 147, 208, 208)
    
     fill(0)
     rect(65, 290, 30, 120)
     rect(135, 290, 30, 120)
     rect(277, 290, 30, 120)
     rect(345, 290, 30, 120)
     rect(415, 290, 30, 120)
     rect(540, 290, 30, 120)
    
     thunderSound7.play()
    
  } else if (on == 144 && note == 60) {
     fill(255, 0, 23)
     rect(500, 290, 70,400/2)
     image(img2,287, 147, 208, 208)
    
     fill(0)
     rect(65, 290, 30, 120)
     rect(135, 290, 30, 120)
     rect(277, 290, 30, 120)
     rect(345, 290, 30, 120)
     rect(415, 290, 30, 120)
     rect(540, 290, 30, 120)
    
     thunderSound8.play()
    
  }
  else {
  
  fill(255)
  rect(10, 290, 70,400/2)
  rect(80, 290, 70,400/2)
  rect(150, 290, 70,400/2)
  rect(220, 290, 70,400/2)
  rect(290, 290, 70,400/2)
  rect(360, 290, 70,400/2)
  rect(430, 290, 70,400/2)
  rect(500, 290, 70,400/2)
  
  fill(0)
  rect(65, 290, 30, 120)
  rect(135, 290, 30, 120)
  rect(277, 290, 30, 120)
  rect(345, 290, 30, 120)
  rect(415, 290, 30, 120)
  rect(540, 290, 30, 120)
    
  
    // all the other keys not listed above
    
    // this line maps the note to a color - note the range
    // between notes 48 and 72 being mapped to 0-360. These
    // are the notes on the default octave step on the keyboard.
    //h = map(note, 48, 72, 0, 360);
  }

  // =========================================================
  // any code not directly executed by keypresses goes here!
  //fill(h, s, 100);
    if(key == 'a')
    {
      tint(255, 0, 0, 126)
    }
    else if(key == 's')
    {
      tint(255, 100, 0, 126)
    }
    else if(key == 'd')
    {
      tint(255, 243, 0, 126)
    }
    else if(key == 'f')
    {
      tint(223, 255, 0, 126)
    }
    else if(key == 'g')
    {
      tint(0, 153, 204, 126)
    }
    else if(key == 'h')
    {
      tint(139, 0, 255, 126)
    }
    else if(key == 'j')
    {
      tint(255, 0, 124, 126)
    }
    else if(key == 'k')
    {
      tint(255, 0, 23, 126)
    }
    else if(key == 'l')
    {
      noTint()
    }
  
  if(mouseIsPressed)
  {
     birdpic.position(450, 270)
    birdpic.size(100, 100)
    birdpic2.position(0, 410)
    birdpic2.size(170, 170)
   
    
  }
  else
  {
     birdpic.position(15, 270)
    birdpic.size(100, 100)
     birdpic2.position(411, 410)
    birdpic2.size(170, 170)
    
     
      
  }
   
  // =========================================================
  // this if statement displays debug info about 
  // what keys we are pressing and what signals we are getting
  if (test) {
    background(0);
    textAlign(CENTER);
    textSize(40);
    text("on = " + on, width / 2, height / 2);
    text("midi note = " + note, width / 2, height / 2 + 40);
    text("velocity = " + vel, width / 2, height / 2 + 80);
  }
  
  // =========================================================
  // this if statement plays the specific note tied to the 
  // key, when recieving the "144" signal in the "on" channel.
  // uncomment the line of code in the else if clause to see
  // what changes!
  // if (on == 144) {
     //osc.freq(thunderSound1.play()); // we send the note to the oscillator
     //env.play(); // we play the sound stored in the envelope
  //   //thunderSound.play();
  // } else if (on == 128) {
     //osc.fade(0, 0.2);
  //   // env.play();
  // }

}



