import { useState } from "react";
import CardItem from "../UI/CardItem";

const CLogic = () => {
  const [cards, setCards] = useState([
    { id: 1, order: 1, text: "Задача номер 1" },
    { id: 2, order: 2, text: "Задача номер 2" },
    { id: 3, order: 3, text: "Задача номер 3" },
    { id: 4, order: 4, text: "Задача номер 4" },
  ]);

  const [currentCard, setCurrentCard] = useState(null);

  function dragStartHandler(e, card) {
    console.log("drag", card);
    setCurrentCard(card);
  }

  function dragEndHandler(e) {
    e.target.style.background = "white";
  }

  function dragOverHandler(e) {
    e.preventDefault();
    e.target.style.background = "gray";
  }

  function dropHandler(e, card) {
    e.preventDefault();
    console.log("drop", card);
    setCards(
      cards.map((c) => {
        if (c.id === card.id) {
          return { ...c, order: currentCard.order };
        }
        if (c.id === currentCard.id) {
          return { ...c, order: card.order };
        }
        return c;
      })
    );
  }

  function sortCard(a, b) {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  }

  return (
    <div>
      {cards.sort(sortCard).map((card) => (
        <CardItem
          card={card}
          dragStartHandler={dragStartHandler}
          dragEndHandler={dragEndHandler}
          dragOverHandler={dragOverHandler}
          dropHandler={dropHandler}
        />
      ))}
    </div>
  );
};

export default CLogic;
