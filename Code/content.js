// 检测当前页面是否为题解页面
if (window.location.href.includes("luogu.com.cn/problem/solution") || 
    (window.location.href.includes("/p/") && window.location.href.includes("/solution"))) {
    
    // 更新题解打开次数
    chrome.storage.local.get(['solutionCount'], (result) => {
        let count = result.solutionCount || 0;
        count++;
        chrome.storage.local.set({ solutionCount: count }, () => {
            // 发送消息以重定向到提示页面
            chrome.runtime.sendMessage({ action: "redirectToMessagePage" });
        });
    });
}
