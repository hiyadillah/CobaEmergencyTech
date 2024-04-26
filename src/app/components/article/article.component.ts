import { Component, OnInit } from '@angular/core';
import { BigFireComponent } from '../big-fire/big-fire.component';
import { SmallFireComponent } from '../small-fire/small-fire.component';
import { AparComponent } from '../apar/apar.component';
import { LPGComponent } from '../lpg/lpg.component';
import { BuildingComponent } from '../building/building.component';
import { ActivatedRoute } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { log } from 'console';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Article } from '../../interfaces/article';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    BigFireComponent,
    SmallFireComponent,
    AparComponent,
    LPGComponent,
    BuildingComponent,
    NotFoundComponent,
    CommonModule,
    NgOptimizedImage,
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {
  path: string = 'not-found'
  posts: Article[] = [
    {
      id: 'big-fire',
      title: "Tips Memadamkan Api Besar",
      body: "Panci berisi minyak mendidih yang sedang terbakar sangat sulit untuk dipadamkan. Air, yang biasa kita gunakan untuk memadamkan api ...",
      link: "article/big-fire",
      icon: "bi bi-wind",
      imgPath: 'assets/apiBesar.png',
      imgSource: 'https://www.popmama.com/big-kid/10-12-years-old/verina-intan-l/bahaya-menyiram-air-ke-minyak-terbakar-dan-solusi-mengatasinya',
      imgWebSource: 'popmama',
    },
    {
      id: 'building',
      title: "Tips Keluar dari Bangunan",
      body: "Pastikan untuk mencari lokasi pintu darurat sebagai jalur evakuasi pertama. Biasanya, saat terjadi kebakaran lift dan jaringan listrik tidak akan berfungsi ...",
      link: "article/building",
      icon: "bi bi-building",
      imgPath: 'assets/gedungKebakaran.jpg',
      imgSource: 'https://kalbar.antaranews.com/rilis-pers/3226949/kebakaran-gedung-bappelitbang-pemkot-bandung',
      imgWebSource: 'antara news',
    },
    {
      id: 'small-fire',
      title: "Tips Keluar dari Api Kecil",
      body: "Menebarkan soda kue ke api mampu memadamkannya karena soda kue mengeluarkan karbondioksida. Tindakan ini dapat dilakukan apabila api masih kecil ...",
      link: "article/small-fire",
      icon: "bi bi-fire",
      imgPath: 'assets/apiKecil.jpg',
      imgSource: 'https://firecek.com/mengapa-co2-dapat-memadamkan-api/',
      imgWebSource: 'firecek',
    },
    {
      id: 'lpg',
      title: "Tips Memadamkan LPG Bocor",
      body: "Sebagai langkah pencegahan, selalu siapkan alat pemadam kebakaran. Ada banyak jenis alat pemadamkebakaran, tetapi yang paling umum adalah ...",
      link: "article/lpg",
      icon: "bi bi-fuel-pump",
      imgPath: 'assets/lpg.png',
      imgSource: 'https://kimbo.id/berbagi-inspirasi/cara-ampuh-memadamkan-kebakaran-akibat-gas-lpg',
      imgWebSource: 'kimbo',
    },
    {
      id: 'apar',
      title: "Jenis Jenis Apar (Alat Pemadam Kebakaran)",
      body: "Berdasarkan Bahan pemadam api yang digunakan, APAR (Alat Pemadam Api Ringan) dapat digolongkan menjadi beberapa Jenis. ...",
      link: "article/apar",
      icon: "bi bi-shield-shaded",
      imgPath: 'assets/apar.jpg',
      imgSource: 'https://kafeilmu.com/sebutkan-dan-jelaskan-jenis-jenis-apar/',
      imgWebSource: 'kafe ilmu',
    },
  ]
  post = {} as Article

  constructor(private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.path = this.route.snapshot.params['post']
    this.post = this.posts.filter(value => value.id == this.path)[0];
  }
}
