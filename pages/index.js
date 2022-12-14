import fs from "fs"
import path from "path"
import Link from "next/link"
import matter from "gray-matter"

import Layout from "@components/Layout"
import Post from "@components/Post"
import { sortByDate } from "@utils/index"

export default function HomePage(props) {
  return (
    <Layout component="/ HomePage">

      <h1 className='text-3xl sm:text-5xl border-b-4 py-5 font-bold mb-6'>
        Latest Blog Posts
      </h1>


      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {props.posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}

      </div>

      {/* <Link href="/blog">
        <a className="block text-center border border-gray-500 text-gray-800 rounded-md py-4 my-5 transition duration-500 ease select-none hover:text-white hover:bg-gray-900 focus:outline-none focus:shadow-outline w-full">
          All Blogs
        </a>
      </Link> */}

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

  console.table(postsArray)

  return {
    props: {
      posts: postsArray.sort(sortByDate).slice(0, 6)
    }
  }
}
