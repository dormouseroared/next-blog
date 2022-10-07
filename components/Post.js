import Image from "next/image"
import Link from "next/link"

import CategoryLabel from "@components/CategoryLabel"

export default function Post({ post }) {
    return (

        <div className="w-full p-6 bg-gray-200 rounded-lg">

            <div className="pb-8 capitalize">
                <Link href={`/blog/${post.slug}`}>
                    <a className="text-xl block sm:text-2xl text-white py-3 px-2 bg-purple-700 rounded hover:underline underline-offset-8 decoration-4 font-mono">
                        {post.frontMatter.title}
                    </a>
                </Link>
            </div>

            <Image src={post.frontMatter.cover_image} alt="" height={420} width={600} className="my-6 rounded" />


            <div className="flex justify-between items-center">

                <span className="font-sm sm:font-light text-gray-600">
                    {post.frontMatter.date}
                </span>

                <span className="text-xs italic">
                    {post.slug}
                </span>

                <CategoryLabel>
                    {post.frontMatter.category}
                </CategoryLabel>

            </div>

            <div className="mt-2">


                <p className="mt-2 text-gray-600">
                    {post.frontMatter.excerpt}
                </p>

            </div>

            {/* <div className="flex justify-between items-center mt-6">

            <Link href={`/blog/${post.slug}`}>
                <a className="text-gray-900 hover:text-blue-600">
                    Read more
                </a>
            </Link>

            <div className="flex items-center">

                <Image src={post.frontMatter.author_image} height={40} width={40} alt="" className="mx-4 h-10 w-10 object-cover rounded-full hidden sm:block"/>

                <h3 className="text-gray-700 font-bold">
                    {post.frontMatter.author}
                </h3>

            </div>
        </div> */}
        </div>
    )
}
