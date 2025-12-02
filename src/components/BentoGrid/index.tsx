import Link from "@docusaurus/Link";
import React, { ReactNode } from "react";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className = "" }: BentoGridProps) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-(--width-layout) w-full mx-auto p-4 lg:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

interface BentoCardProps {
  className?: string;
  children: ReactNode;
  colSpan?: 1 | 2 | 3 | 4;
  rowSpan?: 1 | 2;
  href?: string;
  delay?: number;
}

export function BentoCard({
  className = "",
  children,
  colSpan = 1,
  rowSpan = 1,
  href,
  delay = 0,
}: BentoCardProps) {
  const Component = href ? Link : "div";
  const props = href ? { to: href } : {};

  // Map spans to Tailwind classes
  const colSpanClass = {
    1: "lg:col-span-1",
    2: "lg:col-span-2",
    3: "lg:col-span-3",
    4: "lg:col-span-4",
  }[colSpan];

  const rowSpanClass = {
    1: "lg:row-span-1",
    2: "lg:row-span-2",
  }[rowSpan];

  return (
    <Component
      {...props}
      className={`
        group relative flex flex-col overflow-hidden rounded-xl border border-border
        bg-surface-1/50 backdrop-blur-md transition-all duration-300
        hover:-translate-y-1 hover:shadow-lg hover:bg-surface-2/50
        ${colSpanClass} ${rowSpanClass} ${className}
        animate-fade-in-up opacity-0
      `}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      {children}
    </Component>
  );
}

export function HeroCard() {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        document.querySelector<HTMLElement>('.DocSearch-Button')?.click();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearchClick = () => {
    document.querySelector<HTMLElement>('.DocSearch-Button')?.click();
  };

  return (
    <div 
      className="lg:col-span-2 lg:row-span-2 flex flex-col justify-center items-center text-center p-8 lg:p-12 animate-fade-in-up opacity-0" 
      style={{ animationDelay: '100ms', animationFillMode: "forwards" }}
    >
      <div className="flex items-center gap-2 mb-4 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
        <span className="text-2xl">👋</span>
        <span className="text-lg font-medium text-subtle">Welcome to the</span>
      </div>
      
      <h1 className="text-5xl lg:text-7xl font-black mb-6 uppercase tracking-tight bg-linear-to-br from-text-primary to-subtle bg-clip-text text-transparent animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        Cubic Wiki
      </h1>
      
      <p className="text-lg lg:text-xl text-subtle mb-10 leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: '250ms' }}>
        主要针对 <span className="text-progressive font-medium italic">高版本 Java 版</span> 和 <span className="text-progressive font-medium italic">基岩版</span> 服务器的开服指南。
        <br className="hidden lg:block" />
        从零开始，手把手教你搭建和运营 Minecraft 服务器。
      </p>

      <div 
        className="w-full max-w-xl relative group cursor-text animate-fade-in-up" 
        style={{ animationDelay: '300ms' }}
        onClick={handleSearchClick}
      >
        {/* Glow effect */}
        <div className="absolute -inset-0.5 bg-linear-to-r from-progressive/20 to-primary-light/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
        
        <div className="relative flex items-center gap-4 px-6 py-4 bg-surface-0 border border-border rounded-full shadow-sm group-hover:border-progressive/50 group-hover:shadow-md transition-all duration-300">
          <svg className="w-5 h-5 text-subtle group-hover:text-progressive transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-subtle text-lg font-medium">Search the Cubic Wiki</span>
          <div className="ml-auto flex items-center gap-1.5 text-xs font-bold text-subtle/50 border border-border/50 rounded-md px-2 py-1 bg-surface-1">
            <span className="font-mono">Ctrl</span>
            <span className="font-mono">Alt</span>
            <span className="font-mono">K</span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  to: string;
  delay?: number;
  icon?: ReactNode;
}

export function FeatureCard({ title, description, to, delay = 200, icon }: FeatureCardProps) {
  return (
    <BentoCard colSpan={1} rowSpan={1} href={to} className="p-6 hover:no-underline" delay={delay}>
      <div className="flex flex-col h-full">
        {icon && <div className="mb-4 text-progressive">{icon}</div>}
        <h3 className="text-xl font-bold text-emphasized mb-2 group-hover:text-progressive transition-colors">
          {title}
        </h3>
        <p className="text-subtle mb-6 grow">{description}</p>
      </div>
    </BentoCard>
  );
}

export function StatsCard() {
  return (
    <BentoCard colSpan={2} rowSpan={1} className="p-6 flex flex-col justify-between hover:no-underline" delay={300} href="/contribution">
      <div className="flex justify-between items-start">
        <div>
          <div
            className="text-lg font-bold text-emphasized group-hover:text-progressive transition-colors mb-2 flex items-center gap-1"
          >
            开始贡献
          </div>
          <p className="text-subtle text-sm mb-4 max-w-[90%]">
            Cubic Wiki 是由社区驱动的文档库。你的每一次编辑都能帮助到更多人！
          </p>
        </div>
      </div>

      <div className="flex items-center mt-auto pt-4 border-t border-border/50">
        <div className="text-center flex-1 border-r border-border/50">
          <div className="text-subtle text-xs mb-1 uppercase tracking-wider">文档数量</div>
          <div className="text-3xl font-bold text-emphasized font-mono">1,200+</div>
        </div>
        <div className="text-center flex-1">
          <div className="text-subtle text-xs mb-1 uppercase tracking-wider">活跃贡献者</div>
          <div className="text-3xl font-bold text-emphasized font-mono">50+</div>
        </div>
      </div>
    </BentoCard>
  );
}
