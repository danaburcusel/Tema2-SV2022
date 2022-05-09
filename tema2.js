//ex. 1
function parImpar(n){
  if(n%2==1)
    return n*2;
  else return n-2;
}
//console.log(parImpar(6));

//ex.2
function prime(n){
 if(n==0||n==1)
  return 0;
  for (let i=2;i < n; i++)
   {
     if(n%i==0)
     {
        //prime=0
     return 0;
       
     } 
   } return 1;
} 
console.log (prime(3));


function nrprime(arr){
    let list=[];
  for (let i=0; i<arr.length; i++) 
   { if (prime(arr[i])==1)
     list.push(arr[i]);
    console.log (arr[i]);
   }
  return list;
}

nrprime([0,1,2,3,4,5,6]);
console.log (nrprime([0,1,2,3,4,5,6]));


//ex. 3

function findstrings(arr){
  let list=[];
  arr.forEach((element)=>{

    if(typeof element==='string')
      list.push(element);
  })
return list;
}
console.log(findstrings(["abc",1,2,3]));


//ex.4

function adunareImpare (n){
  let sum=0;
  for (let i=0; i<n.length; i++) 
    //console.log(n[i]);
  {
    let nr=Number(n[i]);
    if(nr %2==1) sum=sum+nr;
  else continue;
}
return sum;
}
//console.log (adunareImpare("123456"));


//ex.5 

let food='protein';
switch (food) {
  case 'only fruits': 
    console.log ('Day 1');
    break;
     case 'only vegetables': 
    console.log ('Day 2');
    break;
    case 'fruits and vegetables': 
    console.log ('Day 3');
    break;
  case 'protein':
    console.log ('Day 4');
    break;
  case 'yogurt':
  case 'bananas':
    console.log ('Day 5');
    break;
  case 'soup':
    console.log ('Day 6');
    break;
  case 'cheat meal':
     console.log ('Day 7');
    break;
  default:
     console.log('Not a valid food');
}
