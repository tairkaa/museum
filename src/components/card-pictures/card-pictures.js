import { Layout } from "@consta/uikit/Layout";
import { Picture } from "@consta/uikit/Picture";
import "./card-pictures.css";

export const CardPictures = ({ guid }) => {
  return (
    <div className="card-pictures">
      <Layout flex={1}>
        <div className="card-pictures__main">
          <Layout flex={1}>
            <Picture
              src={`/images/${guid}/big0.jpg`}
              alt="Основное фото процессора"
              className="card-pictures__main-image"
            />
          </Layout>
          <Layout flex={1}>
            <Picture
              src={`/images/${guid}/big1.jpg`}
              alt="Дополнительное фото процессора"
              className="card-pictures__main-image"
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
          />
          <Picture
            src={`/images/${guid}/test1.jpg`}
            alt="Превью 2"
            className="card-pictures__preview-image"
          />
        </div>
      </Layout>
    </div>
  );
};
