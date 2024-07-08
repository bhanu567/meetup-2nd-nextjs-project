import MeetupList from "../../components/meetups/MeetupList";
import styles from "./page.module.css";

export const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://unsplash.com/photos/water-falls-on-rocky-ground--aKLylbHIvg",
    address: "Wari, Singhia, Samastipur",
    description: "This is a First Meetups!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://unsplash.com/photos/water-falls-on-rocky-ground--aKLylbHIvg",
    address: "Hirni, KusheswarSthan, Darbhanga",
    description: "This is a First Meetups!",
  },
];

function HomePage() {
  // return <div className={styles.card}> Hi </div>;
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
export default HomePage;
