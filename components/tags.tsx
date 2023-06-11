export default function Tags({ tags }) {
  return (
    <div className="post__tags max-w-2xl mx-auto">
      <p className="mt-8 text-lg font-bold">
        {tags.edges.map((tag, index) => (
          <span key={index} className="ml-4 font-normal">
            #{tag.node.name}
          </span>
        ))}
      </p>
    </div>
  )
}
