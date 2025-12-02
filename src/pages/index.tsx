import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React, { type ReactNode } from "react";
import { BentoGrid, HeroCard, FeatureCard, StatsCard } from "../components/BentoGrid";
import { HistoryCard } from "../components/BentoGrid/HistoryCard";

export default function Home(): ReactNode {
    const {
        siteConfig: { customFields, tagline },
    } = useDocusaurusContext();
    const { description } = customFields as { description: string };

    return (
        <Layout title={tagline} description={description}>
            <main className="min-h-screen bg-surface-0 pt-(--ifm-navbar-height) pb-16 flex justify-center">
                <BentoGrid>
                    <HeroCard />
                    <FeatureCard 
                        title="Java 版核心" 
                        description="高版本 Java 版服务器开服指南，涵盖基础配置与进阶优化。" 
                        to="/Java/intro" 
                        delay={200}
                    />
                    <FeatureCard 
                        title="基岩版核心" 
                        description="基岩版服务器开服指南，BDS 与 Nukkit 等核心详解。" 
                        to="/Bedrock/intro" 
                        delay={200}
                    />
                    <FeatureCard 
                        title="进阶教程" 
                        description="深入了解服务器维护、插件开发与性能调优。" 
                        to="/advance" 
                        delay={400}
                    />
                    <FeatureCard 
                        title="关于我们" 
                        description="了解 Cubic Wiki 的历史与贡献者名单。" 
                        to="/about/intro" 
                        delay={400}
                    />
                    <StatsCard />
                    <HistoryCard />
                </BentoGrid>
            </main>
        </Layout>
    );
}
