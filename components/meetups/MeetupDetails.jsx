"use client";

import { useParams } from "next/navigation";
import Card from "../ui/Card";
import classes from "./MeetupDetails.module.css";

function MeetupDetails(props) {
  const params = useParams();

  let obj = "";
  props.datas.forEach((data) => {
    if (data.id === params.meetupId) {
      obj = data;
    }
  });

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={obj.image} alt={obj.title} />
        </div>
        <div className={classes.content}>
          <h3>{obj.title}</h3>
          <address>{obj.address}</address>
        </div>
      </Card>
    </li>
  );
}

export default MeetupDetails;
