// 定义多个提示信息
const messages = [
    "写代码要看自己，不要看题解",
    "你是不是又要看题解了？",
    "喂？CCF吗？这里有人看题解！",
    "又看题解？你想不想AKNOI了？",
    "你看看下面，你都打开多少次题解了？？",
    "棕名离你不远喽~",
    "题解，题解，我爱题解！",
    "啊啊啊！！你什么时候才能不看题解！！",
    "金奖正在离你而去~~",
    "好好写代码，不要看题解！！",
    "你好，我是CCF，你被举报了，请自觉离开",
    "你好，我是题解，你被举报了，请自觉离开",
    "你的题解，我吃掉了！！"

];

// 随机选择一个提示信息
const randomIndex = Math.floor(Math.random() * messages.length);
const randomMessage = messages[randomIndex];

// 显示随机提示信息
document.getElementById('message').innerText = randomMessage;

// 获取并显示题解打开次数
chrome.storage.local.get(['solutionCount'], (result) => {
    const count = result.solutionCount || 0;
    document.getElementById('count').innerText = `你已经看了 ${count} 次题解了！！！`;
});
