import { useState } from "react";
import { Layout } from "@consta/uikit/Layout";
import { Picture } from "@consta/uikit/Picture";
import { Modal } from "../Modal/Modal";
import "./CardPictures.css";

export const CardPictures = ({ guid }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="card-pictures">
      <Layout flex={1}>
        <div className="card-pictures__main">
          <Layout flex={1}>
            <Picture
              src={`/images/${guid}/big0.jpg`}
              alt="Основное фото процессора"
              className="card-pictures__main-image"
              onClick={() => openModal(`/images/${guid}/big0.jpg`)}
            />
          </Layout>
          <Layout flex={1}>
            <Picture
              src={`/images/${guid}/big1.jpg`}
              alt="Дополнительное фото процессора"
              className="card-pictures__main-image"
              onClick={() => openModal(`/images/${guid}/big1.jpg`)}
            />
          </Layout>
        </div>
      </Layout>

      <Layout>
        <div className="card-pictures__preview">
          <Picture
            src={`/images/${guid}/test0.jpg`}
            alt="Превью 1"
            className="card-pictures__preview-image"
            onClick={() => openModal(`/images/${guid}/test0.jpg`)}
          />
          <Picture
            src={`/images/${guid}/test1.jpg`}
            alt="Превью 2"
            className="card-pictures__preview-image"
            onClick={() => openModal(`/images/${guid}/test1.jpg`)}
          />
        </div>
      </Layout>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={currentImage}
        imageAlt="Увеличенное изображение"
      />
    </div>
  );
};
