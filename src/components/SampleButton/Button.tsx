import { FC } from "react";

type Props = {
  children: string;
  onClick?: () => void;
};

export const Button: FC<Props> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};
