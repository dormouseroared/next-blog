import Layout from "@components/Layout"


export default function AboutPage() {
    return (
        <>

            <Layout title="About Journal" component="/about AboutPage">

                <h1 id="about" className="text-3xl sm:text-5xl border-b-4 py-5 font-bold mb-6">
                    About
                </h1>
                <div className="shadow-md rounded-lg py-6 mt-6">
                    <h3 className="text-2xl mb-5">
                        Journal
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
                        <li><a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://react-icons.github.io/react-icons/">react-icons</a></li>
                    </ul>

                   


                    <p className="mt-5">
                        <span className="font-bold">Version 1.0.0</span>
                    </p>

                </div>
            </Layout>

        </>
    )
}
