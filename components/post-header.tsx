import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import Categories from './categories'

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="post__meta max-w-2xl mx-auto">
        <div className='post__avatar'>
          <Avatar author={author} />
        </div>
        <div className="mb-6">
          <Date dateString={date} />
          <Categories categories={categories} />
        </div>
      </div>
    </>
  )
}
