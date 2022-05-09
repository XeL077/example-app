console.log('test');

fetch('/api/test').then((data) => {
    if(data.status !== 404)
        console.log(data.status);
}).catch(err =>{
    console.error(err);
})
