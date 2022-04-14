const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = {
  name: "What's your name? Nicknames are also acceptable:)",
  hobby: "What's an activity you like doing?",
  listen: "What do you listen to while doing that?",
  meal: "Which meal is your favorite (eg: dinner, brunch, etc.)",
  favoriteMeal: "What's your favorite thing to eat for that meal?",
  sport: "Which sport is your absolute favourite?",
  power: "What is your superpower? In a few words, tell us what you are amazing at!",
  travel: "Where would you love to travel to?"
};


rl.question(`${questions.name}`, (name) => {
  rl.question(`${questions.hobby}`, (hobby) => {
    rl.question(`${questions.listen}`, (listen) => {
      rl.question(`${questions.meal}`, (meal) => {
        rl.question(`${questions.favoriteMeal}`, (favoriteMeal) => {
          rl.question(`${questions.sport}`, (sport) => {
            rl.question(`${questions.power}`, (power) => {
              rl.question(`${questions.travel}`, (travel) => {
             
                console.log(`${name} loves to do ${hobby} on their time off. ${name} likes to listen to ${listen}. ${name}'s favorite meal would be probably be ${meal} and their favorite food would be ${favoriteMeal}. ${name}'s absolute favorite sport would be ${sport}! The one power that ${name} would have would be ${power}. At last, their next travel spot would be ${travel}!🤪`);
                rl.close();
              });
            });
          });
        });
      });
    });
  });
});
