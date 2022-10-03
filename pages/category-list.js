import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Layout from "@/components/Layout"
import CategoryListGrid from "@/components/CategoryListGrid"




export async function getStaticProps() {


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
            categories: sortedCategories
        }
    }
}



export default function CategoryListPage(props) {

    // console.log(JSON.stringify(props, null, 2))
    console.log(JSON.stringify(props.categories, null, 2))

    return (
        <Layout component="/category-list CategoryListPage">

            <CategoryListGrid categories={props.categories}></CategoryListGrid>


        </Layout>
    )
}