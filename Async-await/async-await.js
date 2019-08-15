async function myFn(){
    //await
}

const myFn = async () => {
    // await
}

const myFn = () =>{
    // await - this will throw an error - you can't use await unless it is an async function
}

// Two examples of async functions 
async function fn(){ //This is the newer way of doing an async function
    return 'hello';
}

fn().then(console.log);

function fn(){
    return Promise.resolve('hello');
}

fn().then(console.log);

async function foo(){
    throw Error('This is a mistake');
}

// foo().then(console.log);
foo().catch(console.log);

fetch(url)
    .then(response => response.json())
    .then(json => console.log.log(json))
    .catch(error=> console.log(error));

const request = async () =>{
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);

}

request()