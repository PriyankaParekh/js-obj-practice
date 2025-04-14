//1. Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

function unique(arr) {
    let set=new Set(arr);
    return [...set];
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(values) ); // Hare, Krishna, :-O

//2. Anagrams are words that have the same number of same letters, but in different order.

// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Write a function aclean(arr) that returns an array cleaned from anagrams.

function aclean(arr) {
    let lowercase = arr.map(item=>item.toLowerCase());
    let res=[];
    let set1=new Set();
    let sorted;
    for(let i=0;i<lowercase.length;i++){
        let lowercase_arr = lowercase[i].split("");
        sorted=lowercase_arr.sort((a, b) => a.localeCompare(b) ).join("");
        let len=set1.size;

        set1.add(sorted);
        
        if(len==set1.size){
            res.push(lowercase[i]);
        }

    }
    return res;
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares",'nap'];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

