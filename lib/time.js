exports.tamtanggal = (WaktuJKt) => {
    var date = new Date(WaktuJKt);
    var tahun = date.getFullYear();
    var bulan1 = date.getMonth();
    var tanggal = date.getDate();
    var hari = date.getDay();
    switch(hari) {
        case 0: hari = "Minggu"; break;
        case 1: hari = "Senin"; break;
        case 2: hari = "Selasa"; break;
        case 3: hari = "Rabu"; break;
        case 4: hari = "Kamis"; break;
        case 5: hari = "Jum`at"; break;
        case 6: hari = "Sabtu"; break;
    }
    switch(bulan1) {
        case 0: bulan1 = "Januari"; break;
        case 1: bulan1 = "Februari"; break;
        case 2: bulan1 = "Maret"; break;
        case 3: bulan1 = "April"; break;
        case 4: bulan1 = "Mei"; break;
        case 5: bulan1 = "Juni"; break;
        case 6: bulan1 = "Juli"; break;
        case 7: bulan1 = "Agustus"; break;
        case 8: bulan1 = "September"; break;
        case 9: bulan1 = "Oktober"; break;
        case 10: bulan1 = "November"; break;
        case 11: bulan1 = "Desember"; break;
    }
    var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
    return `${tampilTanggal}`
}
exports.tamHari = (WaktuJKt) => {
    var date = new Date(WaktuJKt);
    var waktoo = date.getHours();
    switch(waktoo){
        case 0: waktoo = "Tengah Malam🌚"; break;
        case 1: waktoo = "Tengah Malam🌒"; break;
        case 2: waktoo = "Dini Hari🌒"; break;
        case 3: waktoo = "Dini Hari🌓"; break;
        case 4: waktoo = "Subuh🌔"; break;
        case 5: waktoo = "Subuh🌔"; break;
        case 6: waktoo = "Pagi🌝"; break;
        case 7: waktoo = "Pagi🌝"; break;
        case 8: waktoo = "Pagi🌝"; break;
        case 9: waktoo = "Pagi"; break;
        case 10: waktoo = "Pagi🌞"; break;
        case 11: waktoo = "Siang🌞"; break;
        case 12: waktoo = "Siang🌞"; break;
        case 13: waktoo = "Siang🌞"; break;
        case 14: waktoo = "Siang🌞"; break;
        case 15: waktoo = "Sore🌝"; break;
        case 16: waktoo = "Sore🌝"; break;
        case 17: waktoo = "Sore🌖"; break;
        case 18: waktoo = "Magrib🌘"; break;
        case 19: waktoo = "Magrib🌚"; break;
        case 20: waktoo = "Malam🌚"; break;
        case 21: waktoo = "Malam🌚"; break;
        case 22: waktoo = "Malam🌚"; break;
        case 23: waktoo = "Tengah Malam🌚"; break;
    }
    var tampilHari = "" + waktoo;
    return `${tampilHari}`
}
exports.tamWaktu = (WaktuJKt) => {
    var date = new Date(WaktuJKt);
    var jam = date.getHours();
    var menit = date.getMinutes();
    var detik = date.getSeconds();
    var tampilWaktu = "" + "Jam: " + jam + ":" + menit;
    return `${tampilWaktu}`
}
exports.tamJir = (WaktuJKt) => {
    var date = new Date(WaktuJKt);
    var waktuu = date.getHours();
    switch(waktuu){
        case 0: waktuu = "Tengah Malam Lord🐦"; break;
        case 1: waktuu = "Tengah Malam Lord🐦"; break;
        case 2: waktuu = "Dini Hari Lord🐦"; break;
        case 3: waktuu = "Dini Hari Lord🐦"; break;
        case 4: waktuu = "Subuh Lord🐦"; break;
        case 5: waktuu = "Subuh Lord🐦"; break;
        case 6: waktuu = "Pagi Lord🐦"; break;
        case 7: waktuu = "Pagi Lord🐦"; break;
        case 8: waktuu = "Pagi Lord🐦"; break;
        case 9: waktuu = "Pagi Lord🐦"; break;
        case 10: waktuu = "Pagi Lord🐦"; break;
        case 11: waktuu = "Siang Lord🐦"; break;
        case 12: waktuu = "Siang Lord🐦"; break;
        case 13: waktuu = "Siang Lord🐦"; break;
        case 14: waktuu = "Siang Lord🐦"; break;
        case 15: waktuu = "Sore Lord🐦"; break;
        case 16: waktuu = "Sore Lord🐦"; break;
        case 17: waktuu = "Sore Lord🐦"; break;
        case 18: waktuu = "Magrib Lord🐦"; break;
        case 19: waktuu = "Magrib Lord🐦"; break;
        case 20: waktuu = "Malam Lord🐦"; break;
        case 21: waktuu = "Malam Lord🐦"; break;
        case 22: waktuu = "Malam Lord🐦"; break;
        case 23: waktuu = "Tengah Malam Lord🐦"; break;
    }
    var tampilJir = "" + waktuu;
    return `${tampilJir}`
}
exports.tamFormal = (WaktuJKt) => {
    var date = new Date(WaktuJKt);
    var waktoo = date.getHours();
    switch(waktoo){
        case 0: waktoo = "Tengah Malam🌚"; break;
        case 1: waktoo = "Tengah Malam🌒"; break;
        case 2: waktoo = "Dini Hari🌒"; break;
        case 3: waktoo = "Dini Hari🌓"; break;
        case 4: waktoo = "Subuh🌔"; break;
        case 5: waktoo = "Subuh🌔"; break;
        case 6: waktoo = "Selamat Pagi🌝"; break;
        case 7: waktoo = "Selamat Pagi🌝"; break;
        case 8: waktoo = "Selamat Pagi🌝"; break;
        case 9: waktoo = "Selamat Pagi"; break;
        case 10: waktoo = "Selamat Pagi🌞"; break;
        case 11: waktoo = "Selamat Siang🌞"; break;
        case 12: waktoo = "Selamat Siang🌞"; break;
        case 13: waktoo = "Selamat Siang🌞"; break;
        case 14: waktoo = "Selamat Siang🌞"; break;
        case 15: waktoo = "Selamat Sore🌝"; break;
        case 16: waktoo = "Selamat Sore🌝"; break;
        case 17: waktoo = "Selamat Sore🌖"; break;
        case 18: waktoo = "Magrib🌘"; break;
        case 19: waktoo = "Magrib🌚"; break;
        case 20: waktoo = "Selamat Malam🌚"; break;
        case 21: waktoo = "Selamat Malam🌚"; break;
        case 22: waktoo = "Selamat Malam🌚"; break;
        case 23: waktoo = "Tengah Malam🌚"; break;
    }
    var tampilFormal = "" + waktoo;
    return `${tampilFormal}`
}