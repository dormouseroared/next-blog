import fs from "fs"
import path from "path"
import matter from "gray-matter"

import Layout from "@components/Layout"
import Post from "@components/Post"
import { sortByDate } from "@utils/index"

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


        // 
        //  when BLOG is clicked these checks are made to highlight errors
        // that cause strange indecipherable messages in places like CategoryLabel
        // because a markdown file does not have the --- delimiters
        // There can still be other problems with markdown files that cause weird errors.
        //
        console.log("typeof markdownWithMeta", typeof markdownWithMeta)
        console.log("blog is reading files one by one", filename, markdownWithMeta[0])

        const check1 = markdownWithMeta.substring(0, 3)
        if (check1 !== "---") {
            throw `blog index error: blog ${filename} does not start with ---`
        }

        if (markdownWithMeta.substring(3).indexOf("---") === -1) {
            throw `blog index error: blog ${filename} does not have second ---`
        }

        //
        // end of blog check
        //

        const { data: frontMatter } = matter(markdownWithMeta)

        console.log("index.js in blog has a category of:", frontMatter.category)

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