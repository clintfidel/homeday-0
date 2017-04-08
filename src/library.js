function fizzBuzz(num){
  if (num%3!==0 && num%5!==0){
      return num;
  }  
  else if(num%3===0 && num%5===0){
    return 'FizzBuzz';
  } 
  else if(num%3===0){
    return 'Fizz';
  } 
  else if(num%5===0){
    return 'Buzz';
  }
}





function aritGeo (num){ 
  if(num.length===0){
    return 0;
  }
  var comDiff = num[1]-num[0];
  var comRatio =num[1]/num[0] ;
  for(var i=1; i<num.length; i++){
    if ( num[i+1]- num[i]===comDiff && num[num.length-1]-num[num.length-2] ===comDiff){
      return 'Arithmetic';
    }
    else if (num[i+1]/num[i]===comRatio && num[num.length-1]/num[num.length-2] ===comRatio){
      return 'Geometric';
    }
    else {
        return -1;
      }
    }

}
