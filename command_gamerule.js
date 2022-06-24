function click_add(){
    var boolean = document.getElementById("boolean").value;
    var mode = document.getElementById("mode").value;
    var cmdtext = document.getElementById("cmdtext");
    cmdtext.innerHTML = "/gamerule" + ' ' + mode + ' ' + boolean
}
function copy_Text(id) {
    var node = document.getElementById(id);
    if (document.body.createTextRange) {
        var range = document.body.createTextRange();
        range.moveToElementText(node);
        range.select();
        document.execCommand("copy");
        alert("指令複製成功!");
    } else if (window.getSelection) {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand("copy");
        alert("指令複製成功");
    } else {
        alert('無法複製內容、瀏覽器不支援');       
    }
    window.getSelection().removeAllRanges();
}
function kill(){
    cmdtext.innerHTML = "/gamerule"
}