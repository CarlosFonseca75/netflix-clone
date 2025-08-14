import type { Reason } from "@/utils/types";
import { Text } from "@/components/common/Text";
import { ReasonCard } from "./ReasonCard";
import styles from "./styles/MoreReasons.module.scss";

const reasons: Reason[] = [
  {
    title: "Enjoy on your TV",
    description:
      "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    imgUrl: "/computer.webp",
  },
  {
    title: "Download your shows to watch offline",
    description:
      "Save your favorites easily and always have something to watch.",
    imgUrl: "/down-arrow.webp",
  },
  {
    title: "Watch everywhere",
    description:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    imgUrl: "/telescope.webp",
  },
  {
    title: "Create profiles for kids",
    description:
      "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
    imgUrl: "/faces.webp",
  },
];

const MoreReasons = () => {
  return (
    <div className={styles.reasons}>
      <Text variant="h2" className={styles.title}>
        More Reasons to Join
      </Text>

      <div className={styles["reasons-list"]}>
        {reasons.map(({ title, description, imgUrl }) => (
          <ReasonCard
            key={title}
            title={title}
            description={description}
            imgUrl={imgUrl}
          />
        ))}
      </div>
    </div>
  );
};

export { MoreReasons };
