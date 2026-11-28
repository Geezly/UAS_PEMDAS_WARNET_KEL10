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
let inputNama = "";
let hargaAkhir;
let hargaMenu = 0;
let inputNIM = "";
let levelMember = "";
const panjangNIM = 15;
//=====================================================================================================================
//=====================================================================================================================
//=============Database (Array)=============
let member = [
    { inputNIM: "263140700000001", inputNama: "Budi", levelMember: "Newbie" },
    { inputNIM: "263140700000002", inputNama: "Rafi", levelMember: "Pro" }, //Data Dummy
    { inputNIM: "263140700000003", inputNama: "Satria", levelMember: "Hackertzy" },
];
//=====================================================================================================================
//=============Tempat Function=============
function validasiNama() {
    if (inputNama.length === 0) {
        return false;
    }
    else if (inputNama.length < 3) {
        return false;
    }
    return true;
}
function inputNamaValid() {
    let namaValid = false;
    do {
        inputNama = readline.question("Masukkan Nama Pelanggan : ");
        namaValid = validasiNama();
        if (!namaValid) {
            console.log(`Nama tidak valid! Tidak boleh kosong dan harus lebih dari 3 huruf.`);
        }
    } while (!namaValid);
    return inputNama;
}
function validasiNIM() {
    if (inputNIM.length !== panjangNIM) {
        return false;
    }
    return true;
}
function inputNIMValid() {
    let NIMValid = false;
    do {
        inputNIM = readline.question(`Masukkan NIM (${panjangNIM} digit) : `);
        NIMValid = validasiNIM();
        if (!NIMValid) {
            console.log(`NIM tidak valid! Harus ${panjangNIM} digit angka.`);
        }
    } while (!NIMValid);
    return inputNIM;
}
function cariIndexNIM() {
    const daftarNIM = member.map(m => m.inputNIM);
    return daftarNIM.indexOf(inputNIM);
}
function menuUtama() {
    let pilihanMenu = "";
    do {
        console.log(`=======================================`);
        console.log("MENU UTAMA PENGATURAN MEMBER WARNET TI");
        console.log(`=======================================`);
        console.log("1. Tambah Member");
        console.log("2. Lihat Member");
        console.log("3. Ubah Member");
        console.log("4. Hapus Member");
        console.log("5. Cari Member");
        console.log("0. Keluar");
        console.log(`================================`);
        pilihanMenu = readline.question("Pilih menu (0-5) : ");
        switch (pilihanMenu) {
            case "1":
                console.log("Menu Tambah Member dipilih.");
                tambahMember();
                break;
            case "2":
                console.log("Menu Lihat Member dipilih.");
                break;
            case "3":
                console.log("Menu Ubah Member dipilih.");
                break;
            case "4":
                console.log("Menu Hapus Member dipilih.");
                break;
            case "5":
                console.log("Menu Cari Member dipilih.");
                break;
            case "0":
                console.log("Anda keluar dari mode pengaturan member!");
                break;
            default:
                console.log("Pilihan tidak valid! Masukkan angka 0-5.");
        }
    } while (pilihanMenu !== "0");
}
function pilihLevelMember() {
    let inputLevel = ""; // ketikan mentah (berupa teks)
    let pilihanLevel = 0; // ketikan yang sudah diubah menjadi angka
    let levelValid = false; // penanda pilihan sudah benar atau belum
    do {
        inputLevel = readline.question("Pilih level member (1. Newbie, 2. Pro, 3. Hackertzy) : ");
        pilihanLevel = Number(inputLevel); // ubah teks menjadi angka
        if (inputLevel.length === 0) {
            console.log("Pilihan level tidak boleh kosong!");
        }
        else if (pilihanLevel < 0) {
            console.log("Pilihan level tidak boleh negatif!");
        }
        else if (pilihanLevel !== 1 && pilihanLevel !== 2 && pilihanLevel !== 3) {
            console.log("Pilihan level harus angka 1, 2, atau 3!");
        }
        else {
            levelValid = true; // pilihan benar, loop boleh berhenti
        }
    } while (!levelValid);
    // switch mengubah angka pilihan menjadi nama level
    switch (pilihanLevel) {
        case 1:
            levelMember = "Newbie";
            console.log('Pelanggan ditambahkan ke data member dengan level Newbie!');
            break;
        case 2:
            levelMember = "Pro";
            console.log('Pelanggan ditambahkan ke data member dengan level Pro!');
            break;
        case 3:
            levelMember = "Hackertzy";
            console.log('Pelanggan ditambahkan ke data member dengan level Hackertzy!');
            break;
        default:
            console.log("Pilihan level member tidak valid!"); // pengaman, seharusnya tidak pernah terjadi
            break;
    }
}
function tambahMember() {
    console.log("===== TAMBAH MEMBER =====");
    if (cariIndexNIM() !== -1) {
        console.log("Member sudah terdaftar! Jika ingin update level member silahkan ke menu 3. ");
        return;
    }
    pilihLevelMember(); // level: angka 1 sampai 3 -> masuk ke levelMember
    // push menambahkan data baru di urutan paling akhir array
    member.push({
        inputNIM: inputNIM,
        inputNama: inputNama,
        levelMember: levelMember
    });
    console.log("Member baru berhasil ditambahkan!");
    console.log(`NIM   : ${inputNIM}\nNama  : ${inputNama}\nLevel : ${levelMember}`);
    console.log(`Total member sekarang : ${member.length} orang`);
}
//=====================================================================================================================
//=====================================================================================================================
console.log(`================================\nSelamat Datang di Warnet TI\n================================`);
inputNamaValid();
inputNIMValid();
menuUtama();
console.log(`Halo ${inputNama}! Berikut daftar ruangan beserta harganya :\n1. Regular (4000/jam)\n2. Gaming (7000/jam)\n3. VIP (10000/jam)\n(Diskon 10% jika durasi sewa > 3 jam)`);
inputJam = readline.question("Masukkan durasi jam : ");
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
        process.exit();
}
console.log(`================================\nJam Booking, Masukkan dalam bentuk angka\n================================\n1-12 = Jam 1 Pagi-12 Siang\n13-24 = Jam 1 Siang-12 Malam\nContoh : 1 = Jam 1 Pagi, 13 = Jam 1 Siang\n(Diskon 5% jika booking jam pagi-siang)`);
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
        console.log(`Pelanggan mendapat bonus anniversary diatas jam 12 yaitu ${bonusMenu}! Akan diantarkan ke meja.`);
    }
}
else if (namaRuangan === "Gaming") {
    bonusR = true;
    if (bonusR === true && jamBooking > 12) {
        bonusMenu = "Susu";
        console.log(`Pelanggan mendapat bonus anniversary diatas jam 12 yaitu ${bonusMenu}! Akan diantarkan ke meja.`);
    }
}
else {
    bonusR = false;
}
console.log(`================================\nPemesanan Menu WAJIB Minimal 1\n1. Susu (3000)\n2. Kopi (4000)\n3. Kentang Goreng (7000)\n4. Pisang Coklat (5000)`);
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
let inputMember = readline.question("Apakah pelanggan member? (ya/tidak) : ");
let isMember = false;
let statusMember = inputMember.toLowerCase();
let diskonMember = 0.05;
if (statusMember === "ya") {
    isMember = true;
    if (isMember === true) {
        console.log(`Selamat datang lagi member setia Warnet TI! Pelanggan akan mendapat potongan 5% dari total tagihanmu\nDan meningkat menjadi 7% bila total tagihan > 50000`);
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
        console.log("Pelanggan mendapat voucher gratis 1 jam untuk booking selanjutnya spesial anniversary!");
    }
}
else if (isMember === true && hargaAkhir > 50000) {
    diskonMember = 0.07;
    hargaAkhir -= hargaAkhir * diskonMember;
    if (jamBooking > 12) {
        console.log("Pelanggan mendapat voucher gratis 1 jam untuk booking selanjutnya spesial anniversary!");
    }
}
else {
    hargaAkhir = hargaAwal + hargaMenu;
}
console.log(`================================`);
console.log("        STRUK WARNET TI");
console.log(`================================`);
console.log(`Nama      : ${inputNama}`);
console.log(`Ruangan   : ${namaRuangan}`);
console.log(`Durasi    : ${jam} jam`);
console.log("--------------------------------");
console.log(`Biaya sewa: Rp${hargaAwal}`);
console.log(`Biaya menu: Rp${hargaMenu}`);
console.log("--------------------------------");
console.log(`TOTAL     : Rp${hargaAkhir}`);
console.log(`================================`);
console.log("Terima kasih, selamat bermain!");
//hehe
//# sourceMappingURL=index.js.map