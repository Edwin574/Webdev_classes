
//else if
let myNumber=prompt('enter number of the day')
if(myNumber==1){
  alert('Day one is Monday')}
else if(myNumber==2){
  alert('Day two is Tuesday')
}else if(myNumber==3){
  alert('Day three is Wednesday')
}else if(myNumber==4){
  alert('Day four is Thursday')
}else if(myNumber==5){
  alert('Day five is Friday')
}else if(myNumber==6){
  alert('Day six is Sarturday')
}else{
  alert('Day seven is Sunday')
}
//switch case
let myNumber=parseInt(prompt('enter number of the day'))
switch(myNumber){
    case 1:
    alert('Day one is Monday')
    break;
    case 2:
    alert('Day two is Tuesday')
    break;
    case 3:
    alert('Day three is Wednesday')
    break;
    case 4:
    alert('Day four is Thursday')
    break;
    case 5:
    alert('Day five is Friday')
    break;
    case 6:
    alert('Day six is Sarturday')
    break;
    case 7:
    alert('Day seven is Sunday')
    break;
    default:
    alert('there are only seven days in a week')
}
