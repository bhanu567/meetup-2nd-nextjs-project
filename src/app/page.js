import { revalidatePath } from "next/cache";
import MeetupList from "../../components/meetups/MeetupList";
import styles from "./page.module.css";

export const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://images.unsplash.com/photo-1461598198498-686a2c168484?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: "Wari, Singhia, Samastipur",
    description: "This is a First Meetups!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://images.unsplash.com/photo-1461598198498-686a2c168484?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: "Hirni, KusheswarSthan, Darbhanga",
    description: "This is a First Meetups!",
  },
];

function HomePage() {
  // return <div className={styles.card}> Hi </div>;
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}


//for dynamic regeneration of page at every request on the server
// export async function getServerSideProps(context) {
//   //as in express request and response
//   const req = context.req;
//   const res = context.res;

//   //fetch data from API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }
//for static regeneration of page after every/provided second on the server
export async function getStaticProps() {
  //fetch some data from API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    // revalidate:1, //in seconds
  };
}
export default HomePage;
