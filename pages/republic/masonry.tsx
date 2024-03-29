import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { ceil } from "mathjs";
import Image from "next/image";
import Modal from "react-modal";
import { promises as fs } from "fs";
import path from "path";

interface ImageProps {
  images: string[];
}

const DesignersRepublic: React.FC<ImageProps> = ({ images }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const itemsPerPage = 50;
  const totalPages = ceil(images.length / itemsPerPage);

  // Get the page number from the query parameters
  const pageNumber = Number(router.query.page) || 1;

  useEffect(() => {
    // Set the current page to the page number from the URL
    setCurrentPage(pageNumber);
  }, [pageNumber]);

  const goToNextPage = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    router.push(`/republic/masonry?page=${nextPage}`);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      const previousPage = currentPage - 1;
      setCurrentPage(previousPage);
      router.push(`/republic/masonry?page=${previousPage}`);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const imagesForCurrentPage = images.slice(startIndex, endIndex);

  return (
    <div>
      <main className="gallery gallery--dr gallery--masonry">
        <Gallery images={imagesForCurrentPage} />
      </main>
      <div className="button-container">
        <button
          className="button button--primary button--gallery"
          onClick={() => {
            goToPreviousPage();
          }}
        >
          Previous Page
        </button>
        <button
          className="button button--primary button--gallery"
          onClick={() => {
            goToNextPage();
          }}
        >
          Next Page
        </button>
      </div>
      <div className="page-numbers">
        Page {currentPage} of {totalPages}
      </div>
      <div className="button-container">
        <button
          className="button button--primary button--gallery button--half"
          onClick={() => {
            setCurrentPage(1);
            router.push(`/republic/masonry`);
          }}
        >
          First Page
        </button>
        <button
          className="button button--primary button--gallery button--half"
          onClick={() => {
            setCurrentPage(totalPages);
            router.push(`/republic/masonry?page=${totalPages}`);
          }}
        >
          Last Page
        </button>
      </div>
    </div>
  );
};

const Gallery = ({ images }: { images: string[] }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const imageDirectory = path.join(process.cwd(), "/public/dr");

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

  const displayedImages = images;

  return (
    <>
      <div className="image-gallery">
        {displayedImages.map((el: string) => (
          <section key={el}>
            <Image
              className="card"
              width={500}
              height={500}
              sizes="500px"
              quality={80}
              alt={el}
              src={`/dr/${el}`}
              onClick={() => openModal(el)}
              loading="eager"
              placeholder="blur"
              blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            />
          </section>
        ))}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          closeTimeoutMS={500}
          className={`modal-content ${modalIsOpen ? "modal-open" : ""}`}
        >
          <Image
            className="card"
            width={1024}
            height={1024}
            quality={100}
            alt={selectedImage}
            src={`/dr/${selectedImage}`}
          />
          <div className="copy-url-element">
            <button
              aria-label="Copy URL"
              className={`button button--copy button--copy-url ${
                isClicked ? "clicked" : ""
              }`}
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(
                  `https://winterwerk.one/dr/${selectedImage}`
                );
                setIsClicked(true);
                setTimeout(() => setIsClicked(false), 1000);
              }}
            >
              <svg
                className="url-block_icon"
                data-testid="geist-icon"
                fill="none"
                width="30"
                height="30"
                shapeRendering="geometricPrecision"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 30 30"
              >
                <path d="M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z"></path>
              </svg>
            </button>
            <div className={`copy__msg ${isClicked ? "clicked" : ""}`}>
              <p>URL</p>
              <p>Copied!</p>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const imageDirectory = path.join(process.cwd(), "/public/dr");
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
