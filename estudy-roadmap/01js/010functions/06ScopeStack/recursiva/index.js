const fatorial = function(num){
    if(num===0 || num===1){
        return 1;
    } else{
        return num * fatorial(num-1)
    }
}
res = fatorial(4)
console.log(res);