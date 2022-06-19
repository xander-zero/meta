// react redux
import { useSelector } from "react-redux";
import Card from "../Card/Card";

const CardList = ({ items, bgColor, color }) => {
  const authSelector = useSelector((state) => state.auth);
  console.log(authSelector);

  return (
    <>
      {items.map((item) => (
        <Card
          bgColor={bgColor}
          key={item.id}
          icon={item.icon}
          title={item.title}
          desc={item.desc}
          color={color}
        />
      ))}
    </>
  );
};
export default CardList;
