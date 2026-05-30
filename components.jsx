// components.jsx — shared chrome: nav, footer, cloud corners, icons, buttons
// Shared by all pages of the Mapa Solidário site.

const { useState, useEffect, useRef } = React;

// ---------- Brand data ----------
const CAUSES = [
  { id: 'cultura',       label: 'Cultura',        color: '#db4347', illus: null },
  { id: 'idosos',        label: 'Idosos',         color: '#12467a', illus: null },
  { id: 'animais',       label: 'Animais',        color: '#96c226', illus: 'assets/destaque-animais.png' },
  { id: 'saude',         label: 'Saúde',          color: '#01a157', illus: null },
  { id: 'educacao',      label: 'Educação',       color: '#795a9f', illus: 'assets/destaque-educacao.png' },
  { id: 'criancas',      label: 'Crianças',       color: '#f4bb31', illus: 'assets/destaque-criancas.png' },
  { id: 'meio-ambiente', label: 'Meio Ambiente',  color: '#2b6a4a', illus: null },
];

// Top-level navigation items — kept short on purpose (4 pages + cadastro CTA)
const NAV = [
  { id: 'home',     label: 'Início' },
  { id: 'sobre',    label: 'Sobre' },
  { id: 'ongs',     label: 'ONGs' },
  { id: 'contato',  label: 'Contato' },
];

// ---------- Icons (small SVG set, stroke 1.6) ----------
const Icon = {
  search:  (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" {...p}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>,
  arrow:   (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" {...p}><path d="M5 12h14M13 5l7 7-7 7"/></svg>,
  heart:   (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" {...p}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  insta:   (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" {...p}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>,
  pin:     (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  burger:  (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="22" height="22" {...p}><path d="M4 7h16M4 12h16M4 17h16"/></svg>,
  close:   (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="22" height="22" {...p}><path d="M6 6l12 12M18 6L6 18"/></svg>,
  check:   (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="36" height="36" {...p}><path d="M5 13l5 5L20 7"/></svg>,
  chev:    (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" {...p}><path d="M9 6l6 6-6 6"/></svg>,
  whats:   (p) => <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" {...p}><path d="M20.5 3.4A11.6 11.6 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.5 4.1 1.6 5.9L0 24l6.3-1.7a11.9 11.9 0 0 0 5.7 1.5c6.6 0 12-5.4 12-12a11.9 11.9 0 0 0-3.5-8.4zM12 21.8c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.9 9.9 0 0 1-1.5-5.3c0-5.5 4.5-9.9 9.9-9.9 2.7 0 5.1 1 7 2.9 1.9 1.9 2.9 4.4 2.9 7 0 5.5-4.4 9.9-9.9 9.9zm5.4-7.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.1 0 1.3.9 2.5 1.1 2.7.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3z"/></svg>,
  mail:    (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>,
  send:    (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" {...p}><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>,
};

// ---------- Cloud-petal corner (brand signature) ----------
// 5–6 lobe chubby cloud. Mirrors brand pattern from manual.
function CloudCorner({ position = 'tl', fill = '#fff', size = 180, style }) {
  // position: tl, tr, bl, br
  const wrap = {
    position: 'absolute',
    width: size, height: size,
    pointerEvents: 'none',
    color: fill,
  };
  const off = -size * 0.25;
  if (position === 'tl') { wrap.top = off; wrap.left = off; wrap.transform = 'rotate(0deg)'; }
  if (position === 'tr') { wrap.top = off; wrap.right = off; wrap.transform = 'rotate(90deg)'; }
  if (position === 'br') { wrap.bottom = off; wrap.right = off; wrap.transform = 'rotate(180deg)'; }
  if (position === 'bl') { wrap.bottom = off; wrap.left = off; wrap.transform = 'rotate(270deg)'; }
  return (
    <div style={{ ...wrap, ...style }} aria-hidden="true">
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <path fill={fill} d="M22 8 C36 -4, 54 2, 56 18 C70 14, 82 22, 80 36 C94 38, 100 54, 88 64 C92 78, 80 92, 64 86 C56 100, 36 96, 32 82 C16 86, 4 74, 10 58 C-4 50, 0 32, 14 28 C12 14, 14 8, 22 8 Z" />
      </svg>
    </div>
  );
}

// ---------- Decorative star sprinkles ----------
function Stars({ count = 12, color = 'rgba(255,255,255,0.35)' }) {
  // Deterministic pseudo-random scatter
  const items = [];
  for (let i = 0; i < count; i++) {
    const seed = (i * 9301 + 49297) % 233280;
    const r = seed / 233280;
    const r2 = ((i + 7) * 19349663) % 100 / 100;
    const r3 = ((i + 13) * 73856093) % 100 / 100;
    const x = (r * 100).toFixed(1);
    const y = (r2 * 100).toFixed(1);
    const s = 8 + r3 * 12;
    items.push(
      <svg key={i} viewBox="0 0 24 24" style={{
        position: 'absolute', left: `${x}%`, top: `${y}%`,
        width: s, height: s, color, opacity: 0.5 + r3 * 0.4,
      }}>
        <path fill="currentColor" d="M12 2l2.2 7.6L22 12l-7.8 2.4L12 22l-2.2-7.6L2 12l7.8-2.4z"/>
      </svg>
    );
  }
  return <div className="stars" aria-hidden="true">{items}</div>;
}

// ---------- Top navigation bar ----------
function TopNav({ page, navigate }) {
  const [sheet, setSheet] = useState(false);
  useEffect(() => {
    if (sheet) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [sheet]);

  const go = (id) => { setSheet(false); navigate(id); };

  return (
    <React.Fragment>
    <header className="nav">
      <div className="nav-inner">
        <a className="nav-logo" href="#home" onClick={(e) => { e.preventDefault(); go('home'); }}>
          <img src="assets/logo-principal.png" alt="Mapa Solidário JP" />
        </a>
        <nav className="nav-links" aria-label="Principal">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`}
               className={'nav-link ' + (page === n.id ? 'is-active' : '')}
               onClick={(e) => { e.preventDefault(); go(n.id); }}>
              {n.label}
            </a>
          ))}
        </nav>
        <button className="nav-cta" onClick={() => go('cadastrar')}>
          Cadastre sua ONG <Icon.arrow width="14" height="14"/>
        </button>
        <button className="nav-burger" aria-label="Abrir menu" onClick={() => setSheet(true)}>
          <Icon.burger/>
        </button>
      </div>
    </header>

      <div className={'nav-sheet ' + (sheet ? 'is-open' : '')}>
        <div className="nav-sheet-head">
          <img src="assets/logo-principal.png" alt="Mapa Solidário JP" style={{ height: 32 }}/>
          <button className="nav-burger" aria-label="Fechar menu" onClick={() => setSheet(false)}>
            <Icon.close/>
          </button>
        </div>
        {NAV.map((n) => (
          <a key={n.id} href={`#${n.id}`} className="nav-sheet-link"
             onClick={(e) => { e.preventDefault(); go(n.id); }}>
            <span><span className="accent">·</span> {n.label}</span>
            <Icon.chev/>
          </a>
        ))}
        <a href="#cadastrar" className="nav-sheet-link"
           onClick={(e) => { e.preventDefault(); go('cadastrar'); }}>
          <span><span className="accent">·</span> Cadastrar ONG</span>
          <Icon.chev/>
        </a>
        <div className="nav-sheet-foot">
          <span className="ig">@mapasolidariojp · João Pessoa, PB</span>
          <button className="btn btn-primary" onClick={() => go('cadastrar')}>
            Cadastre sua ONG <Icon.arrow/>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

// ---------- Footer ----------
function Footer({ navigate }) {
  return (
    <footer className="footer">
      <CloudCorner position="tl" size={260} fill="rgba(255,255,255,0.04)"/>
      <CloudCorner position="br" size={260} fill="rgba(255,255,255,0.04)"/>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="display-mark">
              Mapa<br/>Solid<span className="h">♥</span>rio<span style={{ fontSize: 18, marginLeft: 4 }}>JP</span>
            </div>
            <p>
              Um hub de conexão social que organiza, amplifica e conecta o trabalho de ONGs e projetos sociais em João Pessoa, Paraíba.
            </p>
            <div style={{ marginTop: 18, display: 'flex', gap: 8 }}>
              <a href="https://instagram.com/mapasolidariojp" target="_blank" rel="noreferrer"
                 style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 14px',
                          background: 'rgba(255,255,255,0.08)', borderRadius: 999, fontSize: 13 }}>
                <Icon.insta/> @mapasolidariojp
              </a>
            </div>
          </div>
          <div>
            <h4>O projeto</h4>
            <div className="footer-links">
              <a href="#home" onClick={(e) => { e.preventDefault(); navigate('home'); }}>Início</a>
              <a href="#sobre" onClick={(e) => { e.preventDefault(); navigate('sobre'); }}>Sobre / Manifesto</a>
              <a href="#ongs" onClick={(e) => { e.preventDefault(); navigate('ongs'); }}>Catálogo de ONGs</a>
              <a href="#cadastrar" onClick={(e) => { e.preventDefault(); navigate('cadastrar'); }}>Cadastrar ONG</a>
              <a href="#contato" onClick={(e) => { e.preventDefault(); navigate('contato'); }}>Contato</a>
            </div>
          </div>
          <div>
            <h4>Causas</h4>
            <div className="footer-links">
              {CAUSES.map((c) => (
                <a key={c.id} href="#ongs"
                   onClick={(e) => { e.preventDefault(); navigate('ongs', { causa: c.id }); }}>
                  <span style={{ display: 'inline-block', width: 9, height: 9, borderRadius: 999, background: c.color, marginRight: 8, verticalAlign: 1 }}></span>
                  {c.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-foot">
          <span>© 2026 Mapa Solidário JP · João Pessoa, Paraíba</span>
          <span>Feito com <span style={{ color: '#db4347' }}>♥</span> por quem acredita que ajudar sempre é o melhor caminho.</span>
        </div>
      </div>
    </footer>
  );
}

// ---------- Verb card (Organiza · Amplifica · Conecta) ----------
function VerbCard({ num, verb, body, color }) {
  return (
    <div className={'verb'}>
      <div className="num">{num}</div>
      <h3 style={{ color }}>{verb}</h3>
      <p>{body}</p>
    </div>
  );
}

// ---------- Causa card (used on home grid) ----------
function CausaCard({ cause, onClick }) {
  return (
    <button className="causa-card" style={{ background: cause.color, border: 0, padding: 0 }}
            onClick={onClick} aria-label={cause.label}>
      {cause.illus ? (
        <div className="illus">
          <img src={cause.illus} alt="" loading="lazy"/>
        </div>
      ) : (
        <div className="illus is-letter" aria-hidden="true">
          <span>{cause.label.charAt(0)}</span>
        </div>
      )}
      <CloudCorner position="tl" size={70} fill="rgba(255,255,255,0.85)"/>
      <CloudCorner position="br" size={70} fill="rgba(255,255,255,0.85)"/>
      <div className="label">
        <span>{cause.label}</span>
        <span className="pill"><Icon.arrow width="14" height="14"/></span>
      </div>
    </button>
  );
}

// ---------- Causa locked card (for the 2 unconfirmed categories) ----------
function CausaLocked() {
  return (
    <div className="causa-card is-locked">
      <div className="lock-content">+ ?</div>
      <div className="label">
        <span style={{ fontSize: 14, fontFamily: 'var(--font-text)', color: 'var(--ms-ink-mute)' }}>
          em breve
        </span>
      </div>
    </div>
  );
}

// ---------- ONG card ----------
function OngCard({ ong, onClick }) {
  const cause = CAUSES.find(c => c.id === ong.causa) || CAUSES[0];
  return (
    <article className="ong" onClick={onClick}>
      <div className="ong-img">
        <div className="photo" style={{
          background: cause.color,
          backgroundImage: ong.photo ? `linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.15) 100%), url(${ong.photo})` : undefined,
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}>
          {!ong.photo && (
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {cause.illus ? (
                <img src={cause.illus} alt="" style={{ width: '78%', height: '90%', objectFit: 'contain', objectPosition: 'center' }}/>
              ) : (
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(80px, 14vw, 140px)',
                  color: 'rgba(255,255,255,0.92)',
                  lineHeight: 1,
                }}>{cause.label.charAt(0)}</span>
              )}
            </div>
          )}
        </div>
        <span className="tag"><span className="dot" style={{ background: cause.color }}></span>{cause.label}</span>
      </div>
      <div className="ong-body">
        <h3>{ong.name}</h3>
        <div className="meta"><Icon.pin/> João Pessoa, PB</div>
        <p className="desc">{ong.short}</p>
        <div className="foot">
          <span className="handle">@{ong.handle}</span>
          <span className="go">ver projeto <Icon.arrow width="14" height="14"/></span>
        </div>
      </div>
    </article>
  );
}

// ---------- Compact Button ----------
function Button({ children, kind = 'primary', size = 'md', onClick, type, href, style }) {
  const cls = 'btn btn-' + kind + (size === 'sm' ? ' btn-sm' : '');
  const Tag = href ? 'a' : 'button';
  return (
    <Tag className={cls} onClick={onClick} type={type} href={href} style={style}>
      {children}
    </Tag>
  );
}

// Expose to window for other JSX files
Object.assign(window, { CAUSES, NAV, Icon, CloudCorner, Stars, TopNav, Footer, VerbCard, CausaCard, CausaLocked, OngCard, Button });
