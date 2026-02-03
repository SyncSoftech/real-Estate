const SITE_URL = 'https://www.ginjo.co.uk' || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

function toSlug(text = '') {
  return text
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function url(loc, lastmod = new Date().toISOString()) {
  return `\n  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
}

function generateSiteMap() {
  const staticRoutes = [
    '/',
    '/about',
    '/about/our-story',
    '/about/what-we-do',
    '/about/purpose-values',
    '/services',
    '/sectors',
    '/insights',
    '/careers',
    '/gallery',
    '/contact',
    '/privacyPolicy',
    '/ourPeople',
    '/ourPeople/ourLeaders',
    '/ourPeople/ourTeam',
    '/caseStudies',
  ];

  // Dynamic: careers (ids from pages/careers/[id].js)
  const careerIds = [1, 2, 3, 4, 5, 6];

  // Dynamic: insights (ids from pages/insights/[id].js)
  const insightIds = [1, 2, 3, 4, 5];

  // Dynamic: case studies (ids from pages/case-studies/[id].js)
  const caseStudyIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Dynamic: services (slugs derived from titles in pages/services/[id].js)
  const serviceTitles = [
    'Variation Management',
    'Tendering & Procurement',
    'Quantity Surveying & Commercial Management',
    'Estimating, BOQs & MTOs',
    'NEC, JCT, FIDIC, Bespoke Contract Experts',
    'Smart Commercial Systems',
    'Project Management',
    'Claims, Disputes and Commercial Advisory',
  ];
  const serviceSlugs = serviceTitles.map(toSlug);

  // Dynamic: people profiles (leaders and team) ids are names in their files
  const leaderIds = ['Daniel Ginn', 'Rishi Rao', 'Adersh Rajagopalan'];
  const teamIds = [
    'Sabahat Mazhar',
    'Mrunali Ghumare',
    'Owais Khatib',
    'Tehreem Rubab',
    'Ellen Tilles',
    'Jonathan Maisey',
    'Eve Chin',
  ];

  const allUrls = [];

  // static
  staticRoutes.forEach((path) => allUrls.push(url(`${SITE_URL}${path}`)));

  // careers
  careerIds.forEach((id) => allUrls.push(url(`${SITE_URL}/careers/${id}`)));

  // insights
  insightIds.forEach((id) => allUrls.push(url(`${SITE_URL}/insights/${id}`)));

  // case studies (note: folder is case-studies)
  caseStudyIds.forEach((id) => allUrls.push(url(`${SITE_URL}/case-studies/${id}`)));

  // services
  serviceSlugs.forEach((slug) => allUrls.push(url(`${SITE_URL}/services/${slug}`)));

  // people
  leaderIds.forEach((name) => allUrls.push(url(`${SITE_URL}/ourPeople/leaders/${encodeURIComponent(name)}`)));
  teamIds.forEach((name) => allUrls.push(url(`${SITE_URL}/ourPeople/team/${encodeURIComponent(name)}`)));

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${allUrls.join('')}\n</urlset>`;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
  return { props: {} };
}

export default function SiteMap() {
  return null;
}
