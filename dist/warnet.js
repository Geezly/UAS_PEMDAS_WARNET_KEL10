"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline-sync"));
let inputJam;
let inputRuangan;
let inputNama;
let hargaAkhir;
let hargaMenu = 0; // Inisialisasi awal agar tidak error
console.log("================================" + "\n" + "Selamat Datang di Warnet TI" + "\n" + "================================");
inputNama = readline.question("Masukkan Nama Anda : ");
console.log("Halo " + inputNama + "! Berikut daftar ruangan beserta harganya :" + "\n" + "1. Regular (4000/jam)" + "\n" + "2. Gaming (7000/jam)" + "\n" + "3. VIP (10000/jam)" + "\n" + "(Diskon 10% jika durasi sewa > 3 jam)");
inputJam = readline.question("Mau main berapa jam? : ");
let jam = Number(inputJam);
inputRuangan = readline.question("Pilih ruangan (1-3) : ");
let ruangan = Number(inputRuangan);
let namaRuangan = "";
let hargaAwal;
const diskonJam = 0.1;
switch (ruangan) {
    case 1:
        namaRuangan = "Regular";
        hargaAwal = 4000 * jam;
        if (jam > 3) {
            hargaAwal = hargaAwal - (hargaAwal * diskonJam);
        }
        else {
            hargaAwal = hargaAwal;
        }
        break;
    case 2:
        namaRuangan = "Gaming";
        hargaAwal = 7000 * jam;
        if (jam > 3) {
            hargaAwal = hargaAwal - (hargaAwal * diskonJam);
        }
        else {
            hargaAwal = hargaAwal;
        }
        break;
    case 3:
        namaRuangan = "VIP";
        hargaAwal = 10000 * jam;
        if (jam > 3) {
            hargaAwal = hargaAwal - (hargaAwal * diskonJam);
        }
        else {
            hargaAwal = hargaAwal;
        }
        break;
    default:
        console.log("Pilihan ruangan tidak valid!");
        // readline.close(); // readline-sync tidak memiliki method close()
        process.exit(); // Mengganti return di luar fungsi
}
console.log("================================" + "\n" + "Jam Booking, Masukkan dalam bentuk angka" + "\n" + "1-12 = Jam 1 Pagi-12 Siang, 13-24 = Jam 1 Siang-12 Malam" + "\n" + "Contoh : 1 = Jam 1 Pagi, 13 = Jam 1 Siang" + "\n" + "(Diskon 5% jika booking jam pagi-siang)");
let inputJamBooking = readline.question("Masukkan Jam Booking : ");
let jamBooking = Number(inputJamBooking);
let hargaDiskonJamBooking;
let bonusR = false;
let bonusMenu = "";
if (jamBooking <= 12) {
    hargaAwal = hargaAwal - (hargaAwal * 0.05);
    if (jamBooking < 1) {
        console.log("Jam booking tidak valid!");
        process.exit();
    }
}
else {
    if (jamBooking > 24) {
        console.log("Jam booking tidak valid!");
        process.exit();
    }
    hargaAwal = hargaAwal;
}
if (namaRuangan === "VIP") {
    bonusR = true;
    if (bonusR === true && jamBooking > 12) {
        bonusMenu = "Kopi";
        console.log("Anda mendapat bonus anniversary diatas jam 12 yaitu " + bonusMenu + "! Nanti akan kami antar ke meja anda.");
    }
}
else if (namaRuangan === "Gaming") {
    bonusR = true;
    if (bonusR === true && jamBooking > 12) {
        bonusMenu = "Susu";
        console.log("Anda mendapat bonus anniversary diatas jam 12 yaitu " + bonusMenu + "! Nanti akan kami antar ke meja anda.");
    }
}
else {
    bonusR = false;
}
console.log("================================" + "\n" + "Pemesanan Menu WAJIB Minimal 1" + "\n" + "1. Susu (3000)" + "\n" + "2. Kopi (4000)" + "\n" + "3. Kentang Goreng (7000)" + "\n" + "4. Pisang Coklat (5000)");
let inputJumlahMenu = readline.question("Masukkan jumlah menu : ");
let inputMenu = readline.question("Pilih menu : ");
let menu = Number(inputMenu);
let jumlahMenu = Number(inputJumlahMenu);
switch (menu) {
    case 1:
        hargaMenu = 3000 * jumlahMenu;
        if (hargaMenu > 3000)
            hargaMenu = hargaMenu - 1000;
        break;
    case 2:
        hargaMenu = 4000 * jumlahMenu;
        if (hargaMenu > 4000)
            hargaMenu = hargaMenu - 1000;
        break;
    case 3:
        hargaMenu = 7000 * jumlahMenu;
        if (hargaMenu > 7000)
            hargaMenu = hargaMenu - 1000;
        break;
    case 4:
        hargaMenu = 5000 * jumlahMenu;
        if (hargaMenu > 5000)
            hargaMenu = hargaMenu - 1000;
        break;
    default:
        console.log("Pilihan minuman tidak valid");
        process.exit();
}
let inputMember = readline.question("Apakah anda member? (ya/tidak) : ");
let isMember = false;
let statusMember = inputMember.toLowerCase();
let diskonMember = 0.05;
if (statusMember === "ya") {
    isMember = true;
    if (isMember === true) {
        console.log("Selamat datang lagi member! Kamu akan mendapat potongan 5% dari total tagihanmu" + "\n" + "Dan meningkat menjadi 7% bila total tagihan > 50000");
    }
}
else if (statusMember === "tidak") {
    isMember = false;
    if (isMember === false) {
        console.log("Jika berminat daftar member, bisa cek Instagram kami ya!");
    }
}
else {
    console.log("Status yang anda masukkan tidak valid!");
    process.exit();
}
hargaAkhir = hargaAwal + hargaMenu;
if (isMember === true && hargaAkhir <= 50000) {
    hargaAkhir -= hargaAkhir * diskonMember;
    if (jamBooking > 12) {
        console.log("Kamu mendapat voucher gratis 1 jam untuk booking selanjutnya spesial anniversary!");
    }
}
else if (isMember === true && hargaAkhir > 50000) {
    diskonMember = 0.07;
    hargaAkhir -= hargaAkhir * diskonMember;
    if (jamBooking > 12) {
        console.log("Kamu mendapat voucher gratis 1 jam untuk booking selanjutnya spesial anniversary!");
    }
}
else {
    hargaAkhir = hargaAwal + hargaMenu;
}
console.log("================================");
console.log("        STRUK WARNET TI");
console.log("================================");
console.log("Nama      : " + inputNama);
console.log("Ruangan   : " + namaRuangan);
console.log("Durasi    : " + jam + " jam");
console.log("--------------------------------");
console.log("Biaya sewa: Rp" + hargaAwal);
console.log("Biaya menu: Rp" + hargaMenu);
console.log("--------------------------------");
console.log("TOTAL     : Rp" + hargaAkhir);
console.log("================================");
console.log("Terima kasih, selamat bermain!");
//# sourceMappingURL=warnet.js.map