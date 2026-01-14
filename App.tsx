import React, { useState, useMemo } from 'react';
import { 
  Users, Search, MessageCircle, ArrowRight, ChevronRight, 
  ChevronLeft, Sparkles, Database, Share2, Bell, 
  HelpCircle, Calendar, Award, ExternalLink, Info, Heart 
} from 'lucide-react';
import { MOCK_MENTORS, FORMS_URL } from './constants';
import { SlideData } from './types';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMentors = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return MOCK_MENTORS.filter(m => 
      m.university.toLowerCase().includes(term) || 
      m.major.toLowerCase().includes(term) ||
      m.name.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const slides: SlideData[] = [
    {
      id: 'intro',
      title: "ALUMNI MENTORSHIP PROJECT",
      subtitle: "INITIATIVE OVERVIEW",
      content: (
        <div className="space-y-6 animate-fade-in px-4">
          {/* Presented By Section */}
          <div className="text-center mb-6">
            <span className="text-xs font-bold tracking-[0.3em] text-slate-400 uppercase">Presented by</span>
            <h3 className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 tracking-tight mt-1">
              HANG TUAH 2025
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
              {/* Card 1: Definition */}
              <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-lg hover:shadow-xl transition-all relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-[2rem] -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                 <div className="relative z-10">
                   <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                      <Info size={24} />
                   </div>
                   <h4 className="font-bold text-lg text-slate-900 mb-2">Apa itu AMP?</h4>
                   <p className="text-slate-500 text-sm leading-relaxed">
                     Sebuah wadah penghubung antara <span className="font-bold text-slate-900">Alumni 2025</span> dan <span className="font-bold text-slate-900">Angkatan 2026</span>. Kita menyediakan database mentor agar adik kelas bisa bertanya langsung (via WhatsApp) tentang jalur masuk PTN/PTS dan kehidupan perkuliahan.
                   </p>
                 </div>
              </div>

              {/* Card 2: Context */}
              <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-lg hover:shadow-xl transition-all relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-[2rem] -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                 <div className="relative z-10">
                   <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                      <Heart size={24} />
                   </div>
                   <h4 className="font-bold text-lg text-slate-900 mb-2">Inisiatif Pribadi</h4>
                   <p className="text-slate-500 text-sm leading-relaxed">
                     Project ini adalah <span className="font-bold text-slate-900">inisiatif pribadi Gheren Ramandra Saputra</span>. Tujuannya sederhana: Menebar manfaat, membangun legacy positif, dan membantu adik-adik kelas kita menemukan jalannya.
                   </p>
                 </div>
              </div>
          </div>

          {/* Voluntary Notice */}
          <div className="bg-gradient-to-r from-slate-50 to-white p-6 rounded-[2rem] border border-slate-200 text-center relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-slate-600 font-medium italic text-sm md:text-base">
                "Program ini bersifat <span className="font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">100% SUKARELA</span>. Tidak ada paksaan. Namun, besar harapan saya agar teman-teman Angkatan 2025 bersedia meluangkan sedikit waktu untuk berkontribusi."
              </p>
              <div className="mt-3 text-[10px] font-black text-slate-400 tracking-widest uppercase">- Gheren</div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <a 
              href="https://wa.me/6282114927981" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg shadow-green-100 active:scale-95"
            >
              <MessageCircle size={20} /> Tanya Gheren
            </a>
            <button 
              onClick={() => setCurrentSlide(1)} 
              className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg active:scale-95"
            >
              Masuk ke Project <ArrowRight size={20} />
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'hero',
      subtitle: "Connecting Generations",
      content: (
        <div className="text-center space-y-8 animate-fade-in px-4">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-6 py-2 rounded-full text-sm font-bold border border-blue-100 shadow-sm">
            <Sparkles size={16} /> Hang Tuah Angkatan 2025
          </div>
          <h1 className="text-5xl md:text-8xl font-extrabold text-slate-900 leading-[1.1] tracking-tighter">
            BE THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">BRIDGE</span>.<br />
            BUILD THE LEGACY.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Wariskan pengalamanmu. Jadilah kompas bagi angkatan 2026 untuk menemukan jalan menuju masa depan.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 pt-6">
            <button 
              onClick={() => setCurrentSlide(2)} 
              className="w-full md:w-auto bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-600 transition-all flex items-center justify-center gap-3 shadow-2xl active:scale-95"
            >
              Lihat Overview <ArrowRight size={20} />
            </button>
            <a 
              href={FORMS_URL} 
              target="_blank"
              rel="noreferrer"
              className="w-full md:w-auto bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-3 active:scale-95"
            >
              Join Mentor <ExternalLink size={20} />
            </a>
          </div>
        </div>
      )
    },
    {
      id: 'problem',
      title: "Urgensi Project",
      subtitle: "The Gap We Fill",
      content: (
        <div className="grid md:grid-cols-2 gap-8 items-center px-4 animate-fade-in">
          <div className="space-y-6">
            <div className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-500 group-hover:text-white transition-colors">
                <HelpCircle size={28}/>
              </div>
              <h3 className="font-bold text-2xl text-slate-900 mb-3 tracking-tight">Kebingungan 2026</h3>
              <p className="text-slate-500 leading-relaxed">Adik kelas seringkali butuh informasi "lapangan" yang jujur, namun terkendala akses atau rasa sungkan ke pihak formal.</p>
            </div>
            <div className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Share2 size={28}/>
              </div>
              <h3 className="font-bold text-2xl text-slate-900 mb-3 tracking-tight">Kekuatan Relasi</h3>
              <p className="text-slate-500 leading-relaxed">Pengalaman sukses (dan gagal) kita adalah database paling mahal yang bisa membantu mereka menghindari kesalahan yang sama.</p>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-60 animate-pulse"></div>
            <div className="relative bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-2xl text-center">
              <Users size={80} className="mx-auto text-blue-600 mb-8" />
              <p className="text-3xl font-extrabold text-slate-900 italic leading-tight">"A small chat for you, a big leap for them."</p>
              <div className="mt-8 pt-8 border-t border-slate-100 text-slate-400 font-semibold tracking-widest uppercase text-xs">Mission Statement</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'solution',
      title: "Alur Eksekusi",
      subtitle: "How We Help",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 animate-fade-in">
          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 text-center flex flex-col items-center shadow-sm">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6">
              <MessageCircle size={32} />
            </div>
            <h3 className="font-black text-lg mb-2 uppercase tracking-tight">WA Community</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Ruang diskusi dinamis bagi alumni 2025 untuk drop info beasiswa, event, dan tips kampus secara rutin.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-10 rounded-[2.5rem] text-white text-center shadow-2xl transform md:scale-110 z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6">
              <Database size={32} />
            </div>
            <h3 className="font-black text-lg mb-2 uppercase tracking-tight">Master Database</h3>
            <p className="text-blue-100 text-sm leading-relaxed">Link G-Sheets terpusat di deskripsi grup. Katalog mentor berdasarkan kampus & jurusan untuk dicari angkatan 2026.</p>
          </div>
          <div className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 text-center flex flex-col items-center shadow-sm">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Users size={32} />
            </div>
            <h3 className="font-black text-lg mb-2 uppercase tracking-tight">Direct Mentoring</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Interaksi personal. Adik kelas bisa menghubungi mentor pilihan mereka langsung via WhatsApp.</p>
          </div>
        </div>
      )
    },
    {
      id: 'demo',
      title: "Database Live",
      subtitle: "Search Concept",
      content: (
        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-2xl mx-4 max-w-4xl md:mx-auto animate-fade-in">
          <div className="relative mb-8">
            <Search className="absolute left-5 top-4 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Cari kampus, jurusan, atau nama mentor..." 
              className="w-full pl-14 pr-6 py-4 rounded-2xl border border-slate-200 outline-none focus:ring-4 focus:ring-blue-100 transition-all font-medium text-slate-800 placeholder:text-slate-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="max-h-64 overflow-y-auto rounded-2xl border border-slate-50 custom-scrollbar">
            <table className="w-full text-left">
              <thead className="bg-slate-50 sticky top-0 z-20">
                <tr className="text-slate-400 uppercase text-[10px] font-black tracking-widest">
                  <th className="px-6 py-4">Mentor</th>
                  <th className="px-6 py-4">Kampus & Jalur</th>
                  <th className="px-6 py-4">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filteredMentors.length > 0 ? filteredMentors.map((m, i) => (
                  <tr key={i} className="hover:bg-blue-50/40 transition-colors">
                    <td className="px-6 py-5">
                      <div className="font-bold text-slate-900">{m.name}</div>
                      <div className="text-xs text-slate-400 font-medium">{m.major}</div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="inline-flex flex-col gap-1">
                        <span className="bg-blue-600 text-white px-3 py-0.5 rounded-lg text-[10px] font-bold w-fit">{m.university}</span>
                        <span className="text-[10px] font-bold text-slate-400 italic">{m.path}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <button className="flex items-center gap-1.5 text-green-600 font-bold text-xs hover:scale-110 transition-transform">
                        <MessageCircle size={14}/> CHAT
                      </button>
                    </td>
                  </tr>
                )) : (
                  <tr><td colSpan={3} className="px-6 py-12 text-center text-slate-400 font-medium">Data tidak ditemukan.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'faq',
      title: "Tanya Jawab",
      subtitle: "Project FAQ",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 animate-fade-in">
          <div className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><Bell size={20}/></div>
              <h4 className="font-bold text-slate-900 tracking-tight">Harus selalu aktif di grup?</h4>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed italic">"Jawabannya tidak. Keterlibatan di komunitas ini bersifat sukarela. Kamu bisa berbagi informasi kapan saja kamu memiliki waktu senggang."</p>
          </div>
          <div className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-green-50 text-green-600 rounded-xl"><MessageCircle size={20}/></div>
              <h4 className="font-bold text-slate-900 tracking-tight">Wajib jawab private chat?</h4>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">"Iya, sebagai mentor kita berkomitmen membantu. Namun, kamu bebas mengatur waktu balas. Akan ada <span className="font-bold text-slate-800 underline">SOP Chat</span> agar privasi tetap terjaga."</p>
          </div>
          <div className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-orange-50 text-orange-600 rounded-xl"><Calendar size={20}/></div>
              <h4 className="font-bold text-slate-900 tracking-tight">Berapa lama project berjalan?</h4>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">"Mulai segera setelah <span className="font-bold text-slate-800">Kampus Expo</span> selesai, dan akan berakhir ketika seluruh proses penerimaan mahasiswa baru tahun ajaran 2026/2027 selesai."</p>
          </div>
        </div>
      )
    },
    {
      id: 'closing',
      title: "Penutup",
      subtitle: "The Final Note",
      content: (
        <div className="text-center space-y-8 py-10 px-4 animate-fade-in">
          <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <Award size={56} />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tighter">
            Terima kasih sudah melihat <br /> Overview Project ini.
          </h2>
          <p className="text-lg md:text-xl text-slate-500 italic max-w-2xl mx-auto font-medium leading-relaxed">
            "Besar harapan saya agar kita, Angkatan 2025, bisa terus aktif dan solid. Mari kita buktikan bahwa kita adalah angkatan paling solid yang pernah ada di Hang Tuah."
          </p>
          <div className="pt-8">
            <div className="text-slate-300 text-[10px] font-black uppercase tracking-[0.4em] mb-2">Best Regards,</div>
            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-serif italic">Gheren</div>
          </div>
          <div className="pt-12">
            <a 
              href={FORMS_URL} 
              target="_blank" 
              rel="noreferrer"
              className="bg-blue-600 text-white px-12 py-6 rounded-[2rem] font-black text-2xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 inline-block hover:scale-105 active:scale-95"
            >
              GABUNG SEKARANG
            </a>
            <p className="mt-6 text-slate-300 font-bold text-xs uppercase tracking-widest">#SatuLangkahNyata #HangTuah2025</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Aesthetic */}
      <nav className="glass-nav sticky top-0 z-50 px-6 py-6 md:px-12 flex justify-between items-center border-b border-slate-100">
        <div 
          className="flex items-center gap-4 group cursor-pointer" 
          onClick={() => setCurrentSlide(0)}
        >
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl rotate-12 group-hover:rotate-0 transition-transform duration-500 flex items-center justify-center text-white shadow-xl">
              <span className="text-2xl font-black">A</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-slate-900 rounded-lg flex items-center justify-center text-[10px] text-white font-bold">MP</div>
          </div>
          <div className="flex flex-col">
            <span className="font-black text-lg md:text-xl leading-none tracking-tighter text-slate-900 uppercase">AMP <span className="text-blue-600 italic">25/26</span></span>
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-0.5">Alumni Mentorship Project</span>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Progress</span>
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <div 
                  key={i} 
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1 rounded-full transition-all cursor-pointer ${currentSlide === i ? 'bg-blue-600 w-8' : 'bg-slate-100 w-2 hover:bg-slate-200'}`} 
                />
              ))}
            </div>
          </div>
          <div className="text-xs font-black text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </nav>

      {/* Content Section */}
      <main className="flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full py-12 md:py-20">
        <div key={currentSlide} className="transition-all duration-500 ease-out">
          {currentSlide > 0 && (
            <div className="mb-8 px-6 md:px-4 animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-0.5 w-12 bg-blue-600"></div>
                <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em]">{slides[currentSlide].subtitle}</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-900">{slides[currentSlide].title}</h2>
            </div>
          )}
          {slides[currentSlide].content}
        </div>
      </main>

      {/* Professional Controls */}
      <footer className="px-6 md:px-12 py-10 flex justify-between items-center max-w-6xl mx-auto w-full">
        <button 
          onClick={() => setCurrentSlide(prev => prev - 1)}
          disabled={currentSlide === 0}
          className={`flex items-center gap-2 font-black text-xs uppercase tracking-widest transition-all px-6 py-3 rounded-xl border border-slate-100 ${currentSlide === 0 ? 'opacity-0 pointer-events-none' : 'text-slate-400 hover:text-slate-900 hover:bg-slate-50'}`}
        >
          <ChevronLeft size={18} /> Prev
        </button>
        
        <div className="text-[10px] font-black text-slate-200 uppercase tracking-widest hidden md:block italic">
          #HT25_SOLID_PROJECT
        </div>

        <button 
          onClick={() => setCurrentSlide(prev => prev + 1)}
          disabled={currentSlide === slides.length - 1}
          className={`flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-xl ${currentSlide === slides.length - 1 ? 'opacity-0 pointer-events-none' : 'hover:bg-blue-600 hover:scale-105 active:scale-95'}`}
        >
          Next <ChevronRight size={18} />
        </button>
      </footer>
    </div>
  );
};

export default App;
