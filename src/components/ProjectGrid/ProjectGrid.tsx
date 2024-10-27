"use client";
import React, { useState } from "react";
import styles from "./ProjectGrid.module.scss";

// 카드 데이터 타입 정의
type CardData = {
  id: number;
  title: string;
  description: string;
  issues: string[]; // 각 프로젝트의 이슈 목록 추가
};

// 카드 컴포넌트
function Card({
  title,
  description,
  onClick,
  isActive,
}: {
  title: string;
  description: string;
  onClick: () => void;
  isActive: boolean;
}) {
  return (
    <div
      className={`${styles.card} ${isActive ? styles.activeCard : ""}`}
      onClick={onClick}
    >
      <div className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <p>{description}</p>
        {isActive && (
          <div className={styles.details}>
            <p>이곳에 상세 정보가 표시됩니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}

// 그리드 컴포넌트
export default function ProjectGrid() {
  // 카드 예시 데이터
  const cardData: CardData[] = [
    {
      id: 1,
      title: "프로젝트 1",
      description: "프로젝트 1의 description",
      issues: ["이슈 1-1", "이슈 1-2"],
    },
    {
      id: 2,
      title: "프로젝트 2",
      description: "프로젝트 2의 description",
      issues: ["이슈 2-1", "이슈 2-2"],
    },
    {
      id: 3,
      title: "프로젝트 3",
      description: "프로젝트 3의 description",
      issues: ["이슈 3-1", "이슈 3-2"],
    },
    {
      id: 4,
      title: "프로젝트 4",
      description: "프로젝트 4의 description",
      issues: ["이슈 4-1", "이슈 4-2"],
    },
    {
      id: 5,
      title: "프로젝트 5",
      description: "프로젝트 5의 description",
      issues: ["이슈 5-1", "이슈 5-2"],
    },
    {
      id: 6,
      title: "프로젝트 6",
      description: "프로젝트 6의 description",
      issues: ["이슈 6-1", "이슈 6-2"],
    },
  ];

  const [activeProjectId, setActiveProjectId] = useState<number | null>(null); // 활성화된 프로젝트 ID
  const activeProject = cardData.find(
    (project) => project.id === activeProjectId
  ); // 활성화된 프로젝트 데이터

  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        {cardData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            isActive={activeProjectId === card.id}
            onClick={() =>
              setActiveProjectId(card.id === activeProjectId ? null : card.id)
            }
          />
        ))}
      </div>

      <div className={styles.issueContainer}>
        {activeProject ? (
          <>
            <h4>{activeProject.title}의 이슈 목록</h4>
            <ul>
              {activeProject.issues.map((issue, index) => (
                <li key={index}>{issue}</li>
              ))}
            </ul>
          </>
        ) : (
          <p>프로젝트를 선택하면 이슈가 표시됩니다.</p>
        )}
      </div>
    </div>
  );
}
