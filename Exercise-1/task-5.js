function stars(n){
    let str = '';

    for(let i=n; i>=1; i--){
        for(let k=n; k>=i; k--){
            str += " ";
        }
        for(let j=i; j>=1; j--){
            str += (n-j+1)+" ";
        }
        console.log(str);
        str = "";
    }
        for(let i=2; i<=n; i++){
          for(let k=n; k>=i; k--){
            str += " ";
        }
          for(let j=i; j>=1; j--){
            str += (n-j+1)+" ";
        }
          console.log(str);
          str = "";
    }
}
stars(5);