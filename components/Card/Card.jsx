import Typography from "../Typography/Typography";
import { CardContent, CardImg, Icon, Space } from "./cardStyle";

const Card = ({ icon, title, desc, bgColor, color }) => {
  return (
    <CardContent bgColor={bgColor}>
      <CardImg>
        <Icon>{icon}</Icon>
      </CardImg>
      <Space>
        <Typography size="16px" color={color}>
          {title}
        </Typography>
      </Space>
      <Typography size="12px" weight="400" color={color}>
        {desc}
      </Typography>
    </CardContent>
  );
};

export default Card;
