import React, { useState } from 'react';
import {
    LayoutDashboard,
    FolderGit2,
    FileText,
    Users,
    UserCheck,
    Settings,
    LogOut,
    ChevronLeft,
    ChevronRight,
    Search,
    Bell,
    ShieldCheck
} from 'lucide-react';

export default function DashboardLayout({ children, user, onLogout }) {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    const navigation = [
        { name: 'Dashboard Overview', href: '#', icon: LayoutDashboard, current: true },
        { name: 'Google Drive Sources', href: '#', icon: FolderGit2, current: false },
        { name: 'Manajemen Dokumen', href: '#', icon: FileText, current: false },
        { name: 'Data Pendaftar', href: '#', icon: Users, current: false },
        { name: 'Data Asesor', href: '#', icon: UserCheck, current: false },
        { name: 'Pengaturan Sistem', href: '#', icon: Settings, current: false },
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex font-sans antialiased selection:bg-blue-600 selection:text-white">

            {/* Sidebar Modern Minimalis */}
            <aside
                className={`${sidebarCollapsed ? 'w-20' : 'w-64'} bg-slate-900 text-slate-300 transition-all duration-300 ease-in-out flex flex-col justify-between border-r border-slate-800/80 z-20`}
            >
                <div>
                    {/* Logo / Brand Area */}
                    <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800/60">
                        {!sidebarCollapsed && (
                            <div className="flex items-center gap-2.5 overflow-hidden">
                                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/20">
                                    <ShieldCheck size={18} />
                                </div>
                                <div className="leading-tight">
                                    <span className="font-semibold text-white tracking-tight block text-sm">LSP Dashboard</span>
                                    <span className="text-[11px] text-slate-400">Monitoring System</span>
                                </div>
                            </div>
                        )}
                        <button
                            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors mx-auto"
                            title="Toggle Sidebar"
                        >
                            {sidebarCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                        </button>
                    </div>

                    {/* Navigasi Menu */}
                    <nav className="p-3 space-y-1">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group relative ${item.current
                                        ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20 shadow-sm'
                                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                                    }`}
                                title={sidebarCollapsed ? item.name : ''}
                            >
                                <item.icon size={20} className={`shrink-0 ${item.current ? 'text-blue-400' : 'text-slate-400 group-hover:text-slate-200'}`} />
                                {!sidebarCollapsed && <span className="truncate">{item.name}</span>}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Footer Sidebar / User Profile Minimalis */}
                <div className="p-3 border-t border-slate-800/60">
                    {!sidebarCollapsed ? (
                        <div className="flex items-center justify-between bg-slate-800/40 p-2.5 rounded-xl border border-slate-800">
                            <div className="flex items-center gap-3 overflow-hidden">
                                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-semibold text-xs shrink-0">
                                    {user?.name ? user.name.charAt(0) : 'S'}
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-xs font-semibold text-slate-200 truncate">{user?.name || 'Staf LSP'}</p>
                                    <p className="text-[10px] text-slate-400 truncate">{user?.role || 'Administrator'}</p>
                                </div>
                            </div>
                            <button
                                onClick={onLogout}
                                className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition-colors"
                                title="Keluar"
                            >
                                <LogOut size={16} />
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={onLogout}
                            className="w-full flex justify-center p-2 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition-colors"
                            title="Keluar"
                        >
                            <LogOut size={20} />
                        </button>
                    )}
                </div>
            </aside>

            {/* Main Content Wrapper */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

                {/* Top Header */}
                <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200/80 px-8 flex justify-between items-center z-10 sticky top-0">
                    <div className="flex items-center gap-4 w-96">
                        <div className="relative w-full">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                                <Search size={16} />
                            </span>
                            <input
                                type="text"
                                placeholder="Cari dokumen, pendaftar, atau asesor..."
                                className="w-full pl-9 pr-4 py-1.5 bg-slate-100/70 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all placeholder:text-slate-400"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="relative p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                            <Bell size={18} />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-600 rounded-full ring-2 ring-white"></span>
                        </button>
                        <div className="h-4 w-px bg-slate-200"></div>
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            Google Drive API Connected
                        </div>
                    </div>
                </header>

                {/* Scrollable Content Area */}
                <main className="flex-1 overflow-y-auto p-8">
                    <div className="max-w-7xl mx-auto space-y-6">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}