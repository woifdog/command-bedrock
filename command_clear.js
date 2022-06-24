//生成
function add_click(){
    var num = document.getElementById("item_num").value
    var name = document.getElementById("item_name").value
    var data = document.getElementById("item_data").value
    var cmd_text = document.getElementById("cmdtext");
    var selector = document.getElementById("selector").value;
    if(selector == ""){selector = "@s"}
    if(num == ""){num = "1"}
    if(data == ""){data = "0"}
    if(name == ""){name = "apple"}
    cmd_text.innerHTML = "/clear" + " " + selector + " " + name + " " + data + " " + num;
}
//複製
function copy(id) {
    node = document.getElementById(id);
    if (document.body.createTextRange) {
        let range = document.body.createTextRange(id);
        range.moveToElementText(node);
        range.select();
        document.execCommand("copy");
        alert("(ﾉ>ω<)ﾉ\n指令複製成功!");
    } else if (window.getSelection) {
        let selection = window.getSelection();
        let range = document.createRange(id);
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand("copy");
        alert("(ﾉ>ω<)ﾉ\n指令複製成功");
    } else {
        alert('( º﹃º )\n無法複製內容、瀏覽器不支援');       
    }
    window.getSelection().removeAllRanges();
}
function kill(){
   document.getElementById("cmdtext").innerHTML = "/clear"
}