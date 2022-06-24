//模式選擇
function model_change(){
    mode = document.getElementById("change").value;
}

//生成
function click_add(){
    model_change()
    let cmd_text = document.getElementById("cmd_text");
    let x1 = document.getElementById("x1").value;
    let y1 = document.getElementById("y1").value;
    let z1 = document.getElementById("z1").value;
    let x2 = document.getElementById("x2").value;
    let y2 = document.getElementById("y2").value;
    let z2 = document.getElementById("z2").value;
    let block = document.getElementById("block").value;
    let data = document.getElementById("data").value;

    if(x1 == "") x1 = "~";
    if(x2 == "") x2 = "~";
    if(y1 == "") y1 = "~";
    if(y2 == "") y2 = "~";
    if(z1 == "") z1 = "~";
    if(z2 == "") z2 = "~";
    if(block == "") block = "stone";
    if(data == "") data = "0";

   if(model = ""){
    cmd_text.innerHTML = "fill " + x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + block + " " + data;
   }
   else {
    cmd_text.innerHTML = "fill " + x1 + " " + y1 + " " + z1 + " " + x2 + " " + y2 + " " + z2 + " " + block + " " + data + " " + mode;
   }
}

//複製
function copyText(id) {
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