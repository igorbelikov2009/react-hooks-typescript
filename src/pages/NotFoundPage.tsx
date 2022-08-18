import React, { FC, useState } from "react";
import NotFoundPageItem from "../components/NotFoundPageItem";
import { INotFoundPage } from "../types/types";

const notPage = {
  text: "Этой страницы не существует. Иди домой",
  toLink: "/",
  titleLink: "home",
};

const NotFoundPage: FC = () => {
  const [state] = useState<INotFoundPage>(notPage);
  // const buttonHandler = () => {
  //   setState(notPage.text: 'xxxx');
  // };

  return (
    <div className="container">
      <NotFoundPageItem
        text={state.text}
        toLink={state.toLink}
        titleLink={state.titleLink}
      />
      {/* <button className="btn btn-warning" onClick={buttonHandler}>
        new records page
      </button> */}
    </div>
  );
};

export default NotFoundPage;
