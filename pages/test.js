import Layout from "@components/Layout"
import HeroWithOverlayImage from "@components/HeroWithOverlayImage"
import Link from "next/link"
import { FaHome, FaEnvelope } from "react-icons/fa"
import { BsFillFileRuledFill } from "react-icons/bs"
import { AiOutlineNotification } from "react-icons/ai"
import { GiOverInfinity } from "react-icons/gi"
import { MdCode } from "react-icons/md"

export default function TestPage() {
    return (
        <>
            <HeroWithOverlayImage title="DaisyUI Hero Component" image="https://placeimg.com/1000/800/arch" button="GET STARTED">
                Starting with the JSX code from DaisyUI, this is a component called HeroWithOverlayImage, which can wrap any plain text to be placed on the supplied image as an overlay, and take in a title. Experimenting with using the button to jump to #start, so an id needs to be in the code somewhere (and there need to be enough on the page!). Also need to check out the image being a url or local. This hero is placed outside the Layout component to get full width.
            </HeroWithOverlayImage>

            <Layout>
                <div id="start" className="globalStyling">
                    <h1 className="text-3xl">Testing Zone</h1>
                    <p>Rather than clutter up the navbar with links, tests can be placed here.</p>

                    <h2 className="text-2xl uppercase my-6">API ROUTES: reading</h2>
                    <Link href="/comments">
                        <a>Read comments and display them when button clicked.</a>
                    </Link>

                    <h2 className="text-2xl uppercase my-6">react-icons</h2>

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

                    <h2 className="text-2xl uppercase my-6">button</h2>

                    <button className="btn btn-active">Button</button>
                    <button className="btn btn-active btn-primary">Button</button>
                    <button className="btn btn-active btn-secondary">Button</button>
                    <button className="btn btn-active btn-accent">Button</button>
                    <button className="btn btn-active btn-ghost">Button</button>
                    <button className="btn btn-active btn-link">Button</button>

                    <h2 className="text-2xl uppercase my-6">kbd</h2>
                    <kbd className="kbd">ctrl</kbd>
                    +
                    <kbd className="kbd">shift</kbd>
                    +
                    <kbd className="kbd">del</kbd>
                </div>
            </Layout>
        </>
    )
}
