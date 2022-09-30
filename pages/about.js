import Layout from "@/components/Layout"

export default function about() {
    return (
        <Layout title="About DevSpace">
            <h1 className="text-5xl border-b-4 pb-5 font-bold">
                About
            </h1>
            <div className="bg-white shadow-md rounded-lg px-10 py-6 mt-6">
                <h3 className="text-2xl mb-5">
                    DevSpace Blog
                </h3>
                <p className="mb-3">
                    This is a blog built with:
                </p>
                <ul className="list-disc ml-5">
                    <li>Next.js</li>
                    <li>TailwindCSS</li>
                    <li>Markdown</li>
                    <li>gray-matter</li>
                    <li>marked</li>
                </ul>

                <p className="mt-5">
                    <span className="font-bold">Version 1.0.0</span>
                </p>
            </div>
        </Layout>
    )
}
