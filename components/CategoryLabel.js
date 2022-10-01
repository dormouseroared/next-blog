import Link from "next/link"

export default function CategoryLabel({ children }) {
    const colorKey = {
        JavaScript: "bg-yellow-600",
        CSS: "bg-blue-600",
        Python: "bg-green-600",
        PHP: "bg-purple-600",
        Ruby: "bg-red-600",
        TailwindCSS: "bg-lime-500"
    }

    
    if (colorKey[children] === undefined) {
        colorKey[children] = "bg-gray-600"
    }
    
    console.log(children, colorKey[children])

    return (
        <div className={`px-2 py-1 ${colorKey[children]} text-gray-100 font-bold rounded`}>
            <Link href={`/blog/category/${children.toLowerCase()}`}>
                {children}
            </Link>
        </div>
    )
}

// TODO Brad's code did not work with latest tailwindcss
// substitute the whole class rather than just the colour
// https://stackoverflow.com/questions/68020378/how-to-use-template-literals-in-tailwindcss-to-change-classes-dynamically

// https://tailwindcss.com/docs/content-configuration#class-detection-in-depth

// TODO for a new category in colorKey, just make them gray for now
