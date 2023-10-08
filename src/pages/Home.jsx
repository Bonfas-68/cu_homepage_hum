import { Showcase } from "./Showcase";
import { Description } from "./Description";
import { Events } from "./Events";
import { RecentPosts } from "./RecentPosts";
import { OurMinistries } from "./OurMinistries";
import { OurLeadership } from "./OurLeadership";

export function Home() {
  return (
    <>
      <Showcase />;
      <Description />;
      <Events />;
      <RecentPosts />;
      <OurMinistries />;
      <OurLeadership />;
    </>
  );
}
