import styled from "styled-components";

const Typography = ({
  size,
  color,
  weight,
  children,
  className,
  textAlign,
}) => {
  return (
    <Text
      size={size}
      color={color}
      weight={weight}
      className={className}
      textAlign={textAlign}
    >
      {children}
    </Text>
  );
};

const Text = styled.p`
  color: ${({ color }) => color};
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => size};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "")};
`;

export default Typography;
