let lis = document.querySelectorAll(".wenzi div");
console.log(lis);
let box = document.querySelector(".big-house-box");
lis.forEach((val,index)=>{
	val.onclick = function(){
		box.style.left=-100*index+"vw";
		lis.forEach((ele)=>{
			ele.classList.remove("active");
		})
		this.classList.add("active")
	}
}) 