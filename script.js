const music = document.getElementById('bg-music');
const toggleBtn = document.getElementById('toggle-music');
let isPlaying = false;

toggleBtn.addEventListener('click', () => {
    if (isPlaying) {
        music.pause();
        toggleBtn.textContent = '🎵 播放音樂';
    } else {
        music.play();
        toggleBtn.textContent = '🔇 暫停音樂';
    }
    isPlaying = !isPlaying;
});


const secret = document.getElementById('secret-spot');
secret.addEventListener('click', () => {
    alert("你找到藏起來的Yutto啦～🎉🎉🎉\n給你一個大抱抱！(*≧▽≦)");
});

function postMessage() {
    const name = document.getElementById('fan-name').value;
    const msg = document.getElementById('fan-msg').value;
    if (!name || !msg) return;

    const li = document.createElement('li');
    li.textContent = `${name}：${msg}`;
    document.getElementById('message-board').appendChild(li);

    localStorage.setItem('messages', document.getElementById('message-board').innerHTML);
}

window.onload = () => {
    // 顯示留言
    document.getElementById('message-board').innerHTML = localStorage.getItem('messages') || "";

    // 訪客計數器
    let count = localStorage.getItem('visitor-count') || 0;
    count++;
    localStorage.setItem('visitor-count', count);
    document.getElementById('visitor-count').textContent = count;
};