const var1Node = $('.form-control-1');
const var2Node = $('.form-control-2');
const var3Node = $('.form-control-3');
const var4Node = $('.form-control-4');
const var5Node = $('.form-control-5');
const var6Node = $('.form-control-6');
const speachNode = $('.form-control-speach');

const btnCreate = $('.btn-primary');
const btnReplace = $('.btn-result');
const textNode = $('.form-control-text');


const startObj = {
  "text":[
    "Жили-были {var1} да {var2}",
    "Была у них {var3}",
    "Снесла {var3} {var4}, не простое - золотое",
    "- {var1} бил, бил - не разбил",
    "- {var2} била, била - не разбила",
    "{var5} бежала, {var6} задела, {var4} упало и разбилось.",
    "{var1} плачет, {var2} плачет, а {var3} кудахчет:","{speach}"
  ]
};

btnCreate.click(function() {
  textNode.html(startObj.text);
})

btnReplace.click(function() {
  const var1 = var1Node.val();
  const var2 = var2Node.val();
  const var3 = var3Node.val();
  const var4 = var4Node.val();
  const var5 = var5Node.val();
  const var6 = var6Node.val();
  const speach = speachNode.val();
    
  const newObj = {
    "text":[
      `Жили-были ${var1} да ${var2}`,
      `Была у них ${var3}`,
      `Снесла ${var3} ${var4}, не простое - золотое`,
      `- ${var1} бил, бил - не разбил`,
      `- ${var2} била, била - не разбила`,
      `${var5} бежала, ${var6} задела, ${var4} упало и разбилось.`,
      `${var1} плачет, ${var2} плачет, а ${var3} кудахчет:`,
      `${speach}`,
    ]
  };
  
    
  textNode.html(newObj.text);
})



const dataURL = "https://api.jsonbin.io/b/5e905926172eb643896166e7";

function handleButton() {
  // взять данные по dataUrl, вытащить их и передать в handleData
}

function init() {
	$("#button-fetch").click(handleButton);
}
//function handleData(data) {
  // кажется, какой-то из этих способов сработает
  //const var1 = $("input[name=var1]")[0].value()
  //const var1 = $("input[name=var1]").value()
  //const var1 = $("input[name=var1]")[0].default()

  // надо сделать так чтобы сообщения подменились на значения из формы
  
 //КОММЕНТАРИИ ОСТАВИЛ НА БУДУЩЕЕ


$(document).ready(init);

//$("#result").text(text);