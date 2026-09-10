import { PropsWithChildren } from "react";
import classes from "./Card.module.css";

export function Card({ children }: PropsWithChildren) {
  return <div className={classes.card}>{children}</div>;
}
