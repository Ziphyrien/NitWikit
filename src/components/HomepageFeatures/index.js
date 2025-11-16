import React from "react";
import styles from "./styles.module.css";

const features = [
  {
    title: "简单易懂",
    description: "从零开始的教程，新手友好",
  },
  {
    title: "内容全面",
    description: "涵盖 Java 版和基岩版所有内容",
  },
  {
    title: "持续更新",
    description: "跟随最新版本和社区动态",
  },
];

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <h2 className={styles.title}>为什么选择 Cubic Wiki</h2>
      <div className={styles.grid}>
        {features.map((feature, idx) => (
          <div key={idx} className={styles.card}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
