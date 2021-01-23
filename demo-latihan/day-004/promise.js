//Promise = salah satu fitur es6 / adalah sebuah object yg mereferentasi kan set set sprti pending, reject,fulfilled
//promise digunakan alternatif sebagai callback hell
//promise selalu berjln di asynchronous
// kelebihan = membuat code jadi reliable, management error lebih baik, ada then, result dll

//implementasi pada javascript
//syntax promise
let janjian = new Promise((resolve, reject)=>{
    resolve('berhasil')
    reject(new Error('error ya'))
})

//cara menggunakan promise
janjian.then((result) => { //promise then
    console.log(result) 
}).catch((error) => { //promise catch
    console.log(error)
}).finally(() =>{ // promise finally
    console.log('jalan terus');
})

//promise all = menerima sekumpulan dalam bentuk array
const promise1 = Promise.resolve(5);
const promise2 = 45;
const promise3 = new Promise(function(resolve, reject){
    setTimeout(resolve, 1000, "zoo");
    // reject(new Error('error')) //bisa di abaikan
})

//cara memanggilnya
Promise.all([promise1, promise2, promise3])
.then((function(values){
    console.log(values);
    
}))
