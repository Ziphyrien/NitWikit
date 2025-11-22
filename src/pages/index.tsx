import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import styles from "./index.module.scss";

interface Stat {
    label: string;
    value: string;
}

interface NavLink {
    title: string;
    description: string;
    to: string;
}

interface MapCard {
    icon: string;
    title: string;
    description: string;
    to: string;
}

interface CommunityItem {
    title: string;
    meta: string;
    description: string;
}

const Home: React.FC = () => {
    const { siteConfig } = useDocusaurusContext();

    const stats: Stat[] = [
        { label: "文档篇章", value: "1200+" },
        { label: "活跃贡献者", value: "50+" }
    ];

    const quickLinks: NavLink[] = [
        { title: "新手入门", description: "了解教程定位、阅读指引与基础要求", to: "/intro" },
        { title: "Java 版核心", description: "高版本 Java 版服务器开服指南", to: "/Java/intro" },
        { title: "基岩版核心", description: "基岩版服务器开服指南", to: "/Bedrock/intro" }
    ];

    const knowledgeMap: MapCard[] = [
        {
            icon: "📚",
            title: "准备工作",
            description: "Java 安装、文本编辑器选择、必备工具与脚本使用。",
            to: "/preparation"
        },
        {
            icon: "🚀",
            title: "开始阶段",
            description: "服务器基础知识、如何选择服务端、如何搭建并连接。",
            to: "/start"
        },
        {
            icon: "🏗️",
            title: "建设阶段",
            description: "插件配置、手机玩家支持、跨服搭建等进阶内容。",
            to: "/process"
        },
        {
            icon: "⚙️",
            title: "进阶教程",
            description: "Linux 运维、Docker 容器化、性能优化与自动化运维。",
            to: "/advance"
        }
    ];

    const communityHighlights: CommunityItem[] = [
        {
            title: "持续更新中",
            meta: "@Community · 进行中",
            description: "文档内容持续更新，跟随最新版本和社区动态。"
        },
        {
            title: "开源协作",
            meta: "@Contributors · 持续",
            description: "欢迎通过 GitHub 提交建议、报告问题或贡献文档。"
        },
        {
            title: "新手友好",
            meta: "@Tutorial · 特点",
            description: "从零开始，手把手教你搭建和运营 Minecraft 服务器。"
        }
    ];
    return (
        <Layout>
            <Head>
                <title>{siteConfig.title}</title>
                <meta name="description" content={siteConfig.tagline} />
            </Head>
            <main className={styles.page}>
                <section className={styles.hero}>
                    <div className={styles.heroCopy}>
                        <h1>Cubic Wiki</h1>
                        <p>
                            主要针对高版本 Java 版和基岩版服务器的开服指南。 从零开始，手把手教你搭建和运营 Minecraft
                            服务器。
                        </p>
                        <div className={styles.heroButtons}>
                            <Link className={styles.primaryButton} to="/intro">
                                立即开始
                            </Link>
                            <Link className={styles.secondaryButton} to="/contribution">
                                参与贡献
                            </Link>
                        </div>
                        <div className={styles.heroMetrics}>
                            {stats.map((item) => (
                                <div key={item.label}>
                                    <strong>{item.value}</strong>
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <aside className={styles.heroPanel}>
                        <div className={styles.panelHeader}>
                            <span>快速导航</span>
                        </div>
                        <ul className={styles.linkList}>
                            {quickLinks.map((item) => (
                                <li key={item.title}>
                                    <Link to={item.to}>
                                        <div>
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                        <span>→</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </aside>
                </section>
            </main>
        </Layout>
    );
};

export default Home;
