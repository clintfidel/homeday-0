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





function aritGeo(num){ 
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


function getPrimes(n){
  if(typeof n != 'number'){
    return [];
  }
  else if(n <= []){
    return [];
  }
  if(n === 2){ 
    return [2];
  }
  else if(n === 3){
    return [3];
  }
  var l = [];
  var flag = 0;
  for(var i=2; i<n; i++){
    for(var j = 2; j< i; j++){
      if(i%j === 0){
        flag =1;
        break;
      }
    }
    if(flag === 0){
      l.push(i);
    }
    flag = 0;
  }
  l.push(n);
  return l;
}



