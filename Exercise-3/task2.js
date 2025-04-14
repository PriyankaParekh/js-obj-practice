let arr=[{

    Name:'Ravindra',
  
    Sports: ['Chess', 'Cricket'],
  
    },
  
  {
  
    Name:'Ravi',
  
    Sports: ['Cricket', 'Football'],
  
  },
  
  {
  
    Name:'Rishabh',
  
    Sports: ['Table-Tennis', 'Football'],
  
  },]

let {...obj}=arr;
let objex={};
let ans=[];

function isStrArr(arr) {
  let array=[];
  let newarr=[];
  let len=arr.length;
  for(let i=0;i<arr.length;i++){
    if(typeof(arr[i])=='string'){
      newarr.push(arr[i]);
    } else{
      array.push(arr[i]);
    }
  }
  return {newarr,array};
}

for(let i=0;i<arr.length;i++){
    let values=Object.values(arr[i]);
    let newArr=isStrArr(values);
    let {newarr:[...str]}=newArr;
    let {array:[sport]}=newArr;
    sport.forEach(j => {
      if(!(j in objex)){
      objex[j] = [];
      }
      objex[j].push(str);
    });
}

for (const key in objex) {
  let temp={};
  temp[key]=objex[key];
  ans.push(temp);
}
console.log(ans);