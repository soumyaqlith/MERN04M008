// callback hell
// function getData(v,next) {
//     setTimeout(() => {
//         console.log("value :", v);
//         next()
//     }, 2000)
// }
// getData(1,
//     ()=>getData(2,()=>getData(3))
// )


// promise
// let promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject()
//     },2000)
// })

// console.log(promise)


function getData(v) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("value :", v)
            // rej("rejected error")
            res()
        }, 2000)
    })
}
// promise chain
getData(1).then(() => {
    getData(2).then(() => {
        getData(3).then(() => {
            getData(4)
        })
    })
}).catch((result) => {
    console.log("error", result)
})


// fetch Api
async function fetchData(){
    let res=await fetch("https://jsonplaceholder.typicode.com/posts");
    let data=await res.json()
    console.log(data)
}

fetchData()
