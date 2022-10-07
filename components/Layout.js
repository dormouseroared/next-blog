import Head from 'next/head'
import Header from '@components/Header'

export default function Layout({ title, keywords, description, component, children }) {
    return (
        <>
            <Head>
                <title>
                    {title}
                </title>

                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <meta name="keywords" content={keywords} />
                <meta name="description" content={description} />

                <link rel="icon" href="/favicon.ico" />

            </Head>

            <Header />

            <main className="container mx-auto my-7">
                {children}
            </main>

            {/* <footer>
                <p className='text-xs italic text-blue-600 ml-3'>
                    {component}
                </p>
            </footer> */}
        </>
    )
}

Layout.defaultProps = {
    title: "Welcome to Journal",
    keywords: "learning, learning, learning",
    description: "journal notes"
}
