import React from "react";
import { BentoCard } from "./index";

const historyData = [
    { date: "2025/11/16", title: "新组织 Cubic-Project 建立", color: "bg-rose-500" },
    { date: "2025/4/30", title: "TabooLib-Guide 项目创建!", color: "bg-emerald-500" },
    { date: "2025/4/30", title: "NitWikit star 破 100", color: "bg-amber-400" },
    { date: "2025/4/5", title: "BedrockWiki-CN 项目创建!", color: "bg-emerald-500" },
    { date: "2025/3/31", title: "主页第三次重构", color: "bg-blue-500" },
    { date: "2025/3/29", title: "Talent-Anticheat 项目接手!", color: "bg-emerald-500" },
    { date: "2025/3/8", title: "Invero/Docs 项目接手!", color: "bg-emerald-500" },
    { date: "2025/2/15", title: "PurpurDocs-CN 项目创建!", color: "bg-emerald-500" },
    { date: "2025/2/11", title: "PaperDocs-CN 项目创建!", color: "bg-emerald-500" },
    { date: "2025/1/26", title: "域名更换到 8aka.org", color: "bg-rose-500" },
    { date: "2025/1/22", title: "Pumpkin-CN 项目创建!", color: "bg-emerald-500" },
    { date: "2025/1/11", title: "TypeWriter-CN 项目创建!", color: "bg-emerald-500" },
    { date: "2024/12/21", title: "PluginsWiki 项目创建!", color: "bg-emerald-500" },
    { date: "2024/12/20", title: "Docker-Minecraft 项目创建!", color: "bg-emerald-500" },
    { date: "2024/11/30", title: "8aka-Team 建立!", color: "bg-cyan-400" },
    { date: "2024/11/24", title: "主页第二次重构", color: "bg-blue-500" },
    { date: "2024/11/11", title: "NitWikit VitePress 项目创建!", color: "bg-blue-500" },
    { date: "2024/10/29", title: "切换到 Cloudflare Page", color: "bg-blue-500" },
    { date: "2024/7/27", title: "视频教程创建", color: "bg-blue-500" },
    { date: "2024/7/24", title: "第一/二个友链", color: "bg-blue-500" },
    { date: "2024/6/22", title: "文档目录结构转换为英文", color: "bg-blue-500" },
    { date: "2024/6/8", title: "贡献者达到 20 人", color: "bg-blue-500" },
    { date: "2024/5/11", title: "主页第一次重构", color: "bg-blue-500" },
    { date: "2024/5/2", title: "NitWikit QQ 群建立(公开?)", color: "bg-blue-500" },
    { date: "2024/4/26", title: "启用文档新的域名 yizhan.wiki", color: "bg-rose-500" },
    { date: "2024/4/20", title: "第一个笨蛋脚本!:自动优化", color: "bg-blue-500" },
    { date: "2024/4/14", title: "笨蛋脚本诞生", color: "bg-emerald-500" },
    { date: "2024/4/14", title: "NitWikit Banner 诞生!", color: "bg-blue-500" },
    { date: "2024/4/5", title: "项目名称更改为 NitWikit", color: "bg-blue-500" },
    { date: "2024/3/28", title: "LLF 第一个提交", color: "bg-blue-500" },
    { date: "2024/3/23", title: "第一个有意义提交", color: "bg-blue-500" },
    { date: "2024/3/23", title: "NitWikit 项目创建!", color: "bg-emerald-500" },
    { date: "2024/2/29", title: "lezi-wiki 项目创建!", color: "bg-emerald-500" },
];

export function HistoryCard({ className = "", colSpan = 2 }: { className?: string; colSpan?: 1 | 2 | 3 | 4 }) {
  return (
    <BentoCard colSpan={colSpan} rowSpan={1} className={`p-6 h-64 hover:no-underline ${className}`} delay={400} href="/about/timeline">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-emphasized group-hover:text-progressive transition-colors">发展历程</h3>
        <span className="text-xs font-medium px-2 py-1 rounded-full bg-surface-2 text-subtle">
          {historyData.length} 个里程碑
        </span>
      </div>
      
      <div className="relative h-full overflow-hidden mask-linear-fade">
        {/* Vertical Line */}
        <div className="absolute left-2 top-2 bottom-0 w-0.5 bg-border/50"></div>
        
        <div className="h-full overflow-y-auto pr-2 custom-scrollbar pb-12">
          <div className="space-y-6 pl-6 pt-2">
            {historyData.map((item, index) => (
              <div key={index} className="relative group">
                {/* Dot */}
                <div className={`absolute -left-[21px] top-1.5 h-3 w-3 rounded-full border-2 border-surface-0 ${item.color} shadow-sm group-hover:scale-125 transition-transform duration-300`}></div>
                
                {/* Content */}
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-subtle mb-0.5">{item.date}</span>
                  <span className="text-sm font-medium text-text-primary">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BentoCard>
  );
}
