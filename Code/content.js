// 检测当前页面是否为题解页面
if (window.location.href.includes("luogu.com.cn/problem/solution") || 
    (window.location.href.includes("/p/") && window.location.href.includes("/solution"))) {
    
    // 使用 chrome.tabs.update 重定向到提示页面
    chrome.runtime.sendMessage({ action: "redirectToMessagePage" });
}
