import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 由于我们不能直接导入TypeScript文件，我们直接在这里定义语言数据
const baseUrl = 'https://helloworld.yhc.so';
const today = new Date().toISOString().split('T')[0];

// 根据SEO规则规范化语言名称
function normalizeLanguageName(name) {
  if (name === 'C') return 'c';
  if (name === 'C#') return 'c-sharp';
  if (name === 'C++') return 'cpp';

  return name.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// 常见的编程语言列表
const languages = [
  'Python', 'Java', 'JavaScript', 'C++', 'C', 'C#', 'PHP', 'Ruby', 'Swift', 'Kotlin',
  'Go', 'Rust', 'TypeScript', 'Scala', 'Perl', 'R', 'MATLAB', 'Dart', 'Lua', 'Haskell',
  'Clojure', 'Erlang', 'Elixir', 'F#', 'OCaml', 'Julia', 'Nim', 'Crystal', 'Zig', 'V',
  'Assembly', 'COBOL', 'Fortran', 'Pascal', 'Ada', 'Prolog', 'Scheme', 'Racket', 'ML', 'Elm',
  'PureScript', 'Idris', 'Agda', 'Lean', 'Coq', 'Isabelle', 'Dafny', 'Viper', 'Whiley', 'Dafny',
  'Solidity', 'Vyper', 'Move', 'Cairo', 'Leo', 'Noir', 'Circom', 'Huff', 'Yul', 'Fe',
  'Bash', 'PowerShell', 'Batch', 'Fish', 'Zsh', 'Tcsh', 'Csh', 'Ksh', 'Dash', 'Ash',
  'SQL', 'NoSQL', 'GraphQL', 'SPARQL', 'XQuery', 'JSONiq', 'N1QL', 'CQL', 'MDX', 'DAX',
  'HTML', 'CSS', 'SCSS', 'SASS', 'LESS', 'Stylus', 'PostCSS', 'Tailwind', 'Bootstrap', 'Bulma',
  'XML', 'JSON', 'YAML', 'TOML', 'INI', 'CSV', 'TSV', 'Protobuf', 'Avro', 'Thrift',
  'Objective-C', 'Objective-C++', 'Swift', 'Kotlin', 'Flutter', 'React Native', 'Xamarin', 'Ionic', 'Cordova', 'PhoneGap',
  'Unity', 'Unreal', 'Godot', 'Construct', 'GameMaker', 'RPG Maker', 'Ren\'Py', 'Twine', 'Ink', 'Yarn'
];

// 静态页面
const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/rankings', priority: '0.8', changefreq: 'weekly' },
  { url: '/sources', priority: '0.7', changefreq: 'monthly' }
];

// 动态语言页面
const languagePages = languages.map(lang => ({
  url: `/${normalizeLanguageName(lang)}-hello-world`,
  priority: '0.9',
  changefreq: 'weekly'
}));

const allPages = [...staticPages, ...languagePages];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

// 写入sitemap.xml文件
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(sitemapPath, xml, 'utf8');

console.log(`✅ Sitemap generated successfully with ${allPages.length} pages`);
console.log(`📍 Saved to: ${sitemapPath}`);