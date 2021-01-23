// async-await = fitur untuk memudahkan kita dlm menangangi proses asynchronous
// dialam async -> mengubah fnction menjadi asynchoronous
// await -> menunda eksekusi hingga proses async selesai

// async function hello(){
//     result = await doAsync() // menunda eksekusi
//     console.log(result); // tidak akan di esekusi sebelum proses async await diselesaikan
// }

//study case async-await
const isNumber = (a, b) => new Promise((resolve, reject)=>{
    setTimeout(() => {
        if(isNaN(a) || isNaN(b)){
            err = 'salah satu bukan sebuah angka';
            reject(err);
        }else{
            resolve(true)
        }
    },500)
});

const divide = (a, b) => new Promise((resolve,reject)=>{
    setTimeout(() =>{
        if(b === 0){
            err = 'dibagi 0';
            return reject(err);
        }

        const result = Number(a) / Number(b);
        resolve(result);
    })
});

const multiply = (a,b) => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const result = Number(a) * Number(b)
        resolve(result);
    }, 1000);
});

const add = (a,b) => new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = Number(a) + Number(b)
        resolve(result);
    },500);
});

const run = async function(a,b){
    await isNumber(a,b);
    const divideResult = await divide(a,b); // 9 / 3 = 3
    const multiplyResult = await multiply(divideResult, 5); // 3 * 5 =15
    const addResult = await add(multiplyResult, 1); // 15 + 1 = 16

    return addResult;
};

run(9,3)
.then((result) => {
    console.log(`hasil akhirnya adalah ${result}`);
}).catch((err) => {
    console.log(err);
});
