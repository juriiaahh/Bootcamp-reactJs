// encapsulation adalah cara untuk mebatasi akses langsung ke method properti atau suatu object
// mencakup data nya atau method nya tdk boleh di panggil di tempat lain

// function Ongkir(berat){
//     this.pajak = 500; //properti ini dapat di akses darimana pun
//     this.biaya = function (){
//         return berat * 1
//     }
//     this.totalBiaya = function(){
//         return this.biaya() * this.pajak;

//     }
// }

// const laptop = new Ongkir(4);
// laptop.pajak = 20 //tidak boleh seperti ini
// console.log(laptop.totalBiaya());


//dibuat private agar properti dari luar tidak dapat di akses
// harus seprti ini 
//perbedaan kodingan di atas dan di bawah yaitu karena kodingan yg pertama public jadi dapat di akses dari luar sedangkan kodingan di bawah private jadi di akses hanya di dalam scope function

//teknik encapsulation
function Ongkir(berat){
    let pajak = 500; //properti dibuat private
    let biaya = function (){
        return berat * 1
    }
    this.totalBiaya = function(){
        return biaya() * pajak;

    }
}

const laptop = new Ongkir(4);
laptop.pajak = 20
console.log(laptop.totalBiaya());
