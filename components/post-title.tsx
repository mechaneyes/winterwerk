export default function PostTitle({ children }) {
  return (
    <h1
      className="post__title"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}
