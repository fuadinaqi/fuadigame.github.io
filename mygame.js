/*

Pseudocode :

BACA DAN SIMPAN variabel 'nama'
BACA DAN SIMPAN variabel 'angka' antara 1 - 9
BACA DAN SIMPAN variabel 'umurPoke' antara 2 - 10
BACA DAN SIMPAN variabel 'tipeMusuh' antara 1 - 9
DEKLARASI variabel 'angkaRan', 'umurRan', 'tipeMusuhRan', 'poke', 'musuh', 'pokeHealth', 'pokeAttack', 'musuhHealth', dan 'musuhAttack'
MASUKKAN NILAI variabel 'angkaRan' dengan 'angka' X Math.random
MASUKKAN NILAI variabel 'umurRan' dengan 'umurPoke' X Math.random
MASUKKAN NILAI variabel 'tipeMusuhRan' dengan 'tipeMusuh' X Math.random
JIKA 'nama' bernilai TRUE, MAKA TULISKAN "Selamat datang 'nama' , di Pokemon world"
JIKA 'nama' bernilai FALSE, MAKA TAMPILKAN "Input nama Anda!"
JIKA 'angka' lebih kecil dari 1 atau lebih besar dari 9, MAKA TAMPILKAN "Anda salah input"
JIKA 'umurPoke' lebih kecil dari 2 atau lebih besar dari 10, MAKA TAMPILKAN "Anda salah input"
JIKA 'tipeMusuh' lebih kecil dari 1 atau lebih besar dari 9, MAKA TAMPILKAN "Anda salah input"
BUAT FUNGSI 'getPoke' dengan PARAMETER ('angkaTipe' dan 'attackPoke'), TULISKAN "Anda mendapatkan pokemon tipe 'poke", MASUKKAN NILAI 'PokeHealth' dengan Pembulatan dari 'angkaRan' ditambah 'umurRan' X 'angkaTipe'), MASUKKAN NILAI 'pokeAttack' dengan Pembulatan dari ('tipeMusuhRan' X 'attackPoke'), TAMPILKAN "Health Pokemon anda : 'pokeHealth'" dan "Attack Pokemon anda : 'pokeAttack'"
JIKA 'angkaRan' lebih kecil dari 'umurRan', MAKA 'poke' adalah "Common", MASUKKAN FUNGSI getPoke
JIKA 'angkaRan' lebih besar dari 'umurRan', MAKA 'poke' adalah "Rare",  MASUKKAN FUNGSI getPoke
JIKA 'angkaRan' sama dengan 'umurRan', MAKA 'poke' adalah "Legendary",  MASUKKAN FUNGSI getPoke
JIKA 'angkaRan' adalah 0 atau 'umurRan' adalah 0, MAKA TULISKAN "Anda tidak dapat bermain karena salah input"
BUAT FUNGSI 'getEnemy' dengan PARAMETER ('angkaMusuh' dan 'attackEnemy'), TULISKAN "Anda menemukan musuh tipe 'easy", MASUKKAN NILAI 'musuhHealth' dengan Pembulatan dari 'tipeMusuhRan' ditambah 'umurRan' X 'angkaMusuh'), MASUKKAN NILAI 'musuhAttack' dengan Pembulatan dari ('tipeMusuhRan' X 'attackEnemy'), TAMPILKAN "Health Musuh anda : 'musuhHealth'" dan "Attack Musuh anda : 'musuhAttack'"
JIKA 'tipeMusuhRan' lebih kecil dari 'umurRan', MAKA 'musuh' adalah "Easy", MASUKKAN FUNGSI getEnemy
JIKA 'tipeMusuhRan' lebih besar dari 'umurRan', MAKA 'musuh' adalah "Normal",  MASUKKAN FUNGSI getEnemy
JIKA 'tipeMusuhRan' sama dengan 'umurRan', MAKA 'musuh' adalah "Hard",  MASUKKAN FUNGSI getEnemy
JIKA 'tipeMusuhRan' adalah 0 atau 'umurRan' adalah 0, MAKA TULISKAN "Anda tidak dapat bermain karena salah input"
DEKLARASI variabel 'index'
SELAMA 'index' lebih kecil dari 100: JIKA sisa hasil bagi 'pokeHealth' dari 'index' adalah 0 MAKA 'musuhHealth' dikurangi dengan 'pokeAttack', NAMUN JIKA sisa hasil bagi 'musuhHealth' dari 'index' adalah 0 MAKA 'pokeHealth' dikurangi dengan 'musuhAttack', NAMUN JIKA sisa hasil bagi 'pokeHealth' dan 'musuhHealth' adalah 0 MAKA nilai 'pokeHealth' ditambah dengan 'musuhAttack' dan nilai 'musuhHealth' ditambah dengan 'pokeAttack', 'index' ditambah dengan pertambahan 1
JIKA 'pokeHealth' lebih besar dari 'musuhHealth' MAKA TULISKAN "Selamat 'nama', Pokemon anda bertipe 'poke' memenangkan pertarungan melawan musuh bertipe 'musuh' !"
JIKA 'pokeHealth' lebih kecil dari 'musuhHealth' MAKA TULISKAN "Sayang sekali 'nama', Pokemon anda bertipe 'poke' dikalahkan musuh bertipe 'musuh' !"

*/

var nama = prompt('Masukan Nama Anda :');
var angka = prompt('Masukan angka keberuntungan mu antara 1 sampai 9 : ');
var umurPoke = prompt('Masukan umur pokemon mu antara 2 sampai 10 : ');
var tipeMusuh = prompt('Masukan tipe musuh mu antara 1 sampai 9 :');
var angkaRan;
var umurRan;
var tipeMusuhRan;
var poke;
var musuh;
var pokeHealth;
var pokeAttack;
var musuhHealth;
var musuhAttack;

angkaRan = Math.random()* angka;
umurRan = Math.random()* umurPoke;
tipeMusuhRan = Math.random()* tipeMusuh;

if (nama){
  console.log('Selamat datang ' + nama +  ', di Pokemon world');
} else {
  alert('Input nama Anda!');
  angkaRan = 0;
  umurRan = 0;
}

if (angka < 1 || angka > 9){
  alert('Anda salah input Angka Keberuntungan mu!');
  angkaRan = 0;
  umurRan = 0;
}

if (umurPoke < 2 || umurPoke > 10){
  alert('Anda salah input Umur Pokemon mu!');
  angkaRan = 0;
  umurRan = 0;
}

if (tipeMusuh < 1 || tipeMusuh > 9){
  alert('Anda salah input tipeMusuh!');
  angkaRan = 0;
  umurRan = 0;
  tipeMusuh = 0;
}

console.log('======================================');

function getPoke(angkatipe,attackPoke) {
  console.log('Anda mendapatkan pokemon tipe ' + poke);
  pokeHealth = (Math.round((angkaRan + umurRan) * angkatipe));
  pokeAttack = Math.round(tipeMusuhRan * attackPoke);
  console.log('Health Point Pokemon : ' + pokeHealth);
  console.log('Attack Pokemon anda = ' + pokeAttack);
}

if (angkaRan < umurRan) {
  poke = 'Common';
  getPoke(100,100);
} else if (angkaRan > umurRan) {
  poke = 'Rare';
  getPoke(500,100);
} else if (angkaRan === umurRan && angkaRan !== 0 && umurRan !== 0) {
  poke = 'legendary';
  getPoke(1000,100);
} else if (angkaRan === 0 || umurRan === 0 || nama === false){
  console.log('Anda tidak dapat bermain karena tidak benar dalam menginput!');
}

console.log('======================================');

function getEnemy(angkaMusuh,attackEnemy){
  console.log('Anda menemukan musuh tipe ' + musuh);
  musuhHealth = (Math.round((tipeMusuhRan + umurRan) * angkaMusuh));
  musuhAttack = Math.round(angkaRan * attackEnemy);
  console.log('Health Point Musuh : ' + musuhHealth);
  console.log('Attack musuh anda = ' + musuhAttack);
}

if (tipeMusuhRan < umurRan) {
  musuh = 'Easy';
  getEnemy(100,100);
} else if (tipeMusuhRan > umurRan) {
  musuh = 'Normal';
  getEnemy(500,100);
} else if (tipeMusuhRan === umurRan && tipeMusuhRan !== 0 && umurRan !== 0) {
  musuh = 'Hard';
  getEnemy(1000,100);
} else if (tipeMusuhRan === 0 || umurRan === 0 || nama === false){
  console.log('Anda tidak dapat bermain karena tidak benar dalam menginput!');
}

var index = 0;
while(index < 100){
  if (pokeHealth % index === 0){
    musuhHealth = musuhHealth - pokeAttack;
  } else if (musuhHealth % index === 0){
    pokeHealth = pokeHealth - musuhAttack;
  } else if (pokeHealth % index === 0 && musuhHealth % index === 0) {
    pokeHealth = pokeHealth + musuhAttack;
    musuhHealth = musuhHealth + pokeAttack;
  }
  index = index + 1;
}

console.log('======================================');

if (pokeHealth > musuhHealth){
  console.log('Selamat ' + nama + ', Pokemon anda bertipe ' + poke + ' memenangkan pertarungan melawan musuh bertipe ' + musuh + '!');
} else {
    console.log('Sayang sekali ' + nama + ', Pokemon anda bertipe ' + poke + ' dikalahkan musuh bertipe ' + musuh + '!');
}
