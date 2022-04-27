function scuberGreetingForFeet(number){
  let greeting
  if (number < 400) {
    greeting = 'This one is on me!';
  } else if (number <= 2000) {
    greeting = 'That will be twenty bucks.';
  } else if (number <= 2500)  {
    greeting = 'I will gladly take your thirty bucks.';
  } else if (number > 2500) {
    greeting = 'No can do.';
  }
  return greeting
}

function ternaryCheckCity(city){
  const cityMessage= city=== 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return cityMessage
}

function switchOnCharmFromTip(tip){
  let charm;
  switch(tip) {
    case 'generous':
      charm="Thank you so much.";
      break;
    case 'not as generous':
      charm= "Thank you.";
      break;
    default:
      return 'Bye.'
      break;
  }
  return charm
}