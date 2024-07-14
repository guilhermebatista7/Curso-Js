function task1(callback){
    setTimeout(()=>{
        console.log('Task 1 complete');
        callback();
    }, 2000);
};

function task2(callback){
    setTimeout(()=>{
        console.log('task 2 complete');
        callback();
    }, 1000);
}

function task3(callback){
    setTimeout(()=>{
        console.log('task 3 complete');
        callback();
    }, 1500);
}

function task4(callback){
    setTimeout(()=>{
        console.log('task 4 complete');
        callback();
    }, 500);
};

//tanto faz se é function ou ()=> (arrow function)
task1(function(){ 
    task2(()=>{
        task3(()=>{
            task4(()=>{
                console.log('All tasks complete');
            })
        })
    })
});