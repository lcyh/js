
function sleep(delay){
   return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },delay)
    })
}
async function handle(){
    await sleep(3000);
    console.log('打印');
}
handle();



function sleep(delay){
    return new Promise((resolve)=>{
        setTimeout(resolve,delay)
    })
}
async function fn(){
    await sleep(3000);
    console.log('sleep');
}
fn()