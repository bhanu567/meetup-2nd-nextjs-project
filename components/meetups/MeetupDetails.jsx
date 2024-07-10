"use client";

import { useParams } from "next/navigation";
import Card from "../ui/Card";
import classes from "./MeetupDetails.module.css";

function MeetupDetails(props) {
  const params = useParams();

  let index = props.datas.findIndex((data) => data.id === params.meetupId);
  console.log(index);

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.datas[index].image} alt={props.datas[index].title} />
        </div>
        <div className={classes.content}>
          <h3>{props.datas[index].title}</h3>
          <address>{props.datas[index].address}</address>
          <p>{props.datas[index].description}</p>
        </div>
      </Card>
    </li>
  );
}

export default MeetupDetails;
