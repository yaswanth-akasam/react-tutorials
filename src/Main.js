import React from "react";
import data from "./data";
import Card from "./Card";

export default function Main() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return <section>{cards}</section>;
}
