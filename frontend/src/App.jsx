import React, { useState } from 'react';
import DashboardLayout from './components/DashboardLayout';
import { FileText, Users, UserCheck, FolderSync, ArrowUpRight, Clock, ExternalLink } from 'lucide-react';

export default function App() {
  const [user] = useState({
    name: 'Mohammad Rayhan',
    role: 'Administrator',
  });

  const handleLogout = () => {
    alert('Sesi diakhiri.');
  };

  return (
    <DashboardLayout user={user} onLogout={handleLogout}>

      {/* Header Halaman */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900">Dashboard Overview</h1>
          <p className="text-xs text-slate-500 mt-0.5">Pemantauan data pendaftar, asesor, dan sinkronisasi Google Drive LSP.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-xl shadow-sm transition-all flex items-center gap-2">
            <FolderSync size={15} /> Sinkronisasi Manual
          </button>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-sm shadow-blue-600/20 transition-all">
            + Tambah Sumber Data
          </button>
        </div>
      </div>

      {/* Grid Statistik Modern */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500">Total Dokumen Terindeks</span>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
              <FileText size={18} />
            </div>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-2xl font-bold tracking-tight text-slate-900">1,248</span>
            <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center">
              +12% <ArrowUpRight size={12} />
            </span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Dari Google Drive LSP</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500">Jumlah Pendaftar</span>
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
              <Users size={18} />
            </div>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-2xl font-bold tracking-tight text-slate-900">342</span>
            <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center">
              +4% <ArrowUpRight size={12} />
            </span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Sinkronisasi Google Sheets</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500">Total Asesor Aktif</span>
            <div className="p-2 bg-amber-50 text-amber-600 rounded-xl">
              <UserCheck size={18} />
            </div>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-2xl font-bold tracking-tight text-slate-900">28</span>
            <span className="text-[11px] font-medium text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">Tetap</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Skema Sertifikasi Terdaftar</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500">Status Sinkronisasi</span>
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
              <Clock size={18} />
            </div>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-lg font-bold tracking-tight text-emerald-600">Berhasil</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-1">Terakhir sinkron: 10 menit lalu</p>
        </div>

      </div>

      {/* Bagian Bawah: Ringkasan Aktivitas / Tabel */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-bold text-slate-900">Aktivitas Dokumen Terbaru</h3>
            <p className="text-xs text-slate-500">File Google Drive yang baru saja diindeks atau diperbarui.</p>
          </div>
          <button className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
            Lihat Semua <ExternalLink size={12} />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 font-medium">
                <th className="py-3 px-4">Nama Dokumen</th>
                <th className="py-3 px-4">Kategori</th>
                <th className="py-3 px-4">Waktu Modifikasi</th>
                <th className="py-3 px-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">Sertifikat_Kompetensi_2026_Skema_BI.pdf</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full font-medium text-[10px]">Sertifikasi</span>
                </td>
                <td className="py-3 px-4 text-slate-400">12 Oktober 2026, 14:20</td>
                <td className="py-3 px-4 text-right">
                  <a href="#" className="text-blue-600 hover:underline font-semibold">Buka Drive</a>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="py-3 px-4 font-medium text-slate-900">Form_Asesmen_Mandiri_Batch_4.docx</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-full font-medium text-[10px]">Administrasi</span>
                </td>
                <td className="py-3 px-4 text-slate-400">12 Oktober 2026, 11:05</td>
                <td className="py-3 px-4 text-right">
                  <a href="#" className="text-blue-600 hover:underline font-semibold">Buka Drive</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </DashboardLayout>
  );
}