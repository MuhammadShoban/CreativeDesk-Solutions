import { blogPosts, getBlogPost, getRelatedPosts, type BlogPost } from '../data/blogPosts';

interface BlogProps {
  currentPath: string;
}

// ── SEO meta tag updater ────────────────────────────────────────────────────
function updateMeta(title: string, description: string) {
  document.title = title;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute('content', description);
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', title);
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', description);
}

// ── Category badge colors ───────────────────────────────────────────────────
const categoryColors: Record<string, string> = {
  'Web Development':      'bg-blue-50   text-blue-700   border-blue-200',
  'Mobile App Development': 'bg-violet-50 text-violet-700 border-violet-200',
  'AI Automation':        'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Software Development': 'bg-orange-50  text-orange-700  border-orange-200',
};

// ── Blog List Page ──────────────────────────────────────────────────────────
function BlogList() {
  updateMeta(
    'Blog — Web Development, Mobile Apps & AI Insights | CreativeDesk Solutions',
    'Expert articles on web development costs, React vs Next.js, Flutter vs React Native, AI automation, and custom software development — from the CreativeDesk Solutions team.'
  );

  const [featured, ...rest] = blogPosts;

  return (
    <div className="bg-slate-50 min-h-screen font-jakarta">
      {/* ── Hero ── */}
      <section className="relative bg-white border-b border-slate-100 pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(160,160,180,0.18) 1px, transparent 1px),
                              linear-gradient(0deg,  rgba(160,160,180,0.18) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            maskImage: 'linear-gradient(to bottom, #000 0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, #000 0%, transparent 100%)',
          }}
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 mb-6">
            <span className="text-[0.7rem] font-extrabold text-brand-600 uppercase tracking-widest">
              CreativeDesk Blog
            </span>
          </div>
          <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight mb-5">
            Insights for{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #0891b2, #5f29c7)' }}>
              Modern Businesses
            </span>
          </h1>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Expert guides on web development, mobile apps, AI automation, and custom software — written by the CreativeDesk Solutions team.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* ── Featured Post ── */}
        <a
          href={`/blog/${featured.slug}`}
          className="group block mb-14 rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="aspect-[16/9] lg:aspect-auto overflow-hidden">
              <img
                src={featured.coverImage}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-[0.68rem] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${categoryColors[featured.category] ?? 'bg-slate-50 text-slate-600 border-slate-200'}`}>
                  {featured.category}
                </span>
                <span className="text-xs text-slate-400">{featured.readTime}</span>
              </div>
              <h2 className="font-extrabold text-2xl sm:text-3xl text-slate-900 leading-snug mb-4 group-hover:text-brand-600 transition-colors">
                {featured.title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold text-xs">
                  CD
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">{featured.author}</p>
                  <p className="text-xs text-slate-400">{new Date(featured.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
              </div>
            </div>
          </div>
        </a>

        {/* ── Post Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map(post => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-[0.62rem] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border ${categoryColors[post.category] ?? 'bg-slate-50 text-slate-600 border-slate-200'}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-400">{post.readTime}</span>
                </div>
                <h2 className="font-extrabold text-base sm:text-lg text-slate-900 leading-snug mb-3 group-hover:text-brand-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <p className="text-xs text-slate-400">
                  {new Date(post.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Blog Post Renderer ──────────────────────────────────────────────────────
function BlogPostPage({ post }: { post: BlogPost }) {
  updateMeta(post.metaTitle, post.metaDescription);

  const related = getRelatedPosts(post.relatedSlugs);

  return (
    <article className="bg-white min-h-screen font-jakarta" itemScope itemType="https://schema.org/BlogPosting">
      {/* Hidden structured data */}
      <meta itemProp="headline" content={post.title} />
      <meta itemProp="datePublished" content={post.publishDate} />
      <meta itemProp="author" content={post.author} />
      <meta itemProp="description" content={post.metaDescription} />

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-0 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8" aria-label="Breadcrumb">
            <a href="/" className="hover:text-brand-600 transition-colors">Home</a>
            <span>/</span>
            <a href="/blog" className="hover:text-brand-600 transition-colors">Blog</a>
            <span>/</span>
            <span className="text-slate-600 truncate max-w-[200px]">{post.category}</span>
          </nav>

          {/* Category + read time */}
          <div className="flex items-center gap-3 mb-5">
            <span className={`text-[0.68rem] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${categoryColors[post.category] ?? 'bg-slate-50 text-slate-600 border-slate-200'}`}>
              {post.category}
            </span>
            <span className="text-xs text-slate-400">{post.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight tracking-tight mb-5" itemProp="name">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl">
            {post.excerpt}
          </p>

          {/* Author row */}
          <div className="flex items-center gap-3 pb-8 border-b border-slate-100">
            <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-bold text-sm flex-shrink-0">
              CD
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">{post.author}</p>
              <p className="text-xs text-slate-400">
                Published {new Date(post.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>

        {/* Cover image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-lg aspect-[16/7]">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14" itemProp="articleBody">
        {post.content.map((section, idx) => {
          if (section.type === 'h2') {
            return (
              <h2 key={idx} className="font-extrabold text-2xl sm:text-3xl text-slate-900 mt-12 mb-5 leading-snug">
                {section.text}
              </h2>
            );
          }
          if (section.type === 'h3') {
            return (
              <h3 key={idx} className="font-extrabold text-xl text-slate-800 mt-8 mb-3 leading-snug">
                {section.text}
              </h3>
            );
          }
          if (section.type === 'p') {
            return (
              <p key={idx} className="text-slate-600 text-base leading-relaxed mb-5">
                {section.text}
              </p>
            );
          }
          if (section.type === 'ul') {
            return (
              <ul key={idx} className="space-y-2.5 mb-6 ml-2">
                {section.items?.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            );
          }
          if (section.type === 'ol') {
            return (
              <ol key={idx} className="space-y-3 mb-6 ml-2 counter-reset-list">
                {section.items?.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center flex-shrink-0 font-bold text-xs mt-0.5">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            );
          }
          if (section.type === 'callout') {
            return (
              <div key={idx} className="my-8 p-6 rounded-2xl bg-brand-50 border border-brand-100 text-brand-800 text-sm leading-relaxed font-medium">
                {section.text}
              </div>
            );
          }
          if (section.type === 'table' && section.headers && section.rows) {
            return (
              <div key={idx} className="my-8 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      {section.headers.map((h, i) => (
                        <th key={i} className="text-left text-xs font-extrabold uppercase tracking-wider text-slate-500 px-5 py-3.5">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.rows.map((row, ri) => (
                      <tr key={ri} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/60 transition-colors">
                        {row.map((cell, ci) => (
                          <td key={ci} className={`px-5 py-3.5 text-slate-700 leading-relaxed ${ci === 0 ? 'font-semibold text-slate-800' : ''}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }
          return null;
        })}

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-slate-100">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Tags</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="px-3 py-1.5 bg-slate-100 text-slate-600 text-xs rounded-full font-medium hover:bg-brand-50 hover:text-brand-700 transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 p-8 rounded-3xl bg-slate-900 text-white">
          <h3 className="font-extrabold text-xl sm:text-2xl mb-3">Ready to Build Something Great?</h3>
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            CreativeDesk Solutions is a full-service digital agency delivering high-performance websites, mobile apps, and AI automation for businesses globally.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold text-sm px-6 py-3 rounded-full hover:bg-brand-50 transition-colors"
          >
            Get a Free Discovery Call
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── Related Posts ── */}
      {related.length > 0 && (
        <section className="bg-slate-50 border-t border-slate-100 py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-extrabold text-2xl text-slate-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map(p => (
                <a
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group block rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={p.coverImage}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <span className={`text-[0.62rem] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border inline-block mb-3 ${categoryColors[p.category] ?? 'bg-slate-50 text-slate-600 border-slate-200'}`}>
                      {p.category}
                    </span>
                    <h3 className="font-extrabold text-sm sm:text-base text-slate-900 leading-snug group-hover:text-brand-600 transition-colors line-clamp-2">
                      {p.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}

// ── Root Blog Component (routes list vs. post) ──────────────────────────────
export default function Blog({ currentPath }: BlogProps) {
  const parts = currentPath.replace(/^\/+/, '').split('/');
  // /blog        -> list
  // /blog/:slug  -> post
  const slug = parts[1] ?? '';

  if (!slug) {
    return <BlogList />;
  }

  const post = getBlogPost(slug);
  if (!post) {
    return (
      <div className="pt-40 pb-20 text-center min-h-[60vh] flex flex-col items-center justify-center bg-slate-50 font-jakarta">
        <h1 className="text-2xl font-bold text-slate-800">Article Not Found</h1>
        <p className="text-slate-500 mt-2">The article you're looking for doesn't exist.</p>
        <a href="/blog" className="btn-primary mt-6">Back to Blog</a>
      </div>
    );
  }

  return <BlogPostPage post={post} />;
}
