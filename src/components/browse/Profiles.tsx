import type { Profile } from "@/utils/types";
import { Text } from "@/components/common/Text";
import { Button } from "@/components/common/Button";
import { ProfileCard } from "./ProfileCard";
import styles from "./styles/Profiles.module.scss";

const profiles: Profile[] = [
  {
    imgUrl: "/blue-profile.webp",
    nickname: "José Antonio",
    isActive: true,
  },
  {
    imgUrl: "/blue-profile.webp",
    nickname: "John",
  },
  {
    imgUrl: "/red-profile.webp",
    nickname: "Carlos",
  },
  {
    imgUrl: "/blue-profile.webp",
    nickname: "Andoni",
  },
  {
    imgUrl: "/kids-profile.webp",
    nickname: "Saúl",
  },
];

const Profiles = () => {
  return (
    <div className={styles.profiles}>
      <Text variant="h1" className={styles.title}>
        Who is watching right now?
      </Text>

      <div className={styles["profiles-list"]}>
        {profiles.map(({ imgUrl, nickname, isActive }) => (
          <ProfileCard
            key={nickname}
            imgUrl={imgUrl}
            nickname={nickname}
            isActive={isActive}
          />
        ))}
      </div>

      <Button variant="outline">Manage profiles</Button>
    </div>
  );
};

export { Profiles };
