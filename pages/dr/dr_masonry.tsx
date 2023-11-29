import { useEffect, useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
import { promises as fs } from "fs";
import path from "path";

interface ImageProps {
  images: string[];
}

const DesignersRepublic: React.FC<ImageProps> = ({ images }) => {
    const [displayCount, setDisplayCount] = useState(50);
  
    const loadMoreImages = () => {
      setDisplayCount(displayCount + 50);
    };

  return (
    <div className="container">
      <main className="gallery gallery--dr gallery--masonry">
        <Gallery images={images.slice(0, displayCount)} />
      </main>
      <div className="button-container">
        <button className="button button--primary button--gallery" onClick={loadMoreImages}>
          Load More
        </button>
      </div>
    </div>
  );
};

const Gallery = ({ images }: { images: string[] }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    Modal.setAppElement("#__next");
  }, []);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const displayedImages = images

  return (
    <>
      <div className="image-gallery">
        {displayedImages.map((el: string) => (
          <section key={el}>
            <Image
              className="card"
              width={1024}
              height={1024}
              alt={el}
              src={`/designers-republic/all/${el}`}
              onClick={() => openModal(el)}
            />
          </section>
        ))}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          closeTimeoutMS={500}
          className={`modal-content ${modalIsOpen ? "modal-open" : ""}`}
        >
          <img
            src={`/designers-republic/all/${selectedImage}`}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </Modal>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const imageDirectory = path.join(
    process.cwd(),
    "/public/designers-republic/all"
  );
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
