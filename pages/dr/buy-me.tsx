import React, { useEffect, useRef } from "react";
import { promises as fs } from "fs";
import path from "path";

interface ImageProps {
  images: string[];
}

const DesignersRepublic: React.FC<ImageProps> = ({ images }) => {
  return (
    <div className="container">
      <main className="gallery gallery-dr">
        {/* <Title Name="Gallery" Title={"Proof of Concept"} /> */}
        <Gallery images={images} />
      </main>
    </div>
  );
};

const Gallery = ({ images }: { images: string[] }) => {
  let scrollContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentScrollContainer = scrollContainer.current;

    if (currentScrollContainer) {
      const handleWheel = (event: WheelEvent) => {
        event.preventDefault();
        currentScrollContainer.scrollLeft += event.deltaY;
      };

      currentScrollContainer.addEventListener("wheel", handleWheel);

      return () => {
        currentScrollContainer.removeEventListener("wheel", handleWheel);
      };
    }
  }, []);

  return (
    <div className="image-gallery" ref={scrollContainer}>
      {images.map((el: string) => (
        <section>
          <img
            className="card"
            width={768}
            height={768}
            alt={el}
            src={`/designers-republic/${el}`}
            key={el}
          />
        </section>
      ))}
    </div>
  );
};

const Title = ({ Name, Title }: { Name: string; Title: string }) => {
  return (
    <h1 className="title">
      {Name} {Title}
    </h1>
  );
};

export async function getStaticProps() {
  const imageDirectory = path.join(process.cwd(), "/public/designers-republic");
  const imageFilenames = await fs.readdir(imageDirectory);

  const filteredImages = imageFilenames.filter((filename) =>
    filename.includes("1024")
  );

  return {
    props: {
      images: filteredImages,
    },
  };
}

export default DesignersRepublic;
