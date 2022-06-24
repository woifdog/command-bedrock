function click_add(){
    var data = document.getElementById("item_data").value;
    var name = document.getElementById("item_name").value;
    var mode = document.getElementById("item_mode").value;
    var x = document.getElementById("x1").value;
    var y = document.getElementById("y1").value;
    var z = document.getElementById("z1").value;
    var cmdtext = document.getElementById("cmdtext")
    if(data == "")data = "0"
    if(name == "")name = "stone"
    if(x=="")x = "~"
    if(y=="")y = "~"
    if(z=="")z = "~"
    if(mode == ""){
        cmdtext.innerHTML = "/setblock" + " " + x + "" + y + "" + z + " " + name + " " + data;
    }
    else{
        cmdtext.innerHTML = "/setblock" + " " + x + "" + y + "" + z + " " + name + " " + data + " " + mode 
    }
}
function copy(id){
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
    cmdtext.innerHTML = "/setblock"
}