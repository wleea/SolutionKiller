let titleClickCount = 0; // 用于跟踪标题点击次数

// 点击标题时增加计数
document.getElementById('title').addEventListener('click', () => {
    titleClickCount++; // 增加标题点击次数
});

// 点击描述时触发清零操作
document.getElementById('description').addEventListener('click', resetCount);

function resetCount() {
    if (titleClickCount >= 7) { // 检查标题点击次数是否达到7次
        chrome.runtime.sendMessage({ action: "resetCount" }, (response) => {
            if (chrome.runtime.lastError) {
                console.error("Error sending message:", chrome.runtime.lastError);
                alert("清零次数时发生错误");
                return;
            }
            if (response && response.success) {
                alert("题解打开次数已清零");
                titleClickCount = 0; // 清零标题点击次数
            } else {
                alert("清零次数时发生错误");
            }
        });
    }
}