import { FC } from "react";

type Props = {
  title: string;
  type: "default" | "withLinkButton" | "withNormalButton";
  href?: "string";
  buttonText?: string;
  onClick?: () => void;
};

const Title: FC<Props> = ({
  title,
  type,
  href,
  buttonText,
  onClick,
}) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>

    </div>
  )
}