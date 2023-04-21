import "../../App.css"

const CardItem = ({ card, dragStartHandler, dragEndHandler, dragOverHandler, dropHandler }) => {
  return (
    <div
      className="cards"
      draggable={true}
      onDragStart={(e) => dragStartHandler(e, card)}
      onDragLeave={(e) => dragEndHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropHandler(e, card)}
    >
      <div>{card.title}</div>
      <div>{card.text}</div>
    </div>
  );
};

export default CardItem;
