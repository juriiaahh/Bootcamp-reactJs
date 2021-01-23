//callback = function untuk memanggil kembali / sesuatu yg di jalankan sesuai dengan urutan nya
//kapan callback kira kira digunakan? ketika menangani proses asyn dan sync 

//callback pada sync
//1. callback sbg injeksi function
// function kalkulasi(m,n){
//     result = m + n
//     return result;
// }
// console.log(kalkulasi(4,5));

//example lanjutan
// function calculate(p1, p2, callback){
//     //default operasi
//     result = p1 + p2
    
//     if(typeof callback === 'function'){
//         result = callback(p1, p2)
//     }
//     return result
// }

//eksekusinya
// a = calculate(2000, 4000, function(o, p){ return "$" + (o + p)})
// b = calculate(5000, 4000, function(o, p){ return "Rp" + (o - p)})

// console.log(a);
// console.log(b);

//callback asynchronous
// function m1(){
//     console.log('m1 selesai');
// }

// function m2(callback){
//     setTimeout(
//         function(){
//             console.log('m2 selesai');
//             callback()
//         }, 1000
//     )
// }

// function m3(){
//     console.log('m3 selesai');
// }

// m1()
// m2(m3)

//callback hell / callback di dalam callback/ callback yg bercabang
const proses1 = (callback, err) => {
    setTimeout(() => {
        callback('proses 1 selesai')
    }, 1000);
}

const proses2 = (callback, err) => {
    setTimeout(() => {
        callback('proses 2 selesai')
    },1000);
}

const proses3 = (callback, err) => {
    setTimeout(() => {
        callback('proses 3 selesai')
    },1000);
}

proses1((pesan1) => {
    console.log(pesan1);
    proses2((pesan2)=>{
        console.log(pesan2);
        proses3((pesan3)=>{
            console.log(pesan3);
        })
    })
})

//kekurangan callback hell = code sulit dibaca, penanganan nya jadi sulit