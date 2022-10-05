import fs from "fs"
import path from "path"
import matter from "gray-matter"

import Layout from "@components/Layout"
import Post from "@components/Post"
import CategoryListGrid from "@components/CategoryListGrid"
import { sortByDate } from "@utils/index"


// getStaticPaths
// runs at build time to return an object with all the valid category names
// at run time, when a browser url of the form /blog/category/javascript is received,
// next js checks if javascript is found in return from getStaticPaths
// and the prebuilt url is sent back or a 404
// At build time, the valid category list from getStaticPaths is passed one by one
// to getStaticProps, which creates an object containing the details of each blog
// matching the category, and each list is passed to the CategoryBlogPage component
// to build the category page.

export async function getStaticPaths() {

    const filesArray = fs.readdirSync(path.join("markdown-posts"))

    const categoriesArray = filesArray.map((filename) => {
        const markdownWithMeta = fs.readFileSync(path.join("markdown-posts", filename), "utf-8")

        const { data: frontMatter } = matter(markdownWithMeta)

        return frontMatter.category.toLowerCase()
    })

    console.table(categoriesArray)

    const uniqueCategoriesArray = [...new Set(categoriesArray)]

    console.log("[category_name] [getStaticPaths] uniqueCategories")
    console.table(uniqueCategoriesArray)

    const paths = uniqueCategoriesArray.map((category) => ({
        params: { category_name: category }
    }))

    console.log("[category_name] [getStaticPaths] all the valid category names")
    console.table(paths)

    return {
        paths,
        fallback: false
    }
}



export async function getStaticProps({ params: { category_name } }) {

    console.log("CATEGORY_NAME:", category_name)

    const filesArray = fs.readdirSync(path.join("markdown-posts"))

    const postsArray = filesArray.map((filename) => {

        const slug = filename.replace(".md", "")

        const markdownWithMeta = fs.readFileSync(path.join("markdown-posts", filename), "utf-8")

        const { data: frontMatter } = matter(markdownWithMeta)

        return {
            slug,
            frontMatter
        }
    })

    console.log("[category_name] [getStaticProps] postsArray")
    console.table(postsArray)
    // TODO console.table(postsArray, ["frontMatter"]) shows how to select a column, or columns

    const filteredPostsArray = postsArray.filter((post) => {

        console.log("FILTER", post.frontMatter.category.toLowerCase(), category_name)

        return post.frontMatter.category.toLowerCase() === category_name
    })

    // new code to create a list of unique category list that can be displayed
    // this is completely separate to the list of posts for a category but
    // should be able to use the postsArray

    const categories = postsArray.map((post) => post.frontMatter.category)
    console.log("[category_name] [getStaticProps] categories for list")
    console.table(categories)
    const uniqueCategories = [...new Set(categories)]

    const sortedCategories = uniqueCategories.sort()

    // end of new code

    return {
        props: {
            posts: filteredPostsArray.sort(sortByDate),
            categoryName: category_name,
            categories: sortedCategories
        }
    }
}

// BUILD page for an individual /blog/category/{props.categoryName}
// next js passes props returned from getStaticProps (example data used)
// and map is used to pass each post object in the posts array to the Post component
// to create the static page headed "Posts for category: JAVASCRIPT"
//
// {
//      props: {
//          posts: [
//              {
//                  slug: "array-unique-values",
//                  frontMatter: {
//                      title: "only unique values in array",
//                      date: "September 29, 2022",
//                      excerpt: "How to get unique values using spread operator and Set",
//                      cover_image: "/images/posts/test.jpg",
//                      category: "JavaScript",
//                      author: "Ferdy",
//                      author_image: "https://randomuser.me/api/portraits/men/12.jpg"
//                  }
//              },
//              {continue with details of next slug, frontMatter...},
//          ],
//          categoryName: javascript
//      }
// }

export default function CategoryBlogPage(props) {

    // console.log(JSON.stringify(props, null, 2))
    console.log(JSON.stringify(props.categories, null, 2))

    return (

        <Layout component="/blog/category/[category_name] CategoryBlogPage">

            <CategoryListGrid categories={props.categories}></CategoryListGrid>

            <h1 className='text-3xl sm:text-5xl p-5 font-bold bg-slate-600 text-white rounded-lg my-5'>
                Blogs for category: {props.categoryName.toUpperCase()}
            </h1>



            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {props.posts.map((post, index) => (
                    <Post key={index} post={post} />
                ))}

            </div>

        </Layout>
    )
}

// this page was copied from the home page, and then getStaticPaths added