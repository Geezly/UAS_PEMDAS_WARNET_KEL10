import * as readline from "readline-sync";

let inputJam: string;
let inputRuangan: string;
let inputNama: string;
let hargaAkhir: number;
let hargaMenu: number = 0; 

console.log(`================================\nSelamat Datang di Warnet TI\n================================`);

inputNama = readline.question("Masukkan Nama Anda : ");
console.log(`Halo ${inputNama}! Berikut daftar ruangan beserta harganya :\n1. Regular (4000/jam)\n2. Gaming (7000/jam)\n3. VIP (10000/jam)\n(Diskon 10% jika durasi sewa > 3 jam)`);

inputJam = readline.question("Mau main berapa jam? : ");
let jam: number = Number(inputJam);

inputRuangan = readline.question("Pilih ruangan (1-3) : ");
let ruangan: number = Number(inputRuangan);
let namaRuangan: string = "";
let hargaAwal: number;
const diskonJam: number = 0.1;

switch (ruangan) {
  case 1:
    namaRuangan = "Regular";
    hargaAwal = 4000 * jam;
    if (jam > 3) {
      hargaAwal = hargaAwal - (hargaAwal * diskonJam);
    } else {
      hargaAwal = hargaAwal;
    }
    break;
  case 2:
    namaRuangan = "Gaming";
    hargaAwal = 7000 * jam;
    if (jam > 3) {
      hargaAwal = hargaAwal - (hargaAwal * diskonJam);
    } else {
      hargaAwal = hargaAwal;
    }
    break;
  case 3:
    namaRuangan = "VIP";
    hargaAwal = 10000 * jam;
    if (jam > 3) {
      hargaAwal = hargaAwal - (hargaAwal * diskonJam);
    } else {
      hargaAwal = hargaAwal;
    }
    break;
  default:
    console.log("Pilihan ruangan tidak valid!");
    // readline.close(); // readline-sync tidak memiliki method close()
    process.exit(); // Mengganti return di luar fungsi
}

console.log(`================================\nJam Booking, Masukkan dalam bentuk angka\n1-12 = Jam 1 Pagi-12 Siang, 13-24 = Jam 1 Siang-12 Malam\nContoh : 1 = Jam 1 Pagi, 13 = Jam 1 Siang\n(Diskon 5% jika booking jam pagi-siang)`);

let inputJamBooking = readline.question("Masukkan Jam Booking : ");
let jamBooking: number = Number(inputJamBooking);
let hargaDiskonJamBooking: number;
let bonusR: boolean = false;
let bonusMenu: string = "";

if (jamBooking <= 12) {
  hargaAwal = hargaAwal - (hargaAwal * 0.05);
  if (jamBooking < 1) {
    console.log("Jam booking tidak valid!");
    process.exit();
  }
} else {
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
    console.log(`Anda mendapat bonus anniversary diatas jam 12 yaitu ${bonusMenu}! Nanti akan kami antar ke meja anda.`);
  }
} else if (namaRuangan === "Gaming") {
  bonusR = true;
  if (bonusR === true && jamBooking > 12) {
    bonusMenu = "Susu";
    console.log(`Anda mendapat bonus anniversary diatas jam 12 yaitu ${bonusMenu}! Nanti akan kami antar ke meja anda.`);
  }
} else {
  bonusR = false;
}

console.log(`================================\nPemesanan Menu WAJIB Minimal 1\n1. Susu (3000)\n2. Kopi (4000)\n3. Kentang Goreng (7000)\n4. Pisang Coklat (5000)`);

let inputJumlahMenu = readline.question("Masukkan jumlah menu : ");
let inputMenu = readline.question("Pilih menu : ");

let menu: number = Number(inputMenu);
let jumlahMenu: number = Number(inputJumlahMenu);

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
let isMember: boolean = false;
let statusMember: string = inputMember.toLowerCase();
let diskonMember: number = 0.05;

if (statusMember === "ya") {
  isMember = true;
  if (isMember === true) {
    console.log(`Selamat datang lagi member! Kamu akan mendapat potongan 5% dari total tagihanmu\nDan meningkat menjadi 7% bila total tagihan > 50000`);
  }
} else if (statusMember === "tidak") {
  isMember = false;
  if (isMember === false) {
    console.log("Jika berminat daftar member, bisa cek Instagram kami ya!");
  }
} else {
  console.log("Status yang anda masukkan tidak valid!");
  process.exit();
}

hargaAkhir = hargaAwal + hargaMenu;

if (isMember === true && hargaAkhir <= 50000) {
  hargaAkhir -= hargaAkhir * diskonMember;
  if (jamBooking > 12) {
    console.log("Kamu mendapat voucher gratis 1 jam untuk booking selanjutnya spesial anniversary!");
  }
} else if (isMember === true && hargaAkhir > 50000) {
  diskonMember = 0.07;
  hargaAkhir -= hargaAkhir * diskonMember;
  if (jamBooking > 12) {
    console.log("Kamu mendapat voucher gratis 1 jam untuk booking selanjutnya spesial anniversary!");
  }
} else {
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