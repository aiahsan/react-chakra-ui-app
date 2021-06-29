import React from "react";
interface Props {
  color: string;
  width?: string;
  height?: string;
}
const Star=(props: Props) => {
  const { color, width, height } = props;
  return (
    <svg
      width={width ? width : "14"}
      height={height ? height : "13"}
      viewBox={`0 0 ${width ? width : "14"} ${height ? height : "13"}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.00016 10.5134L11.1202 13L10.0268 8.31337L13.6668 5.16004L8.8735 4.75337L7.00016 0.333374L5.12683 4.75337L0.333496 5.16004L3.9735 8.31337L2.88016 13L7.00016 10.5134Z"
        fill={color}
      />
    </svg>
  );
};

export default Star;