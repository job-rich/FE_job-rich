"use client";

import StateDot from "../StateDot/StateDot";
import styles from "./ProfileImage.module.scss";

interface ProfileImageProps {
  src: string | null;
  name?: string;
  size: "group" | "user" | "mini";
  state?: "alarm" | "active" | "inactive" | "default";
}
export default function ProfileImage({
  src,
  name,
  size,
  state = "default",
}: ProfileImageProps) {
  const firstLetter = name ? name.charAt(0) : "";

  return (
    <div
      className={`${styles.container} ${size === "group" ? styles.group : size === "user" ? styles.user : styles.mini}`}
    >
      <div
        className={`${styles.svgWrapper} ${size === "group" ? styles.group : size === "user" ? styles.user : styles.mini}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M0 20C0 4.8 4.8 0 20 0C35.2 0 40 4.8 40 20C40 35.2 35.2 40 20 40C4.8 40 0 35.2 0 20Z"
            fill="#E4E8EE"
          />
          <path
            d="M0.5 20C0.5 12.4215 1.7041 7.603 4.65355 4.65355C7.603 1.7041 12.4215 0.5 20 0.5C27.5785 0.5 32.397 1.7041 35.3464 4.65355C38.2959 7.603 39.5 12.4215 39.5 20C39.5 27.5785 38.2959 32.397 35.3464 35.3464C32.397 38.2959 27.5785 39.5 20 39.5C12.4215 39.5 7.603 38.2959 4.65355 35.3464C1.7041 32.397 0.5 27.5785 0.5 20Z"
            stroke="black"
            strokeOpacity="0.05"
          />
          {src ? (
            <g clipPath="url(#avatarLayout)">
              <image
                href={src}
                x="0"
                y="0"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid slice"
              />
              <path
                d="M0.5 20C0.5 12.4215 1.7041 7.603 4.65355 4.65355C7.603 1.7041 12.4215 0.5 20 0.5C27.5785 0.5 32.397 1.7041 35.3464 4.65355C38.2959 7.603 39.5 12.4215 39.5 20C39.5 27.5785 38.2959 32.397 35.3464 35.3464C32.397 38.2959 27.5785 39.5 20 39.5C12.4215 39.5 7.603 38.2959 4.65355 35.3464C1.7041 32.397 0.5 27.5785 0.5 20Z"
                stroke="black"
                strokeOpacity="0.05"
              />
            </g>
          ) : name ? (
            <text
              x="50%"
              y="55%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontSize="20"
              fontWeight="400"
              fill="#FFF"
            >
              {firstLetter}
            </text>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50%"
              height="50%"
              x="10"
              y="10"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10 11.25C13.1066 11.25 15.625 8.73164 15.625 5.625C15.625 2.51836 13.1066 0 10 0C6.89375 0 4.375 2.51836 4.375 5.625C4.375 8.73164 6.89453 11.25 10 11.25ZM13.7148 12.5H6.25C2.79844 12.5 0 15.298 0 18.75C0 19.4402 0.559766 20 1.21484 20H18.75C19.4402 20 19.9648 19.4402 19.9648 18.75C20 15.2969 17.2031 12.5 13.7148 12.5Z"
                fill="white"
              />
            </svg>
          )}
          <defs>
            <clipPath id="avatarLayout">
              <path
                d="M0 20C0 4.8 4.8 0 20 0C35.2 0 40 4.8 40 20C40 35.2 35.2 40 20 40C4.8 40 0 35.2 0 20Z"
                fill="#E4E8EE"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <StateDot state={state} size={size} />
    </div>
  );
}
