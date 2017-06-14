
/*外景 左边 标题onmouseover*/
var Con2_left_ul=document.getElementById("con2-left");
var Con2_left_li=Con2_left_ul.getElementsByTagName("li");
var Con2_right_div=document.getElementsByClassName("carousel slide");
Con2_left_li[0].className="con2-left-bg";
Con2_right_div[0].style.display="block"
function fn(){
	for(var con2=0;con2<Con2_left_li.length;con2++){
		Con2_left_li[con2].className="";
		Con2_right_div[con2].style.display="none";
	}
	console.log(num)
	Con2_left_li[num].className="con2-left-bg";
	Con2_right_div[num].style.display="block";
}
var num=0;
for(var con2=0;con2<Con2_right_div.length;con2++){
		Con2_left_li[con2].index=con2;
		Con2_left_li[con2].onmouseover=function(){
			num=this.index;
			fn();
		}
}
