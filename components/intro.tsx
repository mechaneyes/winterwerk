import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Intro() {
  return (
    <section className="home-header flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl md:pr-8">
        WinterWerk
      </h1>
      <h4 className="">
        Experiments w Words + WordPress + Next.js
      </h4>
    </section>
  )
}
