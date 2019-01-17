//页面跳转
let leftbox = document.querySelector(".middle .left")
let leftheight = leftbox.offsetHeight;                         //左盒子的高度是左盒子自身的高度
let leftlis = document.querySelectorAll(".middle .left div")        //伪数组
let leftliheight = leftlis[0].offsetHeight;                    //左盒子每一个li的高度是左盒子每一个li自身的高度
let size = leftheight - leftliheight*3;                        //左盒子的高度 - 每一个li*3的高度（考虑到头部底部的高度）等于一频的高度
let rightbox = document.querySelector(".middle .right")
let rightlis = document.querySelectorAll(".middle .right .big-box")        //伪数组
let flag = true;                    //做一个标记
leftlis.forEach(function(val,index){                      //遍历左面的li
	val.onclick = function(){                             //给左边加一个单击事件
		flag = false;
		rightbox.scrollTop = rightlis[index].offsetTop;        //右盒子的滚动位置等于距离右盒子每一个li的顶部的距离
		leftlis.forEach(function(ele){
			ele.classList.remove("active");                //取消每一个左li的选中
		})
		this.classList.add("active");                     //给某一个单击事件添加一个左li的选中 
		leftbox.scrollTop = this.offsetTop - size;        //左盒子滚动位置等于左面li距离顶部的高度 - (左盒子的高度 - 每一个li*3的高度)
		setTimeout(function(){
			flag = true;
		},10)
	}
})
rightbox.onscroll = function(){                           //
	if(flag){
		rightlis.forEach(function(val,index){
			if(rightbox.scrollTop>=val.offsetTop&&rightbox.scrollTop<val.offsetTop+val.offsetHeight){
				leftlis[index].classList.add("active")
				leftbox.scrollTop = leftlis[index].offsetTop - size;
			}else{
				leftlis[index].classList.remove("active")
			}
		})
	}
}
