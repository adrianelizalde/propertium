function setup() {
  // put setup code here
  createCanvas(1024,768);
  noStroke();
}

function draw() {
  // put drawing code here
  stroke(255,0,0);
  strokeWeight(2);
  fill(9,33,175);

  beginShape();
  vertex(359,61);
  vertex(359,374);
  vertex(534,676);
  vertex(713,628);
  vertex(713,608);
  vertex(536,301);
  vertex(359,61);
  endShape();

  noFill();
  beginShape();
  vertex(359,61);
  vertex(536,654);
  vertex(713,608);
  endShape();

  beginShape();
  vertex(445,213);
  vertex(571,577);
  vertex(630,573);
  vertex(504,277);
  vertex(445,213);
  endShape();

  beginShape();
  vertex(504,277);
  vertex(504,374);
  vertex(615,574);
  endShape();

  line(536,654,534,676);
}
