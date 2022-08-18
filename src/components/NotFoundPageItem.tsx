import React, { FC } from "react";
import { Link } from "react-router-dom";
import { INotFoundPage } from "../types/types";

const NotFoundPageItem: FC<INotFoundPage> = (props) => {
  const { text, toLink, titleLink } = props;

  return (
    <div>
      <h1 className="text-danger">
        {text} <Link to={toLink}>{titleLink} </Link>
      </h1>
    </div>
  );
};

export default NotFoundPageItem;
