// ===== Utilities =====
document.addEventListener('DOMContentLoaded', () => {
  // Footer year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Highlight active nav via body[data-page]
  const page = document.body.getAttribute('data-page');
  if (page) {
    document.querySelectorAll('.nav a.nav-pill').forEach(a => {
      const href = (a.getAttribute('href') || '').toLowerCase();
      if (href.includes(`${page}.html`)) a.classList.add('is-active');
    });
  }

  // Render blog cards only on blog page
  const list = document.getElementById('blog-list');
  if (!list) return;

  // ---- Data blog (contoh). Ganti title/desc bila perlu. ----
  // Jika nanti punya link artikel Medium spesifik, isikan ke 'url'
  const MEDIUM_PROFILE = 'https://medium.com/@khalif.umar.af';
  const blogPosts = [
    {
      date: '23 Nov 2025',
      title: 'Competition Participants Error',
      excerpt: 'Untuk temen-temen yang baru mau terjun ke dunia Kompetisi / Perlombaan ataupun temen-temen yang sudah lama masuk, menurutku ini cocok banget untuk kalian yang sering mengikuti lomba tapi jarang juara atau bahkan belum pernah juara.',
      url: 'https://medium.com/@khalif.umar.af/malas-mencoba-d90d04b13446',
      image: 'assets/img/p_cp.jpeg'
    },
    {
      date: '12 Feb 2025',
      title: 'Perbedaan Data Analysis, Data Scientist, dan Data Engineer?',
      excerpt: 'Kebanyakan orang mengira bahwa Data Analysis sama dengan Data Scientist. mungkin karena sama-sama mengotak-atik dan mengolah data. Lalu dimana letaknya Data Engineer? Yuk kita bahas lebih dalam…',
      url: 'https://medium.com/@khalif.umar.af/perbedaan-data-analysis-data-scientist-dan-data-engineer-56d797548c5d',
      image: 'assets/img/p_ds.png'
    },
    {
      date: '20 Feb 2025',
      title: 'Getting Started Data Analyst',
      excerpt: 'Beberapa saran langkah yang mungkin dapat pembaca ikuti untuk dapat bergabung menjadi pejuang seorang Data Analyst. ',
      url: 'https://medium.com/@khalif.umar.af/getting-started-data-analyst-c14fdf3b887e',
      image: 'assets/img/p_start.png'
    },
    {
      date: '20 Feb 2025',
      title: 'What is Data Analyst and Why Is It Super Important for you?',
      excerpt: 'Hey, aspiring data analysts! I’m super excited you’ve decided to join me on this awesome journey. Maybe right now you’re thinking, “Data analysis? What even is that? Is it really that important?',
      url: 'https://medium.com/@khalif.umar.af/what-is-data-analysis-and-why-is-it-super-important-for-you-600984fb32e3',
      image: 'assets/img/p_da.png'
    },
    {
      date: '24 Feb 2025',
      title: 'Basic Pythoon for Data Analyst',
      excerpt: 'Bukan Ular tetapi sama-sama bikin orang merinding. Bukan karena bahayanya tetapi karena manfaat kegunaanya.Perkenalkan ini Bahasa Python.',
      url: 'https://medium.com/@khalif.umar.af/basic-python-for-data-analyst-b142a08e3132',
      image: 'assets/img/p_python.png'
    },
    {
      date: '16 Nov 2024',
      title: 'Generasi AI ???',
      excerpt: 'Sadar gak sih, belakangan ini topik AI sedang booming di kalangan masyarakat? Kira-kira kenapa ya?',
      url: 'https://medium.com/@khalif.umar.af/generation-ai-6cbd98eed415',
      image: 'assets/img/p_ai.png'
    },
    {
      date: '08 Okt 2024',
      title: 'Mata Kuliah Mahasiswa Informatika',
      excerpt: 'Begitulah gambaran seorang calon programmer, calon desainer UI/UX, calon editor, calon Suami/Istri idaman, dan calon lainnya.',
      url: 'https://medium.com/@khalif.umar.af/mata-kuliah-mahasiswa-informatika-f5d9326f2e37',
      image: 'assets/img/p_mhw.jpeg'
    },
    {
      date: '20 Okt 2024',
      title: 'Organisasi Itu Tidak Berguna',
      excerpt: 'Dimulai ketika aku mendengar seorang motivator di salah satu platform media sosial. Dia sempat bilang “Heeehh… kamu para pemuda-pemuda Indonesia. Puasin hidup kamu dengan MENCOBA. Kenapa?',
      url: 'https://medium.com/@khalif.umar.af/organisasi-itu-tidak-berguna-da0d345a9ccd',
      image: 'assets/img/p_pnt.png'
    },
  ];

  // ---- Render ----
  const fragment = document.createDocumentFragment();

  blogPosts.forEach((post, idx) => {
    const card = document.createElement('article');
    card.className = 'blog-card';
    card.setAttribute('tabindex', '0');

    // Clickable overlay
    const link = document.createElement('a');
    link.className = 'card-link';
    link.href = post.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', `Buka artikel: ${post.title} (Medium)`);
    card.appendChild(link);

    // Left content
    const left = document.createElement('div');
    const meta = document.createElement('div');
    meta.className = 'blog-meta';
    meta.textContent = post.date;

    const title = document.createElement('h3');
    title.className = 'blog-title';
    title.textContent = post.title;

    const excerpt = document.createElement('p');
    excerpt.className = 'blog-excerpt';
    excerpt.textContent = post.excerpt;

    left.append(meta, title, excerpt);

    // Right image placeholder (as in design)
    const right = document.createElement('div');
    right.className = 'blog-thumb';

    if (post.image) {
      const img = document.createElement('img');
      img.src = post.image;
      img.alt = post.title;
      right.appendChild(img);
    } else {
      right.textContent = 'Foto';
    }


    card.append(left, right);

    // Keyboard accessibility
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        link.click();
      }
    });

    fragment.appendChild(card);
  });

  list.appendChild(fragment);
});
