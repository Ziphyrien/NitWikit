/**
 * TOC 平滑滚动模块
 * 为目录链接添加平滑滚动动画
 */
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

if (ExecutionEnvironment.canUseDOM) {
    // 检查用户是否偏好减少动画
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 获取导航栏高度
    function getNavbarHeight(): number {
        const navbar = document.querySelector<HTMLElement>(".navbar");
        if (navbar) {
            return navbar.offsetHeight;
        }
        // 默认高度
        return 60;
    }

    // 处理 TOC 链接点击
    function handleTOCLinkClick(e: MouseEvent): void {
        const target = e.currentTarget as HTMLAnchorElement;
        const href = target.getAttribute("href");

        // 只处理锚点链接（以 # 开头）
        if (href && href.startsWith("#")) {
            e.preventDefault();

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // 计算偏移量（考虑固定导航栏）
                const navbarHeight = getNavbarHeight();
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 10; // 额外 10px 间距

                // 使用平滑滚动
                if (prefersReducedMotion) {
                    // 如果用户偏好减少动画，使用即时滚动
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "auto"
                    });
                } else {
                    // 使用平滑滚动
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }

                // 更新 URL hash（不触发滚动）
                if (history.pushState) {
                    history.pushState(null, "", href);
                }
            }
        }
    }

    // 初始化：为所有 TOC 链接添加事件监听器
    function initTOCSmoothScroll(): void {
        // 查找所有 TOC 链接
        const tocLinks = document.querySelectorAll<HTMLAnchorElement>(
            ".table-of-contents a[href^='#']"
        );

        tocLinks.forEach((link) => {
            // 移除可能存在的旧监听器
            link.removeEventListener("click", handleTOCLinkClick);
            // 添加新监听器
            link.addEventListener("click", handleTOCLinkClick);
        });
    }

    // 监听 DOM 变化，处理动态加载的 TOC
    function setupTOCObserver(): void {
        const observer = new MutationObserver(() => {
            initTOCSmoothScroll();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // 初始化
    const setupTOCSmoothScroll = (): void => {
        initTOCSmoothScroll();
        setupTOCObserver();
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", setupTOCSmoothScroll);
    } else {
        setupTOCSmoothScroll();
    }
}

