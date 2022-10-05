import Link from 'next/link'
import CategoryLabel from '@components/CategoryLabel'

export default function CategoryList({ categories }) {
  return (
    <div className='w-full mt-6'>

      <h3 className='text-3xl sm:text-5xl border-b-4 py-5 font-bold mb-6'>
        Categories available
      </h3>

      <div className='mt-6 grid gap-2 grid-cols-3 lg:grid-cols-5 xl:grid-cols-6'>
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