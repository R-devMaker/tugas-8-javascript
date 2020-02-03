function specMotor() {
    var motor = {
        type : ["Honda","Yamaha","Kawasaki"],
        harga : [80000000,65000000,75000000],
        kondisi : ["Baru","Bekas"],
        tahun : [2015,2016,2017,2018,2019],
        warna : "Merah",
    }

    motor.warna = "Hitam";
    console.log("Type       : ", motor.type[0]);
    console.log("Harga      : ", motor.harga[2]);
    console.log("Kondisi    : ", motor.kondisi[0]);
    console.log("Tahun      : ", motor.tahun[4]);
    console.log("Warna      : ", motor.warna);
}

specMotor();