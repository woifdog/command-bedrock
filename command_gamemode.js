function click_add(){
    tag_array = "[tag="
    var mode = document.getElementById("mode").value;
    var sele = document.getElementById("sele").value;
    var tag = document.getElementById("tag").value;
    var cmdtext = document.getElementById("cmdtext");
    if(tag == ""){
        cmdtext.innerHTML = "/gamemode" + " " + mode + " " + sele;
    }
    else{
        cmdtext.innerHTML = "/gamemode" + " " + mode + " " + sele + tag_array + tag + "]";
    }
}
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
    cmdtext.innerHTML = "/gamemode"
}