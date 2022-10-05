import Layout from "@components/Layout"
import { FaHome, FaEnvelope } from "react-icons/fa"
import { BsFillFileRuledFill } from "react-icons/bs"
import { AiOutlineNotification } from "react-icons/ai"
import { GiOverInfinity } from "react-icons/gi"
import { MdCode } from "react-icons/md"
import HeroWithOverlayImage from "../components/HeroWithOverlayImage"

export default function AboutPage() {
    return (
        <>

            <Layout title="About Journal" component="/about AboutPage">

                <HeroWithOverlayImage title="DaisyUI Hero Component" image="https://placeimg.com/1000/800/arch" button="GET STARTED">
                    From DaisyUI, this is a component called HeroWithOverlayImage, which can wrap any plain text to be placed on the supplied image as an overlay, and take in a title. More work is needed to enable the button to be named and when clicked to invoke a function.
                </HeroWithOverlayImage>

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

                    <div className="bg-slate-600 flex align-center mt-6 p-6">
                        <FaHome size="4rem" color="green" />
                        <h2 className="ml-6">Font Awesome. Will not go on the same line!! unless flex is used to force it. Will take props like size and color.</h2>
                    </div>
                    <div className="bg-slate-600 flex align-center mt-6 p-6">
                        <BsFillFileRuledFill size="4rem" color="blue" />
                        <h2 className="ml-6">BootStrap Icons.</h2>
                    </div>
                    <div className="bg-slate-600 flex align-center mt-6 p-6">
                        <AiOutlineNotification size="4rem" color="red" />
                        <h2 className="ml-6">Ant Design Icons.</h2>
                    </div>
                    <div className="bg-slate-600 flex align-center mt-6 p-6">
                        <GiOverInfinity size="4rem" color="red" />
                        <h2 className="ml-6">Game Icons.</h2>
                    </div>
                    <div className="bg-slate-600 flex align-center mt-6 p-6">
                        <FaEnvelope size="4rem" color="dodgerblue" />
                        <h2 className="ml-6">Font Awesome.</h2>
                    </div>
                    <div className="bg-slate-600 flex align-center mt-6 p-6">
                        <MdCode size="4rem" color="dodgerblue" />
                        <h2 className="ml-6">Material Design Icons.</h2>
                    </div>


                    <p className="mt-5">
                        <span className="font-bold">Version 1.0.0</span>
                    </p>

                </div>
            </Layout>



            <h2 className="text-3xl my-6">button</h2>

            <button className="btn btn-active">Button</button>
            <button className="btn btn-active btn-primary">Button</button>
            <button className="btn btn-active btn-secondary">Button</button>
            <button className="btn btn-active btn-accent">Button</button>
            <button className="btn btn-active btn-ghost">Button</button>
            <button className="btn btn-active btn-link">Button</button>
            <h2 className="text-3xl my-6">kbd</h2>
            <kbd className="kbd">ctrl</kbd>
            +
            <kbd className="kbd">shift</kbd>
            +
            <kbd className="kbd">del</kbd>
        </>
    )
}
