"use client";

import type { NextPage } from 'next';
import Head from 'next/head';

// Helper component for Icons
const Icon = ({ path }: { path: string }) => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={path}></path>
  </svg>
);

const BookIcon = () => <Icon path="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />;
const StarIcon = ({ className }: { className?: string }) => (
    <svg className={`w-5 h-5 ${className}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
);


// --- Components ---

const Header = () => (
  <header className="bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-gray-200">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">
        Toko<span className="text-indigo-600">Kitab</span>
      </h1>
      <nav className="hidden md:flex space-x-8">
        <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Fitur</a>
        <a href="#bestsellers" className="text-gray-600 hover:text-indigo-600 transition-colors">Buku Terlaris</a>
        <a href="#testimonials" className="text-gray-600 hover:text-indigo-600 transition-colors">Testimoni</a>
      </nav>
      <a href="#cta" className="hidden md:block bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition-transform duration-300 ease-in-out hover:scale-105">
        Hubungi Kami
      </a>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-28">
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Marketing Books"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
    <div className="container mx-auto px-6 text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
        Gerbang Anda Menuju Dunia Pemasaran
      </h2>
      <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
        Temukan koleksi buku marketing terlengkap, dari strategi klasik hingga taktik digital modern, untuk membawa bisnis Anda ke level selanjutnya.
      </p>
      <a href="#bestsellers" className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg">
        Lihat Koleksi Buku
      </a>
    </div>
  </section>
);

const FeatureCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
    <div className="text-indigo-500 mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);

const Features = () => (
  <section id="features" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Mengapa Memilih Kami?</h2>
        <p className="text-lg text-gray-600 mt-2">Keunggulan yang kami tawarkan untuk kesuksesan Anda.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard icon={<Icon path="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />} title="Koleksi Terlengkap">
          Dari 'Kotler' hingga 'Ogilvy', kami memiliki semua buku marketing yang Anda butuhkan.
        </FeatureCard>
        <FeatureCard icon={<Icon path="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />} title="Harga Kompetitif">
          Dapatkan pengetahuan berharga dengan investasi terbaik. Harga jujur, tanpa biaya tersembunyi.
        </FeatureCard>
        <FeatureCard icon={<Icon path="M8 16.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM16 16.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />} title="Pengiriman Cepat & Aman">
          Buku Anda akan tiba di depan pintu dengan cepat dan dalam kondisi sempurna, siap dibaca.
        </FeatureCard>
      </div>
    </div>
  </section>
);

const BookCard = ({ title, author, color }: { title: string, author: string, color: string }) => (
  <div className="group">
    <div className={`aspect-[3/4] ${color} rounded-lg flex items-center justify-center p-4 shadow-md group-hover:shadow-xl transition-shadow duration-300`}>
      <div className="text-center text-white transform group-hover:scale-105 transition-transform duration-300">
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="text-sm opacity-80">{author}</p>
      </div>
    </div>
    <h3 className="mt-4 text-lg font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-500">{author}</p>
  </div>
);

const BestSellers = () => (
  <section id="bestsellers" className="py-20">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Buku Terlaris Pilihan</h2>
        <p className="text-lg text-gray-600 mt-2">Judul-judul yang paling banyak dicari oleh para profesional.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <BookCard title="Marketing 5.0" author="Philip Kotler" color="bg-sky-600" />
        <BookCard title="Influence" author="Robert Cialdini" color="bg-rose-600" />
        <BookCard title="Hooked" author="Nir Eyal" color="bg-amber-500" />
        <BookCard title="Building a StoryBrand" author="Donald Miller" color="bg-teal-600" />
      </div>
    </div>
  </section>
);

const TestimonialCard = ({ quote, name, role, avatar }: { quote: string, name: string, role: string, avatar: string }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg">
    <div className="flex items-center mb-4">
      <img className="w-14 h-14 rounded-full object-cover mr-4" src={avatar} alt={name} />
      <div>
        <p className="font-bold text-gray-800">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
    <div className="flex mb-4">
        <StarIcon className="text-yellow-400" />
        <StarIcon className="text-yellow-400" />
        <StarIcon className="text-yellow-400" />
        <StarIcon className="text-yellow-400" />
        <StarIcon className="text-yellow-400" />
    </div>
    <p className="text-gray-600 italic">"{quote}"</p>
  </div>
);

const Testimonials = () => (
  <section id="testimonials" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Apa Kata Mereka?</h2>
        <p className="text-lg text-gray-600 mt-2">Kisah sukses dari para pelanggan setia kami.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <TestimonialCard
          quote="Koleksinya luar biasa lengkap! Saya menemukan buku-buku langka yang tidak ada di tempat lain. Sangat membantu riset marketing saya."
          name="Andi Wijaya"
          role="Marketing Manager, TechCorp"
          avatar="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
        <TestimonialCard
          quote="Pengiriman super cepat dan packingnya aman banget. Bukunya sampai dalam kondisi mulus. TokoKitab jadi andalan saya sekarang."
          name="Siti Aminah"
          role="Founder, Creative Agency"
          avatar="https://i.pravatar.cc/150?u=a042581f4e29026705d"
        />
      </div>
    </div>
  </section>
);

const Cta = () => (
  <section id="cta" className="py-20 bg-indigo-700">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Siap Meningkatkan Skill Marketing Anda?
      </h2>
      <p className="text-lg text-indigo-200 max-w-2xl mx-auto mb-8">
        Jangan tunda kesuksesan Anda. Jelajahi koleksi kami sekarang dan temukan buku yang akan mengubah cara Anda berpikir tentang pemasaran.
      </p>
      <a href="#bestsellers" className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg">
        Mulai Belanja Sekarang
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-12">
    <div className="container mx-auto px-6 text-center">
      <h3 className="text-xl font-bold">Toko<span className="text-indigo-400">Kitab</span></h3>
      <div className="flex justify-center space-x-6 my-6">
        <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
      </div>
      <p className="text-gray-500">&copy; 2025 TokoKitab. Semua Hak Cipta Dilindungi.</p>
    </div>
  </footer>
);


const Page: NextPage = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>TokoKitab Marketing - Pusat Buku Pemasaran Terlengkap</title>
        <meta name="description" content="Temukan buku-buku marketing terbaik dari penulis ternama dunia. Strategi, taktik, dan wawasan untuk meningkatkan bisnis Anda." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main>
        <Hero />
        <Features />
        <BestSellers />
        <Testimonials />
        <Cta />
      </main>

      <Footer />
    </div>
  );
};

export default Page;