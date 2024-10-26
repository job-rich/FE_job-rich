import { ListItem } from "@/components/common/FileDropView/dummyData";
import React from "react";

import styles from "./ImageView.module.scss";

interface ImagesProps {
  src: string;
  id: string;
}

interface ImageViewProps {
  items: ListItem[];
}

function Images({ src, id }: ImagesProps) {
  return (
    <div className={styles.imgContainer}>
      <img className={styles.img} src={src} alt={`Image ${id}`} />
    </div>
  );
}

export default function ImageView({ items }: ImageViewProps) {
  return (
    <div className={styles.layout}>
      {items.map((item) => (
        <div key={item.id}>
          <Images src={item.image} id={item.id} />
        </div>
      ))}
    </div>
  );
}
