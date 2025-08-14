import Image from "next/image";
import type { Reason } from "@/utils/types";
import { Text } from "@/components/common/Text";
import styles from "./styles/ReasonCard.module.scss";

const ReasonCard = ({ title, description, imgUrl }: Reason) => (
  <div className={styles["reason-card"]}>
    <Text variant="h3" className={styles.title}>
      {title}
    </Text>

    <Text variant="p" className={styles.description}>
      {description}
    </Text>

    <Image
      src={imgUrl}
      alt={title}
      className={styles.img}
      width={70}
      height={70}
    />
  </div>
);

export { ReasonCard };
