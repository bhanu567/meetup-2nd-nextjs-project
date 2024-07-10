import { DUMMY_MEETUPS } from "../page";
import MeetupDetails from "../../../components/meetups/MeetUpDetails";
import { path } from "express/lib/application";

function MeetupDetailsPage() {
  return <MeetupDetails datas={DUMMY_MEETUPS} />;
}

export async function getStaticPaths() {
  return {
    fallback: false, //means your path constains all meetupId value,
    // fallback:true, //means your path doesn't constains all meetupId value, it is usefull as it allows you to pregenerates some of the pages(e.g. most visited pages) and regenrates new pages upon request also
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // in getStaticProps, context does not contain req and res, instead it contains some object like params
  const meetupId = context.params.meetupId;
  //fetch some data from API
  return {
    props: {
      meetups: {
        id: meetupId,
        title: "A First Meetup",
        image:
          "https://images.unsplash.com/photo-1461598198498-686a2c168484?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        address: "Wari, Singhia, Samastipur",
        description: "This is a First Meetups!",
      },
    },
  };
}

export default MeetupDetailsPage;
