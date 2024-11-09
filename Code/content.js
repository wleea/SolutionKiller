// 检测当前页面是否为题解页面
if (window.location.href.includes("luogu.com.cn/problem/solution") || 
    (window.location.href.includes("/p/") && window.location.href.includes("/solution"))) {
    
    // 获取当前标签页的 ID
    chrome.runtime.sendMessage({action: "redirectToMessagePage"});
}