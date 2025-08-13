import Image from "next/image";
import type { Profile } from "@/utils/types";
import { Text } from "@/components/common/Text";
import styles from "./styles/ProfileCard.module.scss";

const ProfileCard = (props: Profile) => {
  return (
    <div className={styles["profile-card"]}>
      <div className={styles["img-wrapper"]}>
        <Image
          src={props.imgUrl}
          className={styles.img}
          alt={`${props.nickname} profile`}
          fill
        />
      </div>
      <Text variant="p" className={styles.nickname}>
        {props.nickname}
      </Text>
    </div>
  );
};

export { ProfileCard };
