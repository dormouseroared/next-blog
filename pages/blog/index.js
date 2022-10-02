import fs from "fs"
import path from "path"
import Layout from "@/components/Layout"
import matter from "gray-matter"
import Post from "@/components/Post"
import { sortByDate } from "@/utils/index"

export default function BlogIndexPage(props) {
    return (
        <Layout component="/blog BlogIndexPage">

            <h1 className='text-3xl sm:text-5xl border-b-4 p-5 font-bold'>
                All the Blog posts
            </h1>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {props.posts.map((post, index) => (
                    <Post key={index} post={post} />
                ))}

            </div>

        </Layout>
    )
}

export async function getStaticProps() {
    const files = fs.readdirSync(path.join("markdown-posts"))

    const postsArray = files.map((filename) => {
        const slug = filename.replace(".md", "")

        const markdownWithMeta = fs.readFileSync(path.join("markdown-posts", filename), "utf-8")

        const { data: frontMatter } = matter(markdownWithMeta)

        return {
            slug,
            frontMatter
        }
    })

    console.log("SHOW ALL BLOGS: postsArray table plus first object in the array")
    console.table(postsArray)
    console.log(postsArray[0])

    return {
        props: {
            posts: postsArray.sort(sortByDate)
        }
    }
}

// This is the blog index page, so all blogs are displayed
// there is no slice to give just the first 6 blogs
// and there is no button to get all the blogs as per the home page