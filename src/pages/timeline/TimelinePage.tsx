import TimelineWorks from "./works/TimelineWorks";
import TimelineWorldHistory from "./worldHistory/TimelineWorldHistory";

const TimelinePage = () => (
  <main>
    <h1>Timelines</h1>
    <TimelineWorldHistory />
    <TimelineWorks />
  </main>
);

export default TimelinePage;
