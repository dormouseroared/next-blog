import Link from 'next/link'
import CategoryLabel from './CategoryLabel'

export default function CategoryList({ categories }) {
  return (
    <div className='w-full mt-6'>

      <h3 className='text-3xl bg-slate-700 text-slate-100 p-3 rounded-t-2xl'>
        Categories available
      </h3>

      <div className='mt-6 grid gap-2 grid-cols-3 lg:grid-cols-5'>
        {categories.map((category, index) => (
          <Link key={index} href={`/blog/category/${category.toLowerCase()}`}>
            <div className='cursor-pointer sm:text-xl rounded-lg'>
              <CategoryLabel>{category}</CategoryLabel> 
            </div>
          </Link>
        ))}
      </div>

    </div>
  )
}