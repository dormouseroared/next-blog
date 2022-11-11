import Layout from "@components/Layout"
import Counter from "@components/Counter"
import WidthHeightButton from "@components/WidthHeightButton"
import FetchPokemon from "@components/FetchPokemon"
import SimpleRender from "@components/SimpleRender"
import CounterWithError from "@components/CounterWithError"
import ResourceType from "@components/ResourceType"
import ExpenseItem from "@components/EXPENSE/ExpenseItem"
import Expenses from "@components/EXPENSE/Expenses"
import DoubleCount from "@components/doubleCount"

export default function AboutPage() {

    


    return (
        <>

            <Layout title="About Journal" component="/about AboutPage">

                <h1 id="about" className="py-5 mb-6 text-3xl font-bold border-b-4 sm:text-5xl">
                    About
                </h1>
                <div className="py-6 mt-6 rounded-lg shadow-md">
                    <h3 className="mb-5 text-2xl">
                        Journal
                    </h3>
                    <p className="mb-3">
                        This is a blog built with:
                    </p>
                    <ul className="ml-5 list-disc">
                        <li>Next.js</li>
                        <li>TailwindCSS</li>
                        <li>Markdown</li>
                        <li>gray-matter</li>
                        <li>marked</li>
                        <li><a className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600" href="https://www.npmjs.com/package/axios">axios</a></li>
                        <li><a className="text-blue-600 underline hover:text-blue-800 visited:text-purple-600" href="https://react-icons.github.io/react-icons/">react-icons</a></li>
                    </ul>







                    <p className="mt-5">
                        <span className="font-bold">Version 1.0.0</span>
                    </p>




                    <hr />
                    {/* <Counter />

                    <SimpleRender />

                    <WidthHeightButton />

                    <FetchPokemon />

                    <CounterWithError />

                    <ResourceType />

                    <Expenses /> */}

                    



                </div>
            </Layout>

                    <DoubleCount />


        </>
    )
}
