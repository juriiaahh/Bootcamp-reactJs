// synchronous = menjalankan sesuatu sesuai urutan kode yang kita tulis
console.log("1");
console.log("2");
console.log("3");
//Output dijalankan sesuai urutan

//2.asynchronous = hasil eksekusi kode tidak selalu sesuai ururtan nya, bisa berdasarkan waktu proses
console.log('contoh asynchronous');
setTimeout(()=>{ console.log('ini jeda cuy')}, 2000) //tunda 2 detik
console.log('yg ini dluan');
