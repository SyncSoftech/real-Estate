import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Sectors() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">Sectors</h1>
        <p className="mt-4">List of sectors and short descriptions go here.</p>
      </main>
      <Footer />
    </>
  )
}
