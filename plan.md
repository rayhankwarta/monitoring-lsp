🚀 Project Name
LSP Monitoring Dashboard
Brief Description:
LSP Monitoring Dashboard adalah aplikasi web internal untuk membantu Lembaga Sertifikasi Profesi (LSP) memantau data pendaftar, asesor, serta dokumen administrasi yang tersimpan di Google Drive. Aplikasi mengintegrasikan metadata dokumen dan data spreadsheet ke dalam satu dashboard terpusat agar staf dapat melakukan pencarian, monitoring, dan pengelolaan data secara lebih efisien tanpa harus membuka folder Google Drive satu per satu.

🛠️ Tech Stack & Conventions
Technology Stack
- Frontend: React.js + Vite
- Backend: Laravel REST API
- Database: PostgreSQL
- Styling: Tailwind CSS + shadcn/ui
- Data Visualization: Recharts
- Document Integration: Google Drive API v3
- Spreadsheet Integration: Google Sheets API v4
- Authentication: Laravel Sanctum
- Authorization: Role-Based Access Control (RBAC)
- Development Environment: Localhost menggunakan environment PHP, Composer, Node.js, npm, dan PostgreSQL
- Version Control: Git + GitHub
- API Documentation: OpenAPI/Swagger
- Testing: PHPUnit/Pest untuk backend dan Vitest untuk frontend
Coding Rules
- Gunakan Clean Code, modular architecture, separation of concerns, dan prinsip SOLID jika relevan.
- Pisahkan frontend React dan backend Laravel ke dalam direktori masing-masing.
- Gunakan REST API sebagai penghubung frontend dan backend.
- Semua credentials, API keys, OAuth client secrets, dan konfigurasi sensitif wajib disimpan dalam .env.
- Sediakan .env.example tanpa nilai credentials yang sebenarnya.
- Jangan pernah mengekspos Google OAuth client secret, refresh token, atau service account credentials ke frontend.
- Gunakan penamaan file kebab-case untuk komponen frontend dan mengikuti konvensi Laravel untuk model, controller, migration, dan service.
- Gunakan Form Request Validation untuk validasi input di Laravel.
- Gunakan API Resources untuk menjaga konsistensi format respons API.
- Gunakan Service Layer untuk integrasi Google Drive, Google Sheets, sinkronisasi, dan business logic.
- Gunakan database migration, factory, dan seeder untuk pengelolaan skema serta data pengujian.
- Gunakan pagination, filtering, sorting, dan pencarian di sisi server untuk tabel data berukuran besar.
- Hindari query database berulang yang tidak diperlukan dan perhatikan masalah N+1 query.
- Gunakan transaksi database untuk operasi yang memerlukan konsistensi beberapa tabel.
- Setiap endpoint harus memiliki validasi, autentikasi, otorisasi, dan error handling yang sesuai.
- Jangan menghapus atau mengubah file asli di Google Drive secara otomatis.
- Jangan mengasumsikan semua file Drive merupakan dokumen tidak terpakai. Status dokumen harus ditentukan berdasarkan aturan bisnis yang dapat diverifikasi.
- Gunakan bahasa Indonesia untuk label UI, pesan validasi, dan dokumentasi yang ditujukan kepada staf LSP.
🎯 High-Level Architecture & Scope
1. Arsitektur Aplikasi
Aplikasi menggunakan arsitektur frontend-backend terpisah dengan PostgreSQL sebagai database utama dan Google Drive sebagai sumber dokumen.
Alur utama:
1. Staf membuka website dan login sesuai akun yang diberikan.
2. Backend memvalidasi identitas dan hak akses pengguna.
3. Backend mengambil metadata folder dan file melalui Google Drive API sesuai izin yang diberikan.
4. Metadata file disimpan atau diperbarui di PostgreSQL menggunakan Google Drive file ID sebagai identitas eksternal.
5. Data pendaftar, asesor, dan spreadsheet diproses menjadi data terstruktur sesuai kebutuhan monitoring.
6. Dashboard menampilkan statistik, tabel, status dokumen, dan hasil pencarian.
7. Ketika staf membuka dokumen, aplikasi mengarahkan pengguna ke file Google Drive sesuai hak aksesnya.
2. Key Features
Feature A: Dashboard Overview
- [ ] Menampilkan total dokumen yang terindeks.
- [ ] Menampilkan total folder Google Drive yang terhubung.
- [ ] Menampilkan jumlah pendaftar.
- [ ] Menampilkan jumlah asesor.
- [ ] Menampilkan dokumen yang belum dikategorikan.
- [ ] Menampilkan dokumen yang berpotensi tidak terpakai berdasarkan aturan bisnis.
- [ ] Menampilkan statistik jenis dokumen dan distribusi kategori.
- [ ] Menampilkan status sinkronisasi Google Drive terakhir.
- [ ] Menampilkan grafik tren data pendaftar dan dokumen jika riwayat datanya tersedia.
- [ ] Menyediakan navigasi cepat ke modul pendaftar, asesor, dokumen, dan sinkronisasi.
Feature B: Google Drive Integration
- [ ] Menghubungkan akun atau sumber Google Drive yang telah diotorisasi.
- [ ] Mendukung pemilihan folder sumber yang akan diindeks.
- [ ] Mengambil daftar folder dan file menggunakan Google Drive API v3.
- [ ] Mengambil metadata file, meliputi file ID, nama, MIME type, lokasi folder, waktu modifikasi, pemilik jika tersedia, dan tautan file.
- [ ] Menyimpan metadata ke PostgreSQL tanpa menduplikasi file yang sudah terindeks.
- [ ] Menangani folder bersarang dan pagination API.
- [ ] Mengidentifikasi file yang dipindahkan, diubah, atau dihapus dari sumber.
- [ ] Mendukung sinkronisasi manual melalui dashboard.
- [ ] Menyediakan sinkronisasi berkala melalui Laravel Scheduler.
- [ ] Menyediakan log sinkronisasi yang mencatat jumlah file berhasil, gagal, diperbarui, dan dilewati.
- [ ] Menangani rate limit, token kedaluwarsa, kegagalan jaringan, dan retry secara aman.
- [ ] Menyediakan status koneksi dan izin akses Google Drive.
Feature C: Document Management
- [ ] Menampilkan dokumen dalam tabel terpusat.
- [ ] Menampilkan nama file, kategori, folder, tanggal modifikasi, jenis file, dan status indeks.
- [ ] Menyediakan pencarian berdasarkan nama dokumen dan metadata yang tersedia.
- [ ] Menyediakan filter kategori, tipe file, folder, tanggal modifikasi, dan status dokumen.
- [ ] Menyediakan sorting dan pagination.
- [ ] Mengelompokkan dokumen berdasarkan kategori seperti pendaftar, asesor, sertifikasi, administrasi, dan lainnya.
- [ ] Menyediakan preview untuk tipe file yang didukung.
- [ ] Menyediakan tautan untuk membuka file asli di Google Drive.
- [ ] Menampilkan informasi apabila dokumen tidak dapat diakses atau sudah tidak tersedia.
- [ ] Mendukung penandaan dokumen untuk ditinjau oleh staf.
- [ ] Mendukung pencatatan alasan dan status peninjauan dokumen.
- [ ] Tidak menghapus atau memindahkan file asli secara otomatis.
Feature D: Applicant Monitoring
- [ ] Menampilkan daftar pendaftar yang tersedia dari sumber data yang telah ditentukan.
- [ ] Menampilkan identitas atau ID pendaftar, nama, tanggal pendaftaran, status, dan referensi dokumen terkait sesuai data sumber.
- [ ] Menyediakan pencarian berdasarkan nama atau ID pendaftar.
- [ ] Menyediakan filter status dan periode pendaftaran.
- [ ] Menyediakan halaman detail pendaftar.
- [ ] Menghubungkan pendaftar dengan dokumen pendukung di Google Drive.
- [ ] Menampilkan status kelengkapan dokumen jika kriteria kelengkapan sudah ditetapkan.
- [ ] Mencatat sumber data dan waktu sinkronisasi terakhir.
- [ ] Menangani data yang belum lengkap dan potensi duplikasi.
Feature E: Assessor Monitoring
- [ ] Menampilkan daftar asesor dari sumber data yang telah ditentukan.
- [ ] Menampilkan ID asesor, nama, status, kompetensi atau skema sertifikasi jika tersedia.
- [ ] Menyediakan pencarian dan filter data asesor.
- [ ] Menyediakan halaman detail asesor.
- [ ] Menghubungkan data asesor dengan dokumen pendukung di Google Drive.
- [ ] Menampilkan status kelengkapan dokumen berdasarkan aturan yang telah disepakati.
- [ ] Menampilkan informasi masa berlaku sertifikat atau dokumen jika data tanggalnya tersedia.
- [ ] Menyediakan penanda untuk dokumen yang perlu ditinjau atau diperbarui.
- [ ] Mencatat sumber data dan waktu sinkronisasi terakhir.
Feature F: Google Sheets Integration
- [ ] Mengidentifikasi spreadsheet yang digunakan sebagai sumber data pendaftar dan asesor.
- [ ] Menyediakan konfigurasi spreadsheet, worksheet, dan range yang digunakan.
- [ ] Membaca data menggunakan Google Sheets API.
- [ ] Memetakan kolom spreadsheet ke struktur tabel PostgreSQL.
- [ ] Memvalidasi tipe data dan menangani kolom kosong.
- [ ] Menentukan primary key atau aturan identifikasi record untuk mencegah duplikasi.
- [ ] Menyediakan sinkronisasi manual dan terjadwal.
- [ ] Mencatat perubahan jumlah record dan kegagalan impor.
- [ ] Menangani perubahan nama kolom atau struktur spreadsheet dengan aman.
- [ ] Menyediakan laporan validasi data setelah proses sinkronisasi.
- [ ] Tidak mengubah isi spreadsheet asli tanpa persetujuan dan kebutuhan yang jelas.
Feature G: Potentially Unused Document Review
- [ ] Mengidentifikasi dokumen yang berpotensi tidak terpakai berdasarkan kriteria yang dapat dikonfigurasi.
- [ ] Menggunakan metadata seperti usia dokumen, kategori, keterkaitan dengan data aktif, dan hasil peninjauan staf.
- [ ] Membedakan dokumen aktif, perlu ditinjau, arsip, dan belum dikategorikan.
- [ ] Menampilkan alasan sebuah dokumen ditandai untuk ditinjau.
- [ ] Menyediakan fitur konfirmasi atau penolakan hasil peninjauan.
- [ ] Menyimpan histori keputusan staf.
- [ ] Tidak menganggap dokumen jarang dibuka sebagai dokumen tidak berguna.
- [ ] Tidak menghapus dokumen secara otomatis.
- [ ] Menyediakan opsi untuk mengarsipkan metadata atau mengubah kategori sesuai izin dan prosedur LSP.
Feature H: Authentication & Authorization
- [ ] Menyediakan halaman login.
- [ ] Menyediakan role Administrator dan Staff.
- [ ] Membatasi akses ke halaman dan API berdasarkan role.
- [ ] Membatasi akses konfigurasi integrasi untuk Administrator.
- [ ] Membatasi akses data pendaftar, asesor, dan dokumen berdasarkan kewenangan.
- [ ] Memvalidasi izin sebelum menampilkan data sensitif.
- [ ] Menyediakan logout dan manajemen sesi yang aman.
- [ ] Menyimpan audit log untuk aktivitas penting.
- [ ] Menyediakan pengelolaan akun pengguna oleh Administrator.
Feature I: System Settings & Audit Logs
- [ ] Menyediakan konfigurasi sumber Google Drive.
- [ ] Menyediakan konfigurasi spreadsheet sumber.
- [ ] Menampilkan histori sinkronisasi.
- [ ] Menampilkan pesan kesalahan integrasi tanpa membocorkan credentials.
- [ ] Mencatat pengguna, aktivitas, waktu, dan hasil operasi penting.
- [ ] Menyediakan filter audit log berdasarkan pengguna, aktivitas, dan periode.
- [ ] Menyediakan pengaturan interval sinkronisasi.
- [ ] Menyediakan status kesehatan integrasi dan database.
🗄️ Database Design (Initial Proposal)
Skema berikut merupakan rancangan awal yang perlu disesuaikan dengan struktur data aktual di Google Drive dan spreadsheet.
Core Tables
1. users
   - id
   - name
   - email
   - password
   - role
   - created_at
   - updated_at
2. drive_sources
   - id
   - name
   - google_account_identifier
   - root_folder_id
   - sync_enabled
   - last_synced_at
   - sync_status
   - created_at
   - updated_at
3. drive_folders
   - id
   - drive_source_id
   - google_folder_id
   - parent_google_folder_id
   - name
   - web_view_link
   - last_synced_at
   - created_at
   - updated_at
4. documents
   - id
   - drive_source_id
   - google_file_id
   - google_parent_folder_id
   - name
   - mime_type
   - category
   - web_view_link
   - modified_time
   - size_bytes
   - index_status
   - review_status
   - review_reason
   - last_synced_at
   - created_at
   - updated_at
5. applicants
   - id
   - external_id
   - name
   - registration_date
   - status
   - source_spreadsheet_id
   - source_sheet_name
   - last_synced_at
   - created_at
   - updated_at
6. assessors
   - id
   - external_id
   - name
   - status
   - competency_scheme
   - source_spreadsheet_id
   - source_sheet_name
   - last_synced_at
   - created_at
   - updated_at
7. document_links
   - id
   - document_id
   - applicant_id (nullable)
   - assessor_id (nullable)
   - relationship_type
   - created_at
   - updated_at
8. spreadsheet_sources
   - id
   - name
   - spreadsheet_id
   - worksheet_name
   - range_config
   - source_type
   - sync_enabled
   - last_synced_at
   - created_at
   - updated_at
9. sync_logs
   - id
   - source_type
   - source_id
   - started_at
   - finished_at
   - status
   - total_processed
   - total_created
   - total_updated
   - total_skipped
   - total_failed
   - error_summary
   - initiated_by
   - created_at
10. audit_logs
    - id
    - user_id
    - action
    - entity_type
    - entity_id
    - details
    - ip_address
    - created_at
Database Rules
- Gunakan unique constraint pada kombinasi sumber Drive dan google_file_id.
- Gunakan unique constraint pada identitas eksternal pendaftar atau asesor sesuai sumber datanya.
- Gunakan foreign key untuk relasi antarentitas.
- Gunakan index pada kolom pencarian dan filtering yang sering digunakan.
- Simpan tanggal dan waktu secara konsisten.
- Jangan menyimpan seluruh isi dokumen ke dalam tabel metadata.
- Simpan token OAuth di penyimpanan server yang aman dan terenkripsi jika diperlukan; jangan menyimpannya dalam tabel metadata dokumen.
- Jangan mengasumsikan ID pendaftar atau asesor selalu tersedia. Tentukan aturan identifikasi record sebelum implementasi impor.
🔐 Security & Data Governance
- Semua endpoint internal wajib dilindungi autentikasi.
- Terapkan prinsip least privilege pada akses Google Drive dan Google Sheets.
- Gunakan OAuth 2.0 dengan scope minimum yang diperlukan.
- Gunakan akun atau Shared Drive yang dikelola organisasi apabila sesuai dengan kebijakan LSP.
- Jangan meminta akses seluruh Drive jika aplikasi hanya membutuhkan beberapa folder.
- Jangan menampilkan data pribadi pendaftar atau asesor kepada pengguna yang tidak memiliki izin.
- Jangan mengandalkan penyembunyian tombol di frontend sebagai mekanisme otorisasi.
- Validasi akses di backend untuk setiap operasi penting.
- Gunakan HTTPS untuk lingkungan deployment yang mendukung akses melalui jaringan.
- Terapkan perlindungan terhadap SQL injection, XSS, CSRF, dan penyalahgunaan API sesuai konteks aplikasi.
- Jangan mencatat password, access token, refresh token, atau isi dokumen sensitif ke log.
- Tentukan kebijakan retensi, backup, pemulihan data, dan audit log.
- Untuk penghapusan atau perubahan file sumber, wajib ada otorisasi, konfirmasi, dan prosedur yang disetujui organisasi.
- Jika aplikasi dapat diakses dari perangkat lain di jaringan, terapkan pembatasan akses jaringan dan pengamanan server.
📌 Development Roadmap
Phase 1: Foundation & Setup
- [ ] Membuat struktur direktori frontend dan backend.
- [ ] Menginisialisasi React + Vite.
- [ ] Menginisialisasi Laravel.
- [ ] Mengonfigurasi koneksi PostgreSQL.
- [ ] Menyiapkan .env dan .env.example.
- [ ] Menyiapkan Git repository dan .gitignore.
- [ ] Membuat skema database awal dan migration.
- [ ] Membuat struktur layout dashboard.
- [ ] Membuat komponen navigasi, sidebar, header, dan halaman login.
- [ ] Menyiapkan autentikasi dan middleware otorisasi.
- [ ] Menyiapkan logging dan format respons API yang konsisten.
Deliverable: Aplikasi dapat dijalankan secara lokal, terhubung ke database, dan memiliki fondasi autentikasi.
Phase 2: Google Drive Integration
- [ ] Membuat project Google Cloud.
- [ ] Mengaktifkan Google Drive API.
- [ ] Mengonfigurasi OAuth consent screen dan credentials sesuai jenis akun.
- [ ] Menentukan metode autentikasi serta kepemilikan sumber Drive.
- [ ] Membuat modul koneksi Google Drive.
- [ ] Menguji akses ke satu folder yang telah diotorisasi.
- [ ] Mengambil metadata file dan folder.
- [ ] Menyimpan metadata ke PostgreSQL.
- [ ] Menerapkan pagination dan deduplikasi.
- [ ] Menangani file yang berubah, dipindahkan, atau tidak lagi tersedia.
- [ ] Membuat log sinkronisasi.
- [ ] Menguji retry dan penanganan error API.
Deliverable: Metadata dari folder Google Drive yang dipilih dapat diindeks ke database lokal secara konsisten.
Phase 3: Core Dashboard & Document Search
- [ ] Membuat halaman Dashboard Overview.
- [ ] Membuat API statistik dashboard.
- [ ] Membuat tabel dokumen.
- [ ] Membuat pencarian, filter, sorting, dan pagination.
- [ ] Membuat halaman detail dokumen.
- [ ] Menambahkan tautan menuju dokumen asli di Google Drive.
- [ ] Membuat klasifikasi dan penandaan dokumen.
- [ ] Menampilkan status dan waktu sinkronisasi.
Deliverable: Staf dapat mencari dan membuka dokumen melalui satu dashboard.
Phase 4: Applicant, Assessor & Spreadsheet Integration
- [ ] Mengidentifikasi struktur spreadsheet yang digunakan.
- [ ] Menentukan kolom dan primary key atau aturan pencocokan record.
- [ ] Membuat konfigurasi sumber Google Sheets.
- [ ] Membuat service untuk membaca dan memvalidasi data spreadsheet.
- [ ] Membuat proses sinkronisasi data pendaftar.
- [ ] Membuat proses sinkronisasi data asesor.
- [ ] Membuat tabel dan halaman detail pendaftar.
- [ ] Membuat tabel dan halaman detail asesor.
- [ ] Menghubungkan data pendaftar dan asesor dengan dokumen pendukung.
- [ ] Menangani data duplikat, tidak lengkap, dan perubahan skema.
- [ ] Menambahkan status kelengkapan dokumen berdasarkan aturan yang telah ditetapkan.
Deliverable: Data pendaftar, asesor, dan dokumen terkait dapat ditelusuri melalui aplikasi.
Phase 5: Automation, Review & Audit
- [ ] Menyiapkan Laravel Scheduler.
- [ ] Menentukan interval sinkronisasi.
- [ ] Membuat proses sinkronisasi terjadwal dan idempoten.
- [ ] Menyediakan indikator keberhasilan dan kegagalan sinkronisasi.
- [ ] Membuat fitur peninjauan dokumen yang berpotensi tidak terpakai.
- [ ] Menyimpan alasan dan histori keputusan peninjauan.
- [ ] Membuat audit log aktivitas penting.
- [ ] Menambahkan pengelolaan akun dan role.
- [ ] Menguji pembatasan akses data.
Deliverable: Sinkronisasi terjadwal dan proses review dokumen berjalan dengan kontrol akses yang memadai.
Phase 6: Testing, Optimization & Deployment
- [ ] Menguji autentikasi dan otorisasi.
- [ ] Menguji integrasi Google Drive dan Google Sheets.
- [ ] Menguji validasi input dan penanganan error.
- [ ] Menguji sinkronisasi berulang tanpa duplikasi.
- [ ] Menguji pagination, filter, dan pencarian dengan dataset yang lebih besar.
- [ ] Menguji skenario token kedaluwarsa dan API rate limit.
- [ ] Menguji backup dan pemulihan PostgreSQL.
- [ ] Melakukan review keamanan.
- [ ] Menyusun dokumentasi instalasi dan konfigurasi.
- [ ] Menyiapkan deployment sesuai lingkungan operasional LSP.
- [ ] Menyiapkan CI/CD jika menggunakan repository dan server deployment yang mendukung.
Deliverable: Aplikasi siap diuji oleh staf LSP dan dapat dipasang pada lingkungan operasional yang disetujui.
🔄 Branching & Workflow Strategy
- main → Versi stabil untuk deployment; perubahan masuk melalui Pull Request.
- develop → Integrasi fitur yang telah melewati pengujian awal.
- feature/<nama-fitur> → Pengembangan fitur baru.
- fix/<nama-masalah> → Perbaikan bug.
- hotfix/<nama-masalah> → Perbaikan mendesak pada versi production.
AI Development Workflow
1. Baca plan.md sebelum mulai mengerjakan fitur.
2. Periksa struktur project yang sudah ada sebelum membuat atau mengubah file.
3. Implementasikan fitur secara bertahap sesuai roadmap.
4. Jangan mengimplementasikan semua fase sekaligus.
5. Sebelum coding, jelaskan tujuan fitur, file yang akan dibuat atau diubah, dan dependensinya.
6. Setelah implementasi, jalankan pengujian yang relevan.
7. Perbaiki error sebelum melanjutkan ke fase berikutnya.
8. Jangan mengubah konfigurasi atau skema yang sudah berjalan tanpa mengevaluasi dampaknya.
9. Jangan menghapus kode atau data yang ada tanpa alasan yang jelas.
10. Perbarui dokumentasi jika ada perubahan arsitektur atau konfigurasi.
📝 Notes & Edge Cases
Google Drive
- Google Drive adalah sumber dokumen asli; PostgreSQL menyimpan metadata dan relasi yang diperlukan aplikasi.
- Tidak semua file memiliki izin akses, pemilik, ukuran, atau metadata yang sama.
- Google Docs, Sheets, dan Slides dapat memiliki MIME type khusus.
- Folder bersarang harus diproses secara rekursif dengan pagination.
- File yang dipindahkan tidak boleh otomatis dianggap sebagai file baru.
- Jika akses dicabut, aplikasi harus menampilkan status yang sesuai tanpa membocorkan informasi.
- Penghapusan file dari sumber harus dibedakan dari kegagalan API atau gangguan koneksi.
- Untuk sinkronisasi yang efisien, evaluasi penggunaan perubahan incremental melalui mekanisme Google Drive API, seperti change tracking, setelah sinkronisasi awal berjalan stabil.
Google Sheets
- Struktur kolom dapat berubah sewaktu-waktu.
- Nama worksheet dapat berubah.
- Baris kosong, ID duplikat, format tanggal, dan nilai tidak konsisten harus ditangani.
- Jangan melakukan upsert berdasarkan nama saja jika terdapat identifier yang lebih andal.
- Simpan informasi sumber dan waktu sinkronisasi untuk kebutuhan penelusuran.
Document Classification
- Jangan langsung mengklasifikasikan dokumen berdasarkan nama file saja.
- Gunakan kombinasi nama, folder, tipe file, metadata, dan aturan bisnis.
- Dokumen yang tidak diketahui kategorinya harus masuk ke status Uncategorized.
- Dokumen lama belum tentu tidak terpakai; dokumen tersebut dapat menjadi arsip penting atau bukti audit.
- Penandaan dokumen tidak terpakai harus menjadi rekomendasi untuk ditinjau, bukan keputusan penghapusan otomatis.
Local Development & Deployment
- Localhost hanya menunjukkan lokasi aplikasi berjalan, bukan jaminan bahwa aplikasi aman atau dapat diakses seluruh staf.
- Jika website hanya digunakan di satu komputer, akses localhost sudah cukup untuk pengembangan dan pengujian.
- Jika website harus diakses oleh beberapa staf, tentukan apakah aplikasi akan berjalan pada server lokal/intranet atau server cloud.
- Server lokal tetap memerlukan koneksi internet untuk berkomunikasi dengan Google Drive dan Google Sheets API.
- Siapkan backup database serta prosedur pemulihan.
- Jangan mengasumsikan kredensial Google Drive tersedia otomatis di semua komputer.
Scope Control
- MVP tidak perlu mencakup seluruh fitur sekaligus.
- Prioritaskan koneksi Google Drive, indeks metadata, pencarian dokumen, dan dashboard dasar.
- Integrasi spreadsheet pendaftar dan asesor menjadi tahap berikutnya setelah struktur sumber data dipahami.
- Fitur OCR, pencarian isi dokumen PDF, AI document classification, dan sinkronisasi dua arah berada di luar MVP kecuali benar-benar dibutuhkan.
- Setiap penambahan fitur harus mempertimbangkan keamanan, biaya, kompleksitas, dan kebutuhan operasional LSP.
✅ Definition of Done
Sebuah fitur dianggap selesai jika:
- [ ] Implementasi sesuai kebutuhan dan arsitektur yang telah disetujui.
- [ ] Validasi dan otorisasi backend berjalan.
- [ ] Tidak ada credentials yang di-hardcode.
- [ ] Penanganan error tersedia.
- [ ] Pengujian yang relevan lulus.
- [ ] Integrasi database dan API telah diverifikasi.
- [ ] Tidak ada duplikasi data yang tidak diinginkan.
- [ ] Dokumentasi penggunaan atau konfigurasi diperbarui.
- [ ] Fitur tidak merusak fungsi yang sudah ada.
Prinsip utama: Bangun sistem monitoring dan pencarian dokumen yang aman, konsisten, mudah digunakan, dan dapat dikembangkan secara bertahap tanpa mengganggu dokumen asli milik LSP di Google Drive.