let tahun = 2021;

if ((tahun%4) == 0){
    // console.log("1");
    
    if ((tahun%100)!== 0){
            // console.log("2");
            console.log(tahun + ' adalah tahun kabisat');
    }else {
            // console.log("3");
        if((tahun%400) == 0) {
            console.log(tahun + ' adalah tahun kabisat');
        }else {
            // console.log("4");
            console.log(tahun + 'adalah bukan tahun kabisat');
        }
    }

}else {
    // console.log("5");
    console.log(tahun + ' adalah bukan tahun kabisat');
}