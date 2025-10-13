import { useState } from "react";
import { Layout } from "@consta/uikit/Layout";
import { Text } from "@consta/uikit/Text";
import { Modal } from "../Modal/Modal";
import "./HomePage.css";

export const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const vitrinas = [
    { id: 1, src: "/vitrina1.jpg", alt: "Экспозиция музея КВТ - 1" },
    { id: 2, src: "/vitrina2.jpg", alt: "Экспозиция музея КВТ - 2" },
    { id: 3, src: "/vitrina3.jpg", alt: "Экспозиция музея КВТ - 3" },
    { id: 4, src: "/vitrina4.jpg", alt: "Экспозиция музея КВТ - 4" },
    { id: 5, src: "/vitrina5.jpg", alt: "Экспозиция музея КВТ - 5" },
    { id: 6, src: "/vitrina6.jpg", alt: "Экспозиция музея КВТ - 6" },
  ];

  const openModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout direction="column" className="home-page">
      <div className="home-page__content">
        <div className="home-page__header">
          <Text
            as="h1"
            size="4xl"
            weight="bold"
            view="primary"
            className="home-page__title"
          >
            О музее
          </Text>

          <Text
            size="xl"
            view="secondary"
            lineHeight="l"
            className="home-page__description"
          >
            Музей КВТ начал свою работу в 2024 году благодаря инициативе
            сотрудников кафедры Безопасности информационных технологий. Мы
            открыли свои двери на очном этапе Международной Олимпиады по Основам
            сетевых технологий памяти Аверина В.Г. Однако история музея началась
            раньше – экспонаты ранее находились в стенах УРТК им. А.С. Попова в
            Екатеринбурге. Несмотря на трудности, энтузиазм нашей команды
            позволил спасти часть коллекции и продолжить её развитие.
          </Text>
        </div>

        <div className="home-page__gallery">
          {vitrinas.map((vitrina) => (
            <div
              key={vitrina.id}
              className="home-page__gallery-item"
              onClick={() => openModal(vitrina.src)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={vitrina.src}
                alt={vitrina.alt}
                className="home-page__gallery-image"
              />
            </div>
          ))}
        </div>

        <div className="home-page__info">
          <Text
            size="l"
            view="secondary"
            lineHeight="l"
            className="home-page__text"
          >
            Сегодня мы с гордостью представляем новую главу в жизни музея. В
            течение последних шести месяцев мы активно работаем над созданием
            экспозиций, которые не только радуют глаз, но и предлагают глубокие
            знания о мире вычислительной техники.
          </Text>

          <Text
            size="l"
            view="secondary"
            lineHeight="l"
            className="home-page__text"
          >
            Используйте навигацию сверху для просмотра различных категорий
            экспонатов: процессоры, материнские платы и устройства хранения.
            Каждая категория содержит детальную информацию о производителях,
            технических характеристиках и состоянии экспонатов.
          </Text>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={currentImage}
        imageAlt="Экспозиция музея"
      />
    </Layout>
  );
};
