const { program } = require("@caporal/core")
program
// .argument('number...','Description')
// .action(({args, logger})=>{
//     let total = 0
//     for(let number of args.number){
//         total = total + number
//     }
//     logger.info(total)
// })

console.log("Kalkulator");
console.log("============");
console.log("1. Tambah(+)");
console.log("2. Kurang(-)");
console.log("3. Bagi(/)");
console.log("4. Kali(*)");
console.log("5. Modulus(%)");

.argument('number', 'Description')
.action(({args, logger})=>{
    let angka;
    let total;
    
})





program.run()