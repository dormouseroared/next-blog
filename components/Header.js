import Image from "next/image"
import Link from "next/link"
import {MdCode} from "react-icons/md"

export default function Header() {
    return (
        <header id="start" className="bg-gray-800 text-gray-100 shadow w-full">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center max-w-5xl">
                <Link href="/">
                    <a className="flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0">
                        {/* <Image src="/images/logo.png" width={40} height={40} alt="logo" /> */}
                        <MdCode size="4rem" />
                        <span className="ml-3 text-xl sm:text-2xl lg:text-3xl">
                            Journal
                        </span>
                    </a>
                </Link>

                <nav className="flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto">
                    <Link href="/blog">
                        <a className="mx-3 sm:mx-5 cursor-pointer uppercase hover:text-indigo-300 transition duration-200">
                            Blog
                        </a>
                    </Link>
                    <Link href="/category-list">
                        <a className="mx-3 sm:mx-5 cursor-pointer uppercase hover:text-indigo-300 transition duration-200">
                            Categories
                        </a>
                    </Link>
                    <Link href="/about">
                        <a className="mx-3 sm:mx-5 cursor-pointer uppercase hover:text-indigo-300 transition duration-200">
                            About
                        </a>
                    </Link>
                    <Link href="/test">
                        <a className="mx-3 sm:mx-5 cursor-pointer uppercase hover:text-indigo-300 transition duration-200">
                            Test
                        </a>
                    </Link>
                </nav>
            </div>
        </header>
    )
}
