function isPythagorean(side1, side2, side3) {
  // TODO: 여기에 코드를 작성합니다.
  if(side1>=side2 && side1>=side3){
    if (side1*side1===side2*side2+side3*side3){
      return true;
    }else{
      return false;
    }
  }else if(side2>=side1 &&side2>=side3){
    if (Math.pow(side2,2)===Math.pow(side1,2)+Math.pow(side3,2)){
      return true;
    }else{
      return false;
    }
  }else if(side3>=side1 && side3>=side2){
    if (side3**2===side1**2+side2**2){
      return true;
    }else{
      return false;
    }
  }
}

//modified

function isPythagorean(side1, side2, side3) {
    const a = side1**2;
    const b = side2*side2;
    const c = Math.pow(side3,2);
    if(a===b+c||b===c+a||c===a+b){
      return true;
    }
    return false;
}



/////////////////////////////////////////////////////////
function addOneSecond(hour, minute, second) {
  // TODO: 여기에 코드를 작성합니다.
  if(second>=0 && second<=58) {
    second = second + 1;
    return "1초 뒤에 " + hour + '시 ' + minute + '분 ' + second + '초 입니다';
  } else if(second===59) {
    second = 0;
      if(minute>=0 && minute<=58) {
        minute = minute + 1;
        return "1초 뒤에 " + hour + '시 ' + minute + '분 ' + second + '초 입니다';
      } else if(minute===59) {
        minute = 0;
        if(hour>=0 && hour <=22){
          hour = hour + 1;
          return "1초 뒤에 " + hour + '시 ' + minute + '분 ' + second + '초 입니다';
        }else {
          hour = 0;
          return "1초 뒤에 " + hour + '시 ' + minute + '분 ' + second + '초 입니다';
        }

        }

    return "1초 뒤에 " + hour + '시 ' + minute + '분 ' + second + '초 입니다';
  }
}


//modified
 function addOneSecond(hour,min,sec){
   if (sec !== 59){
     sec +=1;
   }else{
     sec =0;
     min +=1;
   }
   if (min === 60){
     min =0;
     hour +=1;
   }
   if (hour ===24){
     hour = 0;
     return "1초 뒤에 " + hour + '시 ' + minute + '분 ' + second + '초 입니다';
   }
 }

//????????????????????????????????????????????????????//
function getLengthOfWord(word){
  if (word) {
    return word.length;
  }
  return 0;
}
