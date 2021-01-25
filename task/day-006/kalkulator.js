const readline = require('readline');

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

    console.log("Kalkulator");
    console.log("============");
    console.log("1. Tambah(+)");
    console.log("2. Kurang(-)");
    console.log("3. Bagi(/)");
    console.log("4. Kali(*)");

    function Tambah(x,y) {
        return x+y;
    }
    function Kurang(y,x) {
        return y-x;
    }
    function Bagi(z,y) {
        return z/y;
    }
    function Kali(z,x) {
        return z*x;
    }

rl.question("Pilihan anda : " ,function(pilihanAngka){
    console.log("Anda Memilih Menu  " + pilihanAngka );
    rl.question("Masukan Bilangan pertama : " ,function(bilangaPertama){
        rl.question("Masukan Bilangan kedua : " ,function(bilanganKedua){
            console.log("-----------------------------------------");
            console.log("Bilangan Pertama Anda  " + bilangaPertama );
            console.log("Bilangan Kedua Anda  " + bilanganKedua );
            console.log("-----------------------------------------");

            if(pilihanAngka == "1"){
                console.log("Hasilnya :" + Tambah(bilangaPertama,bilanganKedua));
            }else if(pilihanAngka == "2"){
                console.log("Hasilnya :" + Kurang(bilangaPertama,bilanganKedua));
            }else if(pilihanAngka == "3"){
                console.log("Hasilnya :" + Bagi(bilangaPertama,bilanganKedua));
            }else if(pilihanAngka == "4"){
                console.log("Hasilnya :" + Kali(bilangaPertama,bilanganKedua));
            }else{
                console.log("Pilihan anda tidak tersedia");
            }
            
            rl.close();
        });     
    });
});