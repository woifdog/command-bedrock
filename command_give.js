//變數
nbt_list = [];
can_place = [];
can_destroy = [];
nbt_text = "";
let cmd_text = document.getElementById("cmd_text");

//nbt生成
function nbt(){
    nbt_list = [];
    can_place = [];
    can_destroy = [];

    let no_drop = document.getElementById("no_drop").checked;
    let back_set = document.getElementById("back_change").value;
    let can_place_text = document.getElementById("input_can_place").value;
    let can_destroy_text = document.getElementById("input_can_destroy").value;

    if (can_place_text != ""){
        for (let i = 0 ; i < can_place_text.split(',').length ; i++){
            can_place.push('"' + can_place_text.split(',')[i] + '"');
        }
        nbt_list.push('"minecraft:can_place_on":{"blocks":[' + can_place.toString() + ']}')
    }
    if (can_destroy_text != ""){
        for (let i = 0 ; i < can_destroy_text.split(',').length ; i++){
            can_destroy.push('"' + can_destroy_text.split(',')[i] + '"');
        }
        nbt_list.push('"minecraft:can_destroy":{"blocks":[' + can_destroy.toString() + ']}')
    }

    if (no_drop){
        nbt_list.push('"minecraft:keep_on_death":{}')
    }

    if (back_set == "one"){
        nbt_list.push('"minecraft:item_lock":{"mode":"lock_in_slot"}')
    }else if(back_set == "back"){
        nbt_list.push('"minecraft:item_lock":{"mode":"lock_in_inventory"}')
    }

    return("{" + nbt_list.toString() + "}");
}

//生成
function generate(command_list){
    cmd_text = document.getElementById("cmd_text");
    let target = document.getElementById("input_target").value;
    let item = document.getElementById("input_item_id").value;
    let data = document.getElementById("input_item_data").value;
    let count = document.getElementById("input_item_count").value;

    nbt_text = nbt();

    if (target == "") target = "@s";
    if (item == "") item = "apple";
    if (count == "") count = "1";
    if (data == "") data = "0";

    if (nbt_text == "{}"){
        cmd_text.innerHTML = "give " + target + " " + item + " " + count + " " + data;
    }else{
        cmd_text.innerHTML = "give " + target + " " + item + " " + count + " " + data + " " + nbt_text;
    }
}

//複製
function copy(id) {
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
    cmd_text.innerHTML = "/give"
}