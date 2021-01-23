//abstraction menyembunyi kan function lain dan hanya menampilkan funtion yg dipakai aja

function Ongkir(berat){
    let pajak = 500;
    let totalBiaya = function(){
        return berat * 1000
    }

    this.totalBiaya = function(){
        return totalBiaya() * pajak;
    }
}

const laptop = new Ongkir(4);
console.log(laptop.totalBiaya());
