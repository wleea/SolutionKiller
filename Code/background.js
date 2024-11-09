chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "resetCount") {
        // 清零计数
        chrome.storage.local.set({ solutionCount: 0 }, () => {
            console.log("题解打开次数已清零");
            sendResponse({ success: true }); // 发送响应
        });
        return true; // 表示将保持消息通道打开，直到 sendResponse 被调用
    }
});