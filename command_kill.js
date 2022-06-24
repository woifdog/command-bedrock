//生成
function click_start(){
    var cmd_text = document.getElementById("cmd_text");
    var input_tag = document.getElementById("kill_tag").value;
    var target = document.getElementById("input_target").value;
    if (input_tag != ""){
        cmd_text.innerHTML = "/kill" + " " + target + "[tag=" + input_tag + "]";
        console.log(cmd_text)
    }
    else {
        cmd_text.innerHTML = "/kill" + " " + target;
        console.log(cmd_text)
    }
}
function copyText(id){
    node = document.getElementById(id);
    if (document.body.createTextRange) {
        let range = document.body.createTextRange(id);
        range.moveToElementText(node);
        range.select();
        document.execCommand("copy");
        alert("指令複製成功!");
    } else if (window.getSelection) {
        let selection = window.getSelection();
        let range = document.createRange(id);
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
    cmd_text.innerHTML = "/kill"
}