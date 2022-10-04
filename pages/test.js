import Layout from "../components/Layout"
import Link from "next/link"

export default function TestPage() {
    return (
        <Layout>
            <div className="globalStyling">
                <h1 className="text-3xl">Testing Zone</h1>
                <p>Rather than clutter up the navbar with links, they can be placed here.</p>

                <h2 className="text-2xl">API ROUTES: reading</h2>
                <Link href="/comments">
                    <a>Read comments and display them when button clicked.</a>
                </Link>
            </div>
        </Layout>
    )
}
