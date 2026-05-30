// pages.jsx — all top-level pages of the site.
// Pages are stateless React components driven by the `navigate(page, params)` prop.

const { useState: useStateP, useEffect: useEffectP, useMemo: useMemoP } = React;

// ====================================================================
// HOME
// ====================================================================
function HomePage({ navigate, tweaks }) {
  const heroSlogan = (
    <h1 data-comment-anchor="hero-h1">
      Ajudar
      <br/>sempre é o
      <br/>melh<span className="heart-o">♥</span>r
      <br/>caminh<span className="e5">●</span>.
    </h1>
  );

  return (
    <main className="page" id="home" data-screen-label="01 Home">
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <CloudCorner position="tl" size={220} fill="rgba(219,67,71,0.08)"/>
        <div className="container">
          <div className="hero-grid">
            <div>
              <span className="hero-eyebrow"><span className="dot"></span> João Pessoa · Paraíba</span>
              {heroSlogan}
              <p className="hero-lead">
                Mapa Solidário é um hub que organiza, amplifica e conecta o trabalho de ONGs e projetos sociais em João Pessoa. Encontre quem precisa de ajuda — e como ajudar.
              </p>
              <div className="hero-actions">
                <Button kind="primary" onClick={() => navigate('ongs')}>
                  Conhecer as ONGs <Icon.arrow/>
                </Button>
                <Button kind="ghost" onClick={() => navigate('sobre')}>
                  Sobre o projeto
                </Button>
              </div>
            </div>

            <div className="hero-art sticker" aria-hidden="true">
              <div className="photo" style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.55) 100%), url(assets/mockup-child-portrait.png)`,
              }}/>
              <CloudCorner position="tl" size={120} fill="#fff"/>
              <CloudCorner position="br" size={120} fill="#fff"/>
              <div className="handle">@mapasolidariojp</div>
              <div className="quote">
                Ajudar sempre é o melhor caminho.
                <span className="sub">Mapa Solidário · JP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- VERBS ---------- */}
      <section className="verbs section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">O que fazemos</span>
            <h2>Três verbos. Uma missão.</h2>
            <p className="lead">Cada ONG faz seu trabalho. Nós cuidamos de fazer essas iniciativas chegarem em mais gente.</p>
          </div>
          <div className="verbs-grid">
            <VerbCard num="01" verb="Organiza."
              color="var(--ms-red)"
              body="Mapeamos os projetos sociais ativos em João Pessoa por causa. Quem ajuda quem, e do quê precisa hoje."/>
            <VerbCard num="02" verb="Amplifica."
              color="var(--ms-purple)"
              body="Damos visibilidade ao trabalho de ONGs pequenas que fazem muito com pouco — e que não têm equipe para gerir redes sociais."/>
            <VerbCard num="03" verb="Conecta."
              color="var(--ms-green)"
              body="Aproxima quem quer ajudar de quem está fazendo. Doadores, voluntários, empresas e ONGs em um só lugar."/>
          </div>
        </div>
      </section>

      {/* ---------- CAUSAS ---------- */}
      <section className="section" style={{ background: 'var(--ms-paper-soft)' }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Categorias de causa</span>
            <h2>Onde sua ajuda faz diferença.</h2>
            <p className="lead">
              Começamos por três causas que já mapeamos em João Pessoa. Em breve abriremos mais categorias.
            </p>
          </div>
          <div className="causas-grid">
            {CAUSES.map((c) => (
              <CausaCard key={c.id} cause={c} onClick={() => navigate('ongs', { causa: c.id })}/>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- ONGS EM DESTAQUE ---------- */}
      <section className="section">
        <div className="container">
          <div className="section-head" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', maxWidth: 'none', flexWrap: 'wrap', gap: 16 }}>
            <div style={{ maxWidth: 560 }}>
              <span className="eyebrow">ONGs em destaque</span>
              <h2 style={{ marginTop: 14 }}>Conheça quem está fazendo agora.</h2>
            </div>
            <Button kind="ghost" size="sm" onClick={() => navigate('ongs')}>
              Ver todas as ONGs <Icon.arrow width="14" height="14"/>
            </Button>
          </div>
          <div className="ong-grid">
            {ONGS.slice(0, 3).map((o) => (
              <OngCard key={o.id} ong={o} onClick={() => navigate('ong', { id: o.id })}/>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- IMPACTO ---------- */}
      <section className="impact">
        <CloudCorner position="tl" size={280} fill="rgba(255,255,255,0.05)"/>
        <CloudCorner position="br" size={280} fill="rgba(255,255,255,0.05)"/>
        <Stars count={20}/>
        <div className="container">
          <div className="impact-inner">
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Impacto até aqui</span>
            <h2 style={{ marginTop: 12 }}>O começo de um mapa que cresce todo mês.</h2>
            <p className="sub">ONGs e projetos sociais mapeados em João Pessoa, Paraíba.</p>
            <div className="impact-grid">
              <div className="stat"><div className="n">{ONGS.length}</div><div className="l">ONGs no mapa</div></div>
              <div className="stat"><div className="n">{CAUSES.length}</div><div className="l">categorias de causa</div></div>
              <div className="stat"><div className="n">100%</div><div className="l">gratuito para ajudar</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="cta-strip">
        <CloudCorner position="tl" size={260} fill="rgba(26,26,26,0.06)"/>
        <CloudCorner position="br" size={260} fill="rgba(26,26,26,0.06)"/>
        <div className="container">
          <div className="cta-strip-inner">
            <div>
              <span className="eyebrow">É uma ONG?</span>
              <h2 style={{ marginTop: 10 }}>Sua iniciativa merece estar no mapa.</h2>
              <p>O cadastro é gratuito. A gente revisa, ilustra e publica sua ONG dentro de uma semana.</p>
            </div>
            <div className="actions">
              <Button kind="primary" onClick={() => navigate('cadastrar')}>Cadastrar ONG <Icon.arrow/></Button>
              <Button kind="soft" onClick={() => navigate('contato')}>Falar com a gente</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// ====================================================================
// SOBRE / MANIFESTO
// ====================================================================
function SobrePage({ navigate }) {
  return (
    <main className="page" id="sobre" data-screen-label="02 Sobre">
      {/* ---------- PAGE HERO / MANIFESTO ---------- */}
      <section className="manifesto">
        <CloudCorner position="tl" size={280} fill="rgba(255,255,255,0.08)"/>
        <CloudCorner position="br" size={280} fill="rgba(255,255,255,0.08)"/>
        <Stars count={18}/>
        <div className="container">
          <div className="manifesto-inner">
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Manifesto</span>
            <h2 style={{ marginTop: 14 }}>Ajudar sempre é o melhor caminho.</h2>
            <p>
              João Pessoa está cheia de gente que dedica os dias a cuidar dos outros. ONGs pequenas, projetos de bairro, coletivos que fazem muito com pouco. O problema raramente é falta de vontade de ajudar — é falta de saber onde, como e por onde começar.
            </p>
            <p style={{ marginTop: 16 }}>
              Mapa Solidário existe para resolver isso.
            </p>
            <div className="script-tagline">— a gente conecta quem quer ajudar com quem está fazendo.</div>
          </div>
        </div>
      </section>

      {/* ---------- ABOUT GRID ---------- */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div>
              <span className="eyebrow">A ideia</span>
              <p className="about-quote" style={{ marginTop: 18 }}>
                Um mapa <em>vivo</em> de ONGs e projetos sociais de João Pessoa.
              </p>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 17, color: 'var(--ms-ink-soft)', lineHeight: 1.55, marginBottom: 14 }}>
                Mapa Solidário nasceu da percepção de que João Pessoa tem muita gente boa fazendo trabalho social — e muita gente boa querendo ajudar, sem saber por onde. Faltava um lugar único para ver quem está fazendo o quê e como apoiar.
              </p>
              <p style={{ fontFamily: 'var(--font-text)', fontSize: 17, color: 'var(--ms-ink-soft)', lineHeight: 1.55 }}>
                Ficou claro que o que faltava em João Pessoa não era boa vontade, e sim <strong style={{ color: 'var(--ms-ink)' }}>um lugar único</strong> para ver quem está fazendo o quê. É isso aqui.
              </p>
            </div>
            <div className="bridge">
              <span className="eyebrow" style={{ marginBottom: 4 }}>O que fazemos, em três verbos</span>
              <div className="bridge-row">
                <span className="dot" style={{ background: 'var(--ms-red)' }}></span>
                <div>
                  <div className="label" style={{ color: 'var(--ms-red)' }}>Organiza.</div>
                  <div style={{ fontSize: 14, color: 'var(--ms-ink-soft)' }}>Mapeamos as ONGs ativas em João Pessoa por causa.</div>
                </div>
              </div>
              <div className="bridge-row">
                <span className="dot" style={{ background: 'var(--ms-purple)' }}></span>
                <div>
                  <div className="label" style={{ color: 'var(--ms-purple)' }}>Amplifica.</div>
                  <div style={{ fontSize: 14, color: 'var(--ms-ink-soft)' }}>Damos voz a quem faz muito sem ser ouvido.</div>
                </div>
              </div>
              <div className="bridge-row">
                <span className="dot" style={{ background: 'var(--ms-green)' }}></span>
                <div>
                  <div className="label" style={{ color: 'var(--ms-green)' }}>Conecta.</div>
                  <div style={{ fontSize: 14, color: 'var(--ms-ink-soft)' }}>Quem quer ajudar encontra quem precisa de ajuda.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- COMO FUNCIONA ---------- */}
      <section className="section" style={{ background: 'var(--ms-paper-soft)' }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Como funciona</span>
            <h2>Simples como deve ser.</h2>
            <p className="lead">Nada de burocracia. O Mapa só faz a ponte — a doação acontece direto com a ONG, pelos canais dela.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }} className="how-grid">
            {[
              { n: '01', t: 'Você escolhe uma causa.', d: 'Crianças, animais, educação, saúde, idosos. Encontre a que mais te toca.', c: 'var(--ms-yellow)' },
              { n: '02', t: 'Conhece a ONG.', d: 'Lê a história, vê do que ela precisa hoje, descobre quem está por trás.', c: 'var(--ms-lime)' },
              { n: '03', t: 'Ajuda direto.', d: 'Você vai para o Instagram da ONG e fala com eles. Doa, se voluntaria, divulga.', c: 'var(--ms-red)' },
            ].map((s) => (
              <div key={s.n} style={{
                background: '#fff', borderRadius: 22, padding: '24px 24px',
                display: 'flex', gap: 20, alignItems: 'center',
                boxShadow: 'var(--shadow-sm)',
              }}>
                <div style={{
                  flexShrink: 0,
                  width: 56, height: 56, borderRadius: 999,
                  background: s.c, color: 'var(--ms-ink)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontSize: 22,
                }}>{s.n}</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 26, lineHeight: 1.05, margin: '0 0 4px' }}>{s.t}</h3>
                  <p style={{ fontFamily: 'var(--font-text)', fontSize: 15, color: 'var(--ms-ink-soft)' }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FOR ONGS ---------- */}
      <section className="cta-strip">
        <CloudCorner position="tl" size={260} fill="rgba(26,26,26,0.06)"/>
        <CloudCorner position="br" size={260} fill="rgba(26,26,26,0.06)"/>
        <div className="container">
          <div className="cta-strip-inner">
            <div>
              <span className="eyebrow">Para ONGs</span>
              <h2 style={{ marginTop: 10 }}>Faça parte do mapa.</h2>
              <p>Se sua organização atua em João Pessoa, preencha o cadastro. A gente entra em contato em até uma semana.</p>
            </div>
            <div className="actions">
              <Button kind="primary" onClick={() => navigate('cadastrar')}>Cadastrar ONG <Icon.arrow/></Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// ====================================================================
// ONGS (catálogo + filtros)
// ====================================================================
function OngsPage({ navigate, params }) {
  const [causa, setCausa] = useStateP(params?.causa || 'all');
  const [q, setQ] = useStateP('');

  useEffectP(() => {
    if (params?.causa && params.causa !== causa) setCausa(params.causa);
    // eslint-disable-next-line
  }, [params?.causa]);

  const filtered = ONGS.filter((o) => {
    if (causa !== 'all' && o.causa !== causa) return false;
    if (q && !(o.name + ' ' + o.short).toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });

  return (
    <main className="page" id="ongs" data-screen-label="03 ONGs">
      <section className="page-hero">
        <CloudCorner position="tl" size={220} fill="rgba(219,67,71,0.08)"/>
        <div className="container">
          <span className="eyebrow">Catálogo</span>
          <h1 style={{ marginTop: 14 }}>
            <span className="accent">{filtered.length}</span> ONGs
            <br/>esperando você.
          </h1>
          <p className="lead">Filtre por causa, busque pelo nome, escolha quem você quer ajudar.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="container">
          <div className="search">
            <span className="icon"><Icon.search/></span>
            <input
              type="text"
              placeholder="Buscar por nome ou causa…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>

          <div className="filters" role="tablist" aria-label="Filtrar por causa">
            <button
              className={'chip ' + (causa === 'all' ? 'is-active' : '')}
              onClick={() => setCausa('all')}>
              Todas as causas
            </button>
            {CAUSES.map((c) => (
              <button key={c.id}
                className={'chip ' + (causa === c.id ? 'is-active' : '')}
                onClick={() => setCausa(c.id)}>
                <span className="dot" style={{ background: c.color }}></span>{c.label}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div style={{
              background: '#fff', borderRadius: 22, padding: '56px 28px',
              textAlign: 'center', boxShadow: 'var(--shadow-sm)',
              marginTop: 32,
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, color: 'var(--ms-blue)', marginBottom: 10 }}>
                Nada por aqui ainda.
              </div>
              <p style={{ fontFamily: 'var(--font-text)', color: 'var(--ms-ink-soft)', maxWidth: 380, margin: '0 auto 22px' }}>
                Nenhuma ONG com esses filtros. Tenta abrir a busca, ou indique uma para a gente cadastrar.
              </p>
              <Button kind="primary" onClick={() => navigate('cadastrar')}>Indicar uma ONG <Icon.arrow/></Button>
            </div>
          ) : (
            <div className="ong-grid" style={{ marginTop: 8 }}>
              {filtered.map((o) => (
                <OngCard key={o.id} ong={o} onClick={() => navigate('ong', { id: o.id })}/>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

// ====================================================================
// ONG DETAIL
// ====================================================================
function OngPage({ navigate, params }) {
  const ong = ONGS.find(o => o.id === params?.id) || ONGS[0];
  const cause = CAUSES.find(c => c.id === ong.causa) || CAUSES[0];

  return (
    <main className="page" id="ong" data-screen-label="04 ONG detail">
      <section className="detail-hero">
        <div className="detail-cover" style={{ background: cause.color }}>
          <CloudCorner position="tl" size={240} fill="rgba(255,255,255,0.18)"/>
          <CloudCorner position="br" size={240} fill="rgba(255,255,255,0.18)"/>
          {ong.photo && <div className="photo" style={{ backgroundImage: `url(${ong.photo})` }}/>}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={cause.illus} alt="" style={{ maxWidth: 480, maxHeight: '70%', opacity: 0.92 }}/>
          </div>
          <div className="veil"/>
          <div className="head">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
              <span className="tag"><span style={{ width: 8, height: 8, borderRadius: 999, background: cause.color, display: 'inline-block' }}></span>{cause.label}</span>
              <a href="#ongs" onClick={(e) => { e.preventDefault(); navigate('ongs'); }}
                 style={{ fontSize: 13, color: 'rgba(255,255,255,0.88)', textDecoration: 'underline', textUnderlineOffset: 3 }}>
                ← voltar ao catálogo
              </a>
            </div>
            <h1>{ong.name}</h1>
            <div className="where"><Icon.pin width="14" height="14"/> João Pessoa, PB</div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--ms-paper-soft)' }}>
        <div className="container">
          <div className="detail-body">
            <div>
              <span className="eyebrow">Sobre a iniciativa</span>
              <p className="lede" style={{ marginTop: 14, marginBottom: 20, fontFamily: 'var(--font-text)', fontSize: 19, color: 'var(--ms-ink)', lineHeight: 1.45 }}>
                {ong.short}
              </p>
              {ong.long && <p style={{ marginBottom: 36 }}>{ong.long}</p>}

              {ong.needs && ong.needs.length > 0 && (
                <React.Fragment>
                  <h3>Do que estão precisando agora</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 40 }}>
                    {ong.needs.map((n, i) => (
                      <span key={i} style={{
                        padding: '10px 16px',
                        background: '#fff',
                        borderRadius: 999,
                        fontFamily: 'var(--font-text)',
                        fontSize: 14,
                        color: 'var(--ms-ink)',
                        boxShadow: 'inset 0 0 0 1.5px var(--ms-line)',
                      }}>
                        {n}
                      </span>
                    ))}
                  </div>
                </React.Fragment>
              )}

              <h3>Quer ajudar?</h3>
              <p style={{ marginTop: 8, marginBottom: 24 }}>
                A doação acontece direto com a ONG. Use os canais ao lado para entrar em contato — uma mensagem no Instagram ou WhatsApp já é o primeiro passo.
              </p>
            </div>

            <aside>
              <div className="help-card">
                <span className="eyebrow">Como ajudar</span>
                <h4 style={{ marginTop: 8 }}>Fale direto com a ONG.</h4>
                <p style={{ fontFamily: 'var(--font-text)', fontSize: 14, color: 'var(--ms-ink-soft)', marginBottom: 18 }}>
                  A doação acontece pelos canais da própria organização. O Mapa Solidário só faz a ponte.
                </p>

                <a href={`https://instagram.com/${ong.handle}`} target="_blank" rel="noreferrer" className="help-row" style={{ textDecoration: 'none' }}>
                  <span className="ic" style={{ background: cause.color, color: '#fff' }}><Icon.insta/></span>
                  <div style={{ flex: 1 }}>
                    <strong>Instagram</strong>
                    @{ong.handle}
                  </div>
                  <Icon.arrow width="16" height="16"/>
                </a>
                {ong.phone && (
                  <a href={`https://wa.me/55${ong.phone.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="help-row" style={{ textDecoration: 'none' }}>
                    <span className="ic" style={{ background: '#25D366', color: '#fff' }}><Icon.whats/></span>
                    <div style={{ flex: 1 }}>
                      <strong>WhatsApp</strong>
                      {ong.phone}
                    </div>
                    <Icon.arrow width="16" height="16"/>
                  </a>
                )}
                {ong.email && (
                  <a href={`mailto:${ong.email}`} className="help-row" style={{ textDecoration: 'none' }}>
                    <span className="ic"><Icon.mail/></span>
                    <div style={{ flex: 1 }}>
                      <strong>E-mail</strong>
                      {ong.email}
                    </div>
                    <Icon.arrow width="16" height="16"/>
                  </a>
                )}

                <div style={{ marginTop: 18 }}>
                  <Button kind="primary"
                          href={`https://instagram.com/${ong.handle}`}
                          style={{ width: '100%', justifyContent: 'center' }}>
                    Ir para o Instagram <Icon.arrow/>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* outras ongs */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Conheça outras</span>
            <h2>Mais iniciativas no mapa.</h2>
          </div>
          <div className="ong-grid">
            {ONGS.filter(o => o.id !== ong.id).slice(0, 3).map((o) => (
              <OngCard key={o.id} ong={o} onClick={() => navigate('ong', { id: o.id })}/>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// ====================================================================
// CADASTRAR ONG
// ====================================================================
// Submissions are POSTed to Web3Forms — they arrive in mapasolidariojp@gmail.com
// formatted as a table. No activation step; works as soon as it's live.
const WEB3FORMS_KEY = 'd4a501e8-7da5-4045-bc1d-c7e3dda198fd';

async function submitToEmail(payload, subject) {
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: subject,
        from_name: 'Site Mapa Solidário JP',
        ...payload,
      }),
    });
    const data = await res.json().catch(() => ({}));
    return data.success === true || data.success === 'true';
  } catch (e) {
    return false;
  }
}

function CadastrarPage({ navigate }) {
  const [step, setStep] = useStateP(0);
  const [form, setForm] = useStateP({
    nome: '',
    causa: [],
    bairro: '',
    fundacao: '',
    descricao: '',
    instagram: '',
    whatsapp: '',
    email: '',
    responsavel: '',
    necessidades: '',
  });
  const [done, setDone] = useStateP(false);
  const [errs, setErrs] = useStateP({});
  const [submitting, setSubmitting] = useStateP(false);
  const [submitError, setSubmitError] = useStateP('');

  const update = (k, v) => setForm({ ...form, [k]: v });
  const toggleCausa = (id) => {
    const has = form.causa.includes(id);
    update('causa', has ? form.causa.filter(c => c !== id) : [...form.causa, id]);
  };

  const validate = (s) => {
    const e = {};
    if (s === 0) {
      if (!form.nome) e.nome = 'Como sua ONG se chama?';
      if (!form.causa.length) e.causa = 'Escolha pelo menos uma causa.';
    } else if (s === 1) {
      if (!form.descricao || form.descricao.length < 30) e.descricao = 'Conta um pouquinho mais — pelo menos 30 caracteres.';
    } else if (s === 2) {
      if (!form.instagram && !form.whatsapp) e.instagram = 'Precisamos de pelo menos um canal — Instagram ou WhatsApp.';
      if (!form.responsavel) e.responsavel = 'Quem é a pessoa de contato?';
      if (!form.email) e.email = 'Coloca um e-mail para a gente confirmar.';
    }
    setErrs(e);
    return Object.keys(e).length === 0;
  };

  const next = async () => {
    if (!validate(step)) return;
    if (step < 2) { setStep(step + 1); return; }
    // Final submission → POST to Formsubmit, drops in mapasolidariojp@gmail.com
    setSubmitError('');
    setSubmitting(true);
    const causaLabels = form.causa
      .map((id) => (CAUSES.find(c => c.id === id) || {}).label)
      .filter(Boolean).join(', ');
    const payload = {
      'Tipo de envio': 'Cadastro de ONG',
      'Nome da ONG': form.nome,
      'Causas': causaLabels,
      'Bairro': form.bairro || '—',
      'Ano de fundação': form.fundacao || '—',
      'História da ONG': form.descricao,
      'Necessidades atuais': form.necessidades || '—',
      'Instagram': form.instagram || '—',
      'WhatsApp / Telefone': form.whatsapp || '—',
      'Pessoa de contato': form.responsavel,
      'E-mail': form.email,
    };
    const ok = await submitToEmail(payload, `[Mapa Solidário] Cadastro de ONG — ${form.nome}`);
    setSubmitting(false);
    if (ok) setDone(true);
    else setSubmitError('Não consegui enviar agora. Tente novamente em alguns minutos, ou escreva para mapasolidariojp@gmail.com.');
  };

  if (done) {
    return (
      <main className="page" data-screen-label="05 Cadastro / sucesso">
        <section className="section" style={{ padding: '80px 0' }}>
          <div className="container" style={{ maxWidth: 640 }}>
            <div className="success">
              <CloudCorner position="tl" size={140} fill="var(--ms-yellow-tint, #fdf3d8)"/>
              <CloudCorner position="br" size={140} fill="var(--ms-green-tint, #d9efd9)"/>
              <div className="check"><Icon.check/></div>
              <span className="eyebrow">Recebido</span>
              <h2 style={{ marginTop: 14 }}>Obrigado, {form.responsavel.split(' ')[0] || 'pessoa querida'}!</h2>
              <p>
                A gente recebeu o cadastro de <strong>{form.nome}</strong> e vai revisar nos próximos dias. Você recebe um e-mail em <strong>{form.email}</strong> quando a ONG estiver publicada no mapa.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button kind="primary" onClick={() => navigate('home')}>Voltar para a home</Button>
                <Button kind="soft" onClick={() => navigate('ongs')}>Ver outras ONGs</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="page" data-screen-label="05 Cadastrar">
      <section className="page-hero">
        <CloudCorner position="tl" size={220} fill="rgba(1,161,87,0.10)"/>
        <div className="container">
          <span className="eyebrow">Cadastre sua ONG</span>
          <h1 style={{ marginTop: 14 }}>
            Vamos colocar sua iniciativa
            <br/>no <span className="accent">mapa</span>.
          </h1>
          <p className="lead">Três passos rápidos. Gratuito. A gente revisa e te avisa quando publicar.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 28 }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="steps">
            {['Identidade', 'História', 'Contato'].map((t, i) => (
              <div key={t} className={'step ' + (i === step ? 'is-active' : i < step ? 'is-done' : '')}>
                <span className="num">{i < step ? '✓' : i + 1}</span>
                <span>{t}</span>
                <span className="bar"/>
              </div>
            ))}
          </div>

          <div style={{ background: '#fff', borderRadius: 22, padding: '28px 28px 32px', boxShadow: 'var(--shadow-sm)' }}>
            {step === 0 && (
              <div className="form-grid">
                <div className="field full" style={{ gridColumn: '1 / -1' }}>
                  <label>Nome da ONG <span className="req">*</span></label>
                  <input value={form.nome} onChange={(e) => update('nome', e.target.value)} placeholder="Ex.: Casa de Apoio Esperança"/>
                  {errs.nome && <span className="err">{errs.nome}</span>}
                </div>
                <div className="field" style={{ gridColumn: '1 / -1' }}>
                  <label>Causas que vocês atuam <span className="req">*</span></label>
                  <div className="causa-pick">
                    {CAUSES.map((c) => {
                      const on = form.causa.includes(c.id);
                      return (
                        <button key={c.id} type="button"
                                className={'pick ' + (on ? 'is-on' : '')}
                                onClick={() => toggleCausa(c.id)}>
                          <span className="dot" style={{ background: c.color }}></span>{c.label}
                        </button>
                      );
                    })}
                  </div>
                  {errs.causa && <span className="err">{errs.causa}</span>}
                </div>
                <div className="field">
                  <label>Bairro principal</label>
                  <input value={form.bairro} onChange={(e) => update('bairro', e.target.value)} placeholder="Ex.: Centro, Mangabeira…"/>
                </div>
                <div className="field">
                  <label>Ano de fundação</label>
                  <input value={form.fundacao} onChange={(e) => update('fundacao', e.target.value)} placeholder="Ex.: 2018" inputMode="numeric"/>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="form-grid">
                <div className="field full" style={{ gridColumn: '1 / -1' }}>
                  <label>Conte a história da ONG <span className="req">*</span></label>
                  <textarea value={form.descricao} onChange={(e) => update('descricao', e.target.value)} placeholder="O que vocês fazem, como começou, quem atende, do que precisam hoje…"/>
                  <span className="hint">{form.descricao.length} / mín. 30 caracteres</span>
                  {errs.descricao && <span className="err">{errs.descricao}</span>}
                </div>
                <div className="field full" style={{ gridColumn: '1 / -1' }}>
                  <label>Do que vocês precisam hoje?</label>
                  <input value={form.necessidades} onChange={(e) => update('necessidades', e.target.value)} placeholder="Ex.: Alimentos não perecíveis, voluntários para sábado…"/>
                  <span className="hint">Separe por vírgulas. Vamos listar do jeito que você escrever.</span>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="form-grid">
                <div className="field">
                  <label>Instagram da ONG</label>
                  <input value={form.instagram} onChange={(e) => update('instagram', e.target.value)} placeholder="@minhaong"/>
                  {errs.instagram && <span className="err">{errs.instagram}</span>}
                </div>
                <div className="field">
                  <label>WhatsApp para contato</label>
                  <input value={form.whatsapp} onChange={(e) => update('whatsapp', e.target.value)} placeholder="(83) 9 0000-0000"/>
                </div>
                <div className="field">
                  <label>Pessoa de contato <span className="req">*</span></label>
                  <input value={form.responsavel} onChange={(e) => update('responsavel', e.target.value)} placeholder="Nome completo"/>
                  {errs.responsavel && <span className="err">{errs.responsavel}</span>}
                </div>
                <div className="field">
                  <label>E-mail <span className="req">*</span></label>
                  <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="contato@minhaong.org.br"/>
                  {errs.email && <span className="err">{errs.email}</span>}
                </div>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 28, gap: 12, flexWrap: 'wrap' }}>
              <div>
                {step > 0 && <Button kind="soft" onClick={() => setStep(step - 1)}>← Voltar</Button>}
              </div>
              <Button kind="primary" onClick={next}>
                {submitting ? 'Enviando…' : step < 2 ? 'Continuar' : 'Enviar cadastro'} {!submitting && <Icon.arrow/>}
              </Button>
            </div>
            {submitError && (
              <div style={{ marginTop: 16, padding: '12px 16px', background: 'var(--ms-red-tint, #fbeaea)', color: 'var(--ms-red)', borderRadius: 12, fontFamily: 'var(--font-text)', fontSize: 14 }}>
                {submitError}
              </div>
            )}
          </div>

          <p style={{ marginTop: 18, fontFamily: 'var(--font-text)', fontSize: 13, color: 'var(--ms-ink-mute)', textAlign: 'center' }}>
            Ao enviar, você concorda que o Mapa Solidário entre em contato pelo e-mail e Instagram informados.
          </p>
        </div>
      </section>
    </main>
  );
}

// ====================================================================
// CONTATO
// ====================================================================
function ContatoPage({ navigate }) {
  const [form, setForm] = useStateP({ nome: '', email: '', assunto: 'duvida', mensagem: '' });
  const [done, setDone] = useStateP(false);
  const [submitting, setSubmitting] = useStateP(false);
  const [submitError, setSubmitError] = useStateP('');
  const update = (k, v) => setForm({ ...form, [k]: v });

  if (done) {
    return (
      <main className="page" data-screen-label="06 Contato / sucesso">
        <section className="section" style={{ padding: '80px 0' }}>
          <div className="container" style={{ maxWidth: 600 }}>
            <div className="success">
              <div className="check"><Icon.check/></div>
              <h2 style={{ marginTop: 6 }}>Mensagem recebida!</h2>
              <p>Obrigado, <strong>{form.nome.split(' ')[0]}</strong>. A gente responde em até 3 dias úteis em <strong>{form.email}</strong>.</p>
              <Button kind="primary" onClick={() => navigate('home')}>Voltar para a home</Button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="page" data-screen-label="06 Contato">
      <section className="page-hero">
        <CloudCorner position="tl" size={220} fill="rgba(18,70,122,0.10)"/>
        <div className="container">
          <span className="eyebrow">Contato</span>
          <h1 style={{ marginTop: 14 }}>
            Fala com a <span className="accent">gente</span>.
          </h1>
          <p className="lead">Imprensa, parcerias, dúvidas — ou só passar um oi.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 28 }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 32 }} className="contato-grid">
            <div style={{ background: '#fff', borderRadius: 22, padding: 28, boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 26, color: 'var(--ms-blue)', margin: '0 0 18px' }}>Envia uma mensagem</h3>
              <form onSubmit={async (e) => { e.preventDefault();
                if (!form.nome || !form.email || !form.mensagem) return;
                const assuntoLabel = {
                  duvida: 'Dúvida',
                  parceria: 'Proposta de parceria',
                  imprensa: 'Imprensa',
                  voluntario: 'Quero ser voluntário',
                  outro: 'Outro',
                }[form.assunto] || 'Contato';
                setSubmitError('');
                setSubmitting(true);
                const ok = await submitToEmail({
                  'Tipo de envio': 'Contato',
                  'Nome': form.nome,
                  'E-mail': form.email,
                  'Assunto': assuntoLabel,
                  'Mensagem': form.mensagem,
                }, `[Mapa Solidário] ${assuntoLabel} — ${form.nome}`);
                setSubmitting(false);
                if (ok) setDone(true);
                else setSubmitError('Não consegui enviar agora. Tenta de novo daqui a pouco, ou escreva direto para mapasolidariojp@gmail.com.');
              }}>
                <div className="form-grid">
                  <div className="field">
                    <label>Seu nome <span className="req">*</span></label>
                    <input required value={form.nome} onChange={(e) => update('nome', e.target.value)}/>
                  </div>
                  <div className="field">
                    <label>E-mail <span className="req">*</span></label>
                    <input required type="email" value={form.email} onChange={(e) => update('email', e.target.value)}/>
                  </div>
                  <div className="field full" style={{ gridColumn: '1 / -1' }}>
                    <label>Assunto</label>
                    <select value={form.assunto} onChange={(e) => update('assunto', e.target.value)}>
                      <option value="duvida">Tirar uma dúvida</option>
                      <option value="parceria">Proposta de parceria</option>
                      <option value="imprensa">Imprensa</option>
                      <option value="voluntario">Quero ser voluntário</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  <div className="field full" style={{ gridColumn: '1 / -1' }}>
                    <label>Mensagem <span className="req">*</span></label>
                    <textarea required value={form.mensagem} onChange={(e) => update('mensagem', e.target.value)} placeholder="Escreve do jeito que vier…"/>
                  </div>
                </div>
                <div style={{ marginTop: 20, display: 'flex', justifyContent: 'flex-end' }}>
                  <Button kind="primary" type="submit">
                    {submitting ? 'Enviando…' : 'Enviar mensagem'} {!submitting && <Icon.send/>}
                  </Button>
                </div>
                {submitError && (
                  <div style={{ marginTop: 14, padding: '12px 16px', background: 'var(--ms-red-tint, #fbeaea)', color: 'var(--ms-red)', borderRadius: 12, fontFamily: 'var(--font-text)', fontSize: 14 }}>
                    {submitError}
                  </div>
                )}
              </form>
            </div>

            <aside style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <a href="https://instagram.com/mapasolidariojp" target="_blank" rel="noreferrer"
                 style={{ background: 'var(--ms-red)', color: '#fff', borderRadius: 22, padding: 24, display: 'block', position: 'relative', overflow: 'hidden' }}>
                <CloudCorner position="tl" size={120} fill="rgba(255,255,255,0.18)"/>
                <CloudCorner position="br" size={120} fill="rgba(255,255,255,0.18)"/>
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <Icon.insta width="22" height="22"/>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginTop: 10, lineHeight: 1 }}>@mapasolidariojp</div>
                  <div style={{ fontFamily: 'var(--font-text)', fontSize: 14, opacity: 0.9, marginTop: 6 }}>O canal mais rápido para falar com a gente.</div>
                </div>
              </a>

              <div style={{ background: '#fff', borderRadius: 22, padding: 22, boxShadow: 'var(--shadow-sm)' }}>
                <span className="eyebrow">E-mail</span>
                <div style={{ fontFamily: 'var(--font-text)', fontSize: 17, marginTop: 8 }}>
                  <a href="mailto:mapasolidariojp@gmail.com" style={{ color: 'var(--ms-blue)' }}>mapasolidariojp@gmail.com</a>
                </div>
              </div>

              <div style={{ background: '#fff', borderRadius: 22, padding: 22, boxShadow: 'var(--shadow-sm)' }}>
                <span className="eyebrow">Sede</span>
                <div style={{ fontFamily: 'var(--font-text)', fontSize: 15, marginTop: 8, color: 'var(--ms-ink-soft)', lineHeight: 1.5 }}>
                  João Pessoa, Paraíba — Brasil
                </div>
              </div>

              <div style={{ background: 'var(--ms-yellow)', borderRadius: 22, padding: 22, position: 'relative', overflow: 'hidden' }}>
                <CloudCorner position="br" size={140} fill="rgba(26,26,26,0.06)"/>
                <span className="eyebrow" style={{ position: 'relative', zIndex: 2 }}>É uma ONG?</span>
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 24, margin: '8px 0 12px' }}>Cadastra direto, é mais rápido.</h4>
                  <Button kind="primary" size="sm" onClick={() => navigate('cadastrar')}
                          style={{ background: 'var(--ms-ink)' }}>
                    Cadastrar ONG <Icon.arrow width="14" height="14"/>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { HomePage, SobrePage, OngsPage, OngPage, CadastrarPage, ContatoPage });
