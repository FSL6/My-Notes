// 获取便签内容
function saveNote() {
    const note = document.getElementById('note').value;
    localStorage.setItem('note', note); // 存储到本地存储
}

// 页面加载时，读取便签内容
window.onload = function() {
    const savedNote = localStorage.getItem('note');
    if (savedNote) {
        document.getElementById('note').value = savedNote;
    }
}
