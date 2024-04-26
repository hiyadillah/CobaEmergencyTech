import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Article } from '../../interfaces/article';
import { Contact } from '../../interfaces/contact';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  articles: Article[] = [
    {
      id: '',
      title: "Tips Memadamkan Api Besar",
      body: "Panci berisi minyak mendidih yang sedang terbakar sangat sulit untuk dipadamkan. Air, yang biasa kita gunakan untuk memadamkan api ...",
      link: "article/big-fire",
      icon: "bi bi-wind",
      imgPath: '',
      imgSource: '',
      imgWebSource: '',
    },
    {
      id: '',
      title: "Tips Keluar dari Bangunan",
      body: "Pastikan untuk mencari lokasi pintu darurat sebagai jalur evakuasi pertama. Biasanya, saat terjadi kebakaran lift dan jaringan listrik tidak akan berfungsi ...",
      link: "article/building",
      icon: "bi bi-building",
      imgPath: '',
      imgSource: '',
      imgWebSource: '',
    },
    {
      id: '',
      title: "Tips Keluar dari Api Kecil",
      body: "Menebarkan soda kue ke api mampu memadamkannya karena soda kue mengeluarkan karbondioksida. Tindakan ini dapat dilakukan apabila api masih kecil ...",
      link: "article/small-fire",
      icon: "bi bi-fire",
      imgPath: '',
      imgSource: '',
      imgWebSource: '',
    },
    {
      id: '',
      title: "Tips Memadamkan LPG Bocor",
      body: "Sebagai langkah pencegahan, selalu siapkan alat pemadam kebakaran. Ada banyak jenis alat pemadamkebakaran, tetapi yang paling umum adalah ...",
      link: "article/lpg",
      icon: "bi bi-fuel-pump",
      imgPath: '',
      imgSource: '',
      imgWebSource: '',
    },
    {
      id: '',
      title: "Jenis Jenis Apar (Alat Pemadam Kebakaran)",
      body: "Berdasarkan Bahan pemadam api yang digunakan, APAR (Alat Pemadam Api Ringan) dapat digolongkan menjadi beberapa Jenis. ...",
      link: "article/apar",
      icon: "bi bi-shield-shaded",
      imgPath: '',
      imgSource: '',
      imgWebSource: '',
    },
  ]
  contacts: Contact[] = [
    { title: "Pemadam Kebakaran", body: "Hubungi pemadam kebakaran pada nomor berikut", no1: "113", no2: "1131", icon: "assets/bombe.jpg" },
    { title: "Ambulan", body: "Jika ada korban selamat Hubungi ambulan pada nomor berikut", no1: "118", no2: "119", icon: "assets/ambulance.jpeg" },
    { title: "Polisi", body: "Hubungi polisi pada nomor berikut ", no1: "110", no2: "", icon: "assets/police.jpg" },
  ]
  isOnArticle = false
}
