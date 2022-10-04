import fs from "fs"
import path from "path"
import { marked } from "marked"
import matter from "gray-matter"
import Link from "next/link"
import Layout from "@/components/Layout"
import CategoryLabel from "@/components/CategoryLabel"

export default function SlugPage({ frontMatter: { title, category, date, cover_image, author, author_image, excerpt }, content, slug }) {

    return (
        <Layout title={title} component="/blog/[slug] SlugPage">
            {/* <Link href="/blog">Go Back</Link> */}

            <div className="w-full px-2 sm:px-4 lg:px-10 py-6 bg-whitex rounded-lgx shadow-mdx mt-6">

                <div className="flex justify-between items-center mt-4 bg-gray-500 text-gray-100 p-5 rounded-lg">

                    <h1 className="text-lg sm:text-3xl lg:text-4xl">
                        {title}
                    </h1>
                    <CategoryLabel>
                        {category}
                    </CategoryLabel>

                </div>

                <div className="flex justify-between items-center bg-gray-500 text-gray-100 p-5 rounded-lg mt-1 mb-6 text-xs lg:text-2xl">
                    <h3>{excerpt}</h3>
                    <div className="">
                        {date}
                    </div>
                </div>



                {/* <img src={cover_image} alt="" className="w-full rounded"/> */}

                {/* <div className="flex justify-between items-center bg-gray-100 p-2 my-8">
                    <div className="flex items-center">
                        <img src={author_image} alt="" className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"/>
                        <h4>{author}</h4>
                    </div>
                </div> */}

                <div className="markdown-content blog-text prose-lg lg:prose-xl mt-2">
                    <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
                </div>
            </div>
        </Layout>
    )
}

// TODO tailwindcss typography plugin to give the html some styling, rather than add css
// TODO https://tailwindcss.com/docs/typography-plugin
// TODO blog-text does not do anything but is left as a reminder

// TODO replace img with Image?

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join("markdown-posts"))

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace(".md", "")
        }
    }))

    console.log("blog [slug] first entry/object of return array")
    console.log(paths[0])

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { slug } }) {
    console.log(slug)

    const markdownWithMeta = fs.readFileSync(path.join("markdown-posts", `${slug}.md`), "utf-8")

    const { data: frontMatter, content } = matter(markdownWithMeta)

    return {
        props: {
            frontMatter,
            content,
            slug
        }
    }
}
