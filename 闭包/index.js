// 使用Promise和async改写成每隔1s打印1个数字


function print(n){
    const promise = ()=>{
        return new Promise((resolve)=>{
            
        })
    }
    for(var i = 0;i <n;i++){
        setTimeout(console.log, i*1000, i);
    }
}
print(10);