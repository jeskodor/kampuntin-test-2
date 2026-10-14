// Maikiuants · Kampuntin – kleine Helfer. Die Seite funktioniert auch ohne JavaScript.
document.addEventListener('DOMContentLoaded', () => {
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  // --- Mobiles Menü -----------------------------------------------------
  const burger = $('.burger');
  if (burger) {
    const setOpen = (open) => {
      burger.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('nav-open', open);
    };
    burger.addEventListener('click', () => setOpen(burger.getAttribute('aria-expanded') !== 'true'));
    $('#site-nav').addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') { setOpen(false); burger.focus(); }
    });
  }

  // --- Lightbox für Fotos -------------------------------------------------
  const lightbox = $('#lightbox');
  if (lightbox && typeof lightbox.showModal === 'function') {
    const img = $('img', lightbox);
    const caption = $('figcaption', lightbox);
    let list = [];
    let index = 0;
    const show = (i) => {
      index = (i + list.length) % list.length;
      const link = list[index];
      img.src = link.href;
      img.alt = link.dataset.caption || '';
      caption.textContent = link.dataset.caption || '';
    };
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[data-lightbox]');
      if (!link) return;
      e.preventDefault();
      list = $$('a[data-lightbox]').filter((a) => !a.closest('[hidden]'));
      show(list.indexOf(link));
      lightbox.showModal();
    });
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.closest('[data-close]')) lightbox.close();
      else if (e.target.closest('[data-prev]')) show(index - 1);
      else if (e.target.closest('[data-next]')) show(index + 1);
    });
    lightbox.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') show(index - 1);
      if (e.key === 'ArrowRight') show(index + 1);
    });
  }

  // --- Einbettungen erst nach Klick laden (Datenschutz) -------------------
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-embed]');
    if (!btn) return;
    const box = btn.closest('.embed');
    const src = btn.dataset.src;
    if (btn.dataset.embed === 'instagram') {
      const quote = document.createElement('blockquote');
      quote.className = 'instagram-media';
      quote.setAttribute('data-instgrm-permalink', src);
      quote.setAttribute('data-instgrm-version', '14');
      box.replaceChildren(quote);
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      } else {
        const script = document.createElement('script');
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        document.body.append(script);
      }
    } else {
      const frame = document.createElement('iframe');
      frame.src = src;
      frame.title = btn.dataset.title || '';
      frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      frame.allowFullscreen = true;
      box.replaceChildren(frame);
    }
    box.classList.add('loaded');
  });

  // --- Kontaktformular ----------------------------------------------------
  const form = $('#contact-form');
  if (form) {
    // Thema aus dem Link übernehmen, z. B. /contacto/?tema=voluntariado
    const topic = new URLSearchParams(location.search).get('tema');
    const select = $('select[name="topic"]', form);
    if (topic && select && $$('option', select).some((o) => o.value === topic)) select.value = topic;

    // Ohne Formular-Dienst: Nachricht im E-Mail-Programm öffnen
    if (form.dataset.mailto) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!form.reportValidity()) return;
        const data = new FormData(form);
        const topicLabel = select ? select.options[select.selectedIndex].text : '';
        const subject = `${topicLabel} – ${data.get('name')}`;
        const lines = [data.get('message'), '', `${data.get('name')} <${data.get('email')}>`];
        if (data.get('dates')) lines.push(`${$('label[for="f-dates"]', form).textContent}: ${data.get('dates')}`);
        location.href = `mailto:${form.dataset.mailto}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
        const status = $('.form__status', form);
        status.textContent = status.dataset.sent;
      });
    }
  }
});
