# Rangkuman Sesi 1 dan 2
## Sesi 1 : Pengenalan Git Version Control
#### Git Version Control merupakan tools perangkat lunak yang dapat meneglola perubahan source code dari waktu ke waktu guna untuk membantu software team dalam hal development.

##### ada beberapa perintah dasar dalam menggunakan git yaitu: 
1. instal git terlebih dahulu,kemudian masukkan username github menggunakan perintah 
   * $ git config --global user.name "usernameSaya" 
   * $ git config --global user.emai EmailSaya@gmail.com
  
2. untuk memastikan proses login berhasil silahkan ketik perintah ini
   * $ git config --list
  
3. login ke github untuk membuat repository baru
   
4. buat folder pada masing masing komputer (disini saya menggunakan os windows) guna untuk menyimpan update file dari repository github yang telah saya buat
   
5. ubah folder menjadi repository
   * $ git init
  
6. tambahkan file ke dalam repository  atau mengubah status file menjadi staged
   * $ git add .
7. menambahkan update file beserta komentar di dalam nya
   * $ git commit -m "komentarSaya"
8. melakukan remote repository untuk mengupload file yang telah dibuat sebelumnya di local disk 
   * $ git remote add origin https://github.com/juriiaahh/Bootcamp-reactJs.git
   * $ git remote set-url origin https://github.com/juriiaahh/Bootcamp-reactJs.git
9.  untuk mengupload hasil akhir dari langkah-langkah di atas 
    * $ git push origin master
10. maka file berhasil di upload di repository github
11. untuk membuat branch baru menggunakan perintah
    * $ git branch dev
    * $ git checkout dev (untuk berpindah ke branch dev)
    
12. git merge 
    * $ git merge dev2 (untuk menggabungkan branch sekarang dengan branch dev2)
    * $ git branch -d dev (untuk menghapus branch di lokal)
13. git push origin --all (untuk berbagi semua branch  yang ada di lokal ke remote)

14. git clone
    untuk membuat salinan repository di lokal

===============================================

## Sesi 2 : Pengenalan Agile dan Scrum

#### Agile merupakan adalah suatu metode pola pikir untuk menyelesaikan permasalahan yang bersifat flexible terhadap perubahan sebuah masalah, sehingga pola penyelesaian masalah menggunakan agile menyesuaikan perubahan dan agile hanyalah framework yang berisi sebuah prinsip untuk mewujudkan masalah secara adaptive

##### Cara Agile menghadapi perubahan:
* setiap beberapa section sprint process dalam mengerjakan suatu tujuan menghasilkan feedback dari client, dan apabila si client belum merasa puas maka kita berusaha mendapatkan feedback dan mengulang process sprint secepatnya sampai keinginan client terpenuhi. jika keinginan client terpenuhi maka lanjut ke sprint berikut nya.
  
#### Scrum adalah metode yang mengimplentasikan agile sebagai pengembangan sebuah proyek, event, dan lain nya. Scrum merupakan pencapaian terbesar dalam menerapkan metode agile.
* Scrum team
  * Product owner
  * Scrum master
  * Development team
* Penerapan Scrum
  * Sprin planning
  * Daily Scrum
  * Pengembangan
  * Sprint review meeting
  * Sprint retrospective meeting

#### Hubungan antara Agile dan Scrum seperti sebuah sifat dan sebuah Tindakan, dimana agile merupakan aturan-aturan yang bertujuan untuk menyelesaikan masalah secara adaptive dan diimplementasikan pada scrum yang berisi kegiatan yang menerapkan sifat agile.