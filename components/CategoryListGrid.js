import Link from 'next/link'
import CategoryLabel from './CategoryLabel'

export default function CategoryList({ categories }) {
  return (
    <div className='w-full p-5 bg-white rounded-lg shadow-md mt-6'>
      <h3 className='text-2xl bg-gray-800 text-white p-3 rounded mb-5'>
        Blog Categories
      </h3>
      <ul className='grid gap-2 grid-cols-3 lg:grid-cols-6'>
        {categories.map((category, index) => (
          <Link key={index} href={`/blog/category/${category.toLowerCase()}`}>
            <li className='p-2 cursor-pointer text-xl rounded-lg'>
              <CategoryLabel>{category}</CategoryLabel> 
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}