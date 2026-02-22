// script.js - Navigasi Utama, Header, Banner, dan Footer SAJA

// ==================== DATA NAVIGASI ====================
const navItems = [
    { name: 'Halaman Utama', url: 'index.html', target: '_self' },
    { name: 'Tentang Kami', url: 'tentangkami.html', target: '_self' },
    { name: 'MTsN 2 Kota Bandung', url: 'https://mtsn2kotabandung.sch.id', target: '_blank' }
];

// ==================== DATA FOOTER ====================
const footerData = {
    about: {
        title: 'OLIMPIKA MTsN 2 Bandung',
        description: 'Media Pembelajaran Olimpiade Interaktif',
        teachers: [
            'Hani Kartini, S.Pd.',
            'Dra. Aan Nurjanah',
            'Dra. Salmah S.Y',
            'Siti Cahya, S.Pd.',
            'Aan Nurlina, S.Pd.'
        ]
    },
    contact: {
        title: 'Kontak Pengembang Website OLIMPIKA',
        phone: '082318230186',
        email: 'hani.kartini16@gmail.com',
        telp: '(022) 7274275',
        social: [
            { platform: 'Facebook', username: '@honeyrukawa', icon: '📘', url: 'https://facebook.com/honeyrukawa' },
            { platform: 'Instagram', username: '@hani_bundafariz', icon: '📷', url: 'https://instagram.com/hani_bundafariz' },
            { platform: 'YouTube', username: 'OLIMPIKA YT', icon: '▶️', url: 'https://youtube.com/@olimpikayt' }
        ]
    }
};

// ==================== FUNGSI MEMBUAT HEADER ====================
function createHeader() {
    const header = document.createElement('header');
    header.className = 'site-header';
    
    // Banner
    const banner = document.createElement('div');
    banner.className = 'banner';
    banner.innerHTML = `
        <div class="banner-content">
            <h1>OLIMPIKA - MTsN 2 Kota Bandung</h1>
            <p class="subtitle">Media Pembelajaran Olimpiade Matematika Interaktif untuk siswa MTsN 2 Kota Bandung</p>
        </div>
    `;
    
    // Navigasi
    const nav = document.createElement('nav');
    nav.className = 'main-nav';
    const ul = document.createElement('ul');
    
    navItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.url;
        a.textContent = item.name;
        if (item.target === '_blank') {
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
        }
        li.appendChild(a);
        ul.appendChild(li);
    });
    
    nav.appendChild(ul);
    header.appendChild(banner);
    header.appendChild(nav);
    
    return header;
}

// ==================== FUNGSI MEMBUAT FOOTER (2 KOLOM) ====================
function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.style.cssText = `
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        max-width: 1200px;
        margin: 4rem auto 0;
        padding: 3rem 2rem 1rem;
        background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
        color: var(--white);
        position: relative;
        overflow: hidden;
    `;
    
    // Kolom Kiri - About Section
    const aboutSection = document.createElement('div');
    aboutSection.className = 'footer-section about';
    aboutSection.style.cssText = `
        text-align: left;
        padding-right: 1rem;
    `;
    
    let teachersList = '';
    footerData.about.teachers.forEach(teacher => {
        teachersList += `<li style="margin-bottom: 0.3rem;">${teacher}</li>`;
    });
    
    aboutSection.innerHTML = `
        <h3 style="font-size: 1.3rem; margin-bottom: 1.2rem; position: relative; display: inline-block;">
            ${footerData.about.title}
            <span style="content: ''; position: absolute; bottom: -5px; left: 0; width: 50px; height: 2px; background: #e67e22;"></span>
        </h3>
        <p style="margin-bottom: 1rem; opacity: 0.9;">${footerData.about.description}</p>
        <h4 style="font-size: 1rem; margin: 1rem 0 0.5rem; color: #f1c40f;">Guru Pembimbing:</h4>
        <ul style="list-style-type: disc; padding-left: 1.2rem; margin: 0.5rem 0;">
            ${teachersList}
        </ul>
    `;
    
    // Kolom Kanan - Contact Section
    const contactSection = document.createElement('div');
    contactSection.className = 'footer-section contact';
    contactSection.style.cssText = `
        text-align: left;
        padding-left: 1rem;
    `;
    
    // Social media with icons
    let socialHTML = '';
    footerData.contact.social.forEach(social => {
        socialHTML += `<a href="${social.url}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; justify-content: center; width: 45px; height: 45px; background: rgba(255,255,255,0.1); border-radius: 50%; font-size: 1.5rem; transition: all 0.3s ease; color: var(--white); text-decoration: none; margin-right: 0.5rem;" title="${social.platform} ${social.username}">${social.icon}</a>`;
    });
    
    contactSection.innerHTML = `
        <h3 style="font-size: 1.3rem; margin-bottom: 1.2rem; position: relative; display: inline-block;">
            ${footerData.contact.title}
            <span style="content: ''; position: absolute; bottom: -5px; left: 0; width: 50px; height: 2px; background: #e67e22;"></span>
        </h3>
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
            <p style="display: flex; align-items: center; gap: 0.5rem; margin: 0;">
                <span style="font-size: 1.2rem; min-width: 25px;">📱</span>
                <a href="https://wa.me/${footerData.contact.phone}" target="_blank" style="color: var(--white); text-decoration: none; opacity: 0.9;">${footerData.contact.phone}</a>
            </p>
            <p style="display: flex; align-items: center; gap: 0.5rem; margin: 0;">
                <span style="font-size: 1.2rem; min-width: 25px;">📧</span>
                <a href="mailto:${footerData.contact.email}" style="color: var(--white); text-decoration: none; opacity: 0.9;">${footerData.contact.email}</a>
            </p>
            <p style="display: flex; align-items: center; gap: 0.5rem; margin: 0;">
                <span style="font-size: 1.2rem; min-width: 25px;">☎️</span>
                <a href="tel:${footerData.contact.telp.replace(/\D/g,'')}" style="color: var(--white); text-decoration: none; opacity: 0.9;">${footerData.contact.telp}</a>
            </p>
        </div>
        <div style="margin-top: 1.5rem;">
            <h4 style="color: #f1c40f; margin-bottom: 0.8rem; font-size: 1rem;">SOSIAL MEDIA</h4>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                ${socialHTML}
            </div>
        </div>
    `;
    
    // Copyright full width
    const copyright = document.createElement('div');
    copyright.style.cssText = `
        grid-column: 1 / -1;
        text-align: center;
        padding-top: 2rem;
        margin-top: 2rem;
        border-top: 1px solid rgba(255,255,255,0.1);
        font-size: 0.9rem;
        opacity: 0.8;
    `;
    copyright.innerHTML = `&copy; ${new Date().getFullYear()} OLIMPIKA - MTsN 2 Kota Bandung. All rights reserved.`;
    
    footer.appendChild(aboutSection);
    footer.appendChild(contactSection);
    footer.appendChild(copyright);
    
    return footer;
}

// ==================== INISIALISASI SAAT HALAMAN DIMUAT ====================
document.addEventListener('DOMContentLoaded', function() {
    // Header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.appendChild(createHeader());
        
        // Sticky navigation handling
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('.main-nav');
            const banner = document.querySelector('.banner');
            if (nav && banner) {
                const bannerBottom = banner.offsetTop + banner.offsetHeight;
                if (window.scrollY > bannerBottom - nav.offsetHeight) {
                    nav.classList.add('sticky');
                } else {
                    nav.classList.remove('sticky');
                }
            }
        });
    }
    
    // Footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.appendChild(createFooter());
    }
});