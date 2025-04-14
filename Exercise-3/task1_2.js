// Write​ ​ a ​​ JavaScript​ ​ function​ ​ to​ ​ hide​ ​ email​ ​ addresses​ ​ to​ ​ protect​ ​ from​ ​ unauthorized​ ​ user. The number of star will be equal to the number of characters hidden, and make this program dynamic.

// Input : abcdef@mail.com
// Output :  ab***f@mail.com​ 

function hide(str) {
    let str1=str.split('@');
    let [firstStr,endStr]=str1;
    let arr=firstStr.split('');
    let len=arr.length;
    alert(len);
    for(let i=0;i<arr.length;i++){
        if(i==0 || i==1 || i==len-1){
            arr[i]=arr[i];
        }else{
            arr[i]='*';
        }
           
    }
    alert(arr.join('')+'@'+endStr);


}

let str=prompt("Enter email address: ");

hide(str);