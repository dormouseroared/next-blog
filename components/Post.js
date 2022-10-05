import Image from "next/image"
import Link from "next/link"

import CategoryLabel from "@components/CategoryLabel"

export default function Post({post}) {
  return (

    <div className="w-full p-6 bg-gray-200 rounded-lg shadow-lg mt-6">

        <Image src={post.frontMatter.cover_image} alt="" height={420} width={600} className="mb-4 rounded" />

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

            <Link href={`/blog/${post.slug}`}>
                <a className="text-2xl text-gray-700 font-bold hover:underline hover:text-gray-900">
                    {post.frontMatter.title}
                </a>
            </Link>

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
