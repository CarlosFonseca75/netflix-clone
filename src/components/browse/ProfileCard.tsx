import Image from "next/image";
import classNames from "classnames";
import type { Profile } from "@/utils/types";
import { Text } from "@/components/common/Text";
import styles from "./styles/ProfileCard.module.scss";

const ProfileCard = ({ imgUrl, nickname, isActive }: Profile) => {
  return (
    <div
      className={classNames(styles["profile-card"], {
        [styles.active]: isActive,
      })}
    >
      <div className={styles["img-wrapper"]}>
        <Image
          src={imgUrl}
          alt={`${nickname} profile`}
          className={styles.img}
          priority
          fill
        />
      </div>

      <Text variant="p" className={styles.nickname}>
        {nickname}
      </Text>
    </div>
  );
};

export { ProfileCard };
