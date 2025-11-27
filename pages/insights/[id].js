// pages/insights/[id].js
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

// Sample data - in a real app, this would come from an API or database
const INSIGHTS = [
  { 
    id: 1, 
    title: "Annual review", 
    image: "/mnt/data/e71d4eeb-30b8-4b87-94f0-f0b84377bd08.png",
    date: "May 15, 2025",
    author: "John Smith",
    category: "Market Insights",
    content: `
      <p>Our annual review provides a comprehensive analysis of the real estate market trends over the past year. We examine key indicators, emerging patterns, and future projections to help you make informed decisions in the coming year.</p>
      
      <h3>Key Highlights</h3>
      <ul>
        <li>Market growth and economic indicators</li>
        <li>Emerging property trends</li>
        <li>Investment opportunities</li>
        <li>Regulatory changes and their impact</li>
      </ul>

      <h3>Market Analysis</h3>
      <p>Detailed analysis of the current market conditions, including pricing trends, inventory levels, and buyer/seller dynamics across different property segments.</p>
    `,
    related: [
      { id: 2, title: "Data centre construction cost index 2025-2026" },
      { id: 3, title: "Global construction market intelligence 2025" }
    ]
  },
  { 
    id: 2, 
    title: "Data centre construction cost index 2025-2026",
    image: "/mnt/data/e71d4eeb-30b8-4b87-94f0-f0b84377bd08.png",
    date: "April 28, 2025",
    author: "Sarah Johnson",
    category: "Construction",
    content: `
      <p>Our latest data center construction cost index provides valuable insights into the evolving costs and trends in data center development across key global markets.</p>
      
      <h3>Key Findings</h3>
      <ul>
        <li>Regional cost comparisons</li>
        <li>Material and labor cost trends</li>
        <li>Sustainability and energy efficiency considerations</li>
        <li>Future outlook and projections</li>
      </ul>
    `,
    related: [
      { id: 1, title: "Annual review" },
      { id: 4, title: "Global office fit-out cost guide 2025" }
    ]
  },
  // Add more insights as needed
];

export default function InsightDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  const insight = INSIGHTS.find(insight => insight.id === parseInt(id));

  if (!insight) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Insight not found</h1>
          <Link href="/insights" className="text-blue-600 hover:underline">
            Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{insight.title} | Insights</title>
        <meta name="description" content={insight.content.substring(0, 160) + '...'} />
      </Head>

      <main className="mx-10  bg-white">
        {/* Header */}
        <header className="bg-[#163c72] -mb-20 text-white rounded-b-2xl overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold">Insights</h1>
            <p className="max-w-3xl mt-4 text-sm md:text-base leading-relaxed text-white/90">
              Expert analysis and thought leadership on the latest trends in real estate and construction.
            </p>
          </div>
        </header>

        {/* Content */}
        <div className="bg-white  rounded-t-2xl mx-auto px-6 py-8">
         <section className="w-full bg-white text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">

        {/* LEFT SIDEBAR */}
        <aside className="space-y-8">

          {/* Author Card */}
          <div className="border p-6 rounded-md shadow-sm">
            <img
              src={insight.authorImage}
              alt="author"
              className="w-28 h-28 rounded-full object-cover mx-auto"
            />

            <h3 className="mt-4 text-center text-lg font-semibold">
              {insight.author}
            </h3>
            <p className="text-center text-gray-600 text-sm">
              {insight.authorTitle}
            </p>

            <div className="flex justify-center gap-3 mt-4">
              <span className="w-8 h-8 rounded-full border flex items-center justify-center">in</span>
              <span className="w-8 h-8 rounded-full border flex items-center justify-center">@</span>
            </div>

            <p className="text-center text-gray-500 text-xs mt-6">
              Published date<br />
              <span className="font-medium text-gray-700">{insight.publishedDate}</span>
            </p>
          </div>

          {/* Jump To */}
          <div className="border p-6 rounded-md shadow-sm">
            <h4 className="font-semibold text-gray-900 mb-4">Jump to</h4>

            <ul className="space-y-3 text-sm text-blue-700">
              <li><a href="#digital-first">Digital-first project management consultancy</a></li>
              <li><a href="#reframing">Reframing project management</a></li>
              <li><a href="#four-gaps">The four strategic gaps to address</a></li>
              <li><a href="#bim">BIM as a decision engine</a></li>
              <li><a href="#turning-digital">Turning digital intent into project certainty</a></li>
            </ul>
          </div>
        </aside>

        {/* MAIN ARTICLE */}
        <article className="space-y-10">
          <p className="text-gray-500 text-sm">⏱️ 6 minutes</p>

          <h1 id="digital-first" className="text-3xl font-bold leading-snug">
            {insight.title}
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed">
            {insight.content}
          </p>

          {/* Section */}
          <h2 id="reframing" className="text-2xl font-semibold">Reframing project management through BIM</h2>

          <p className="text-gray-700">
            {insight.content}
          </p>

          {/* QUOTE BLOCK */}
          <div className="border-l-4 border-blue-600 pl-6 py-2 text-lg italic text-gray-800">
            {insight.quote}
          </div>

          <p className="text-gray-700">
            {insight.content}
          </p>

          <div className="border-l-4 border-blue-600 pl-6 py-2 text-lg italic text-gray-800">
            {insight.quote}
          </div>

          <p className="text-gray-700">
            {insight.content} 
          </p>

          {/* Section */}
          <h2 id="four-gaps" className="text-2xl font-semibold">The four strategic gaps to address</h2>

          <p className="text-gray-700">
            {insight.content}
          </p>

        </article>
      </div>
    </section>
        </div>
      </main>
    </>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on insights
  const paths = INSIGHTS.map((insight) => ({
    params: { id: insight.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the insight `id`.
  // If the route is like /insights/1, then params.id is 1
  const insight = INSIGHTS.find(insight => insight.id === parseInt(params.id));

  // Pass insight data to the page via props
  return { 
    props: { 
      insight 
    } 
  };
}
