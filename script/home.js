window.addEventListener("DOMContentLoaded", function() {
			
	const burgerCK = document.querySelector("#burger");
	const lineTOP = document.querySelector(".line-top");
	const lineMID = document.querySelector(".line-mid");
	const lineBTM = document.querySelector(".line-btm");
	const toggleSP = document.querySelector("#sidePane");
//	const screen = $(".screen")

	burgerCK.addEventListener("click", function() {
		lineTOP.classList.toggle("ham-top");
		lineMID.classList.toggle("ham-mid");
		lineBTM.classList.toggle("ham-btm");
		toggleSP.classList.toggle("collapsed");
		//toggleSP.innerHTML = "&lt;";
	}); 
})//window.addEventListener

window.addEventListener("scroll",()=>{
	    let RECIPEBALL = document.querySelector("#recipeball-content");
	    let BALLBACK = document.querySelector("#ballBack");
		let contentposition = RECIPEBALL.getBoundingClientRect().top;
	    let screenposition = window.innerHeight / 2;
	    if(contentposition = screenposition){
	        BALLBACK.classList.add("active-overlay");
	    }else{
	        BALLBACK.classList.remove("active-overlay");
	    }
	});




	// 닫기버튼 클릭하면 .item-detail을 보여줘
	// 1. 닫기버튼 지정, 팝업내용 지정
//	const closeBT = document.querySelector("#close");
//	const openBT = document.querySelector("#open");
//	const itemDIV = document.querySelector(".item-detail");

	// 2. 닫기버튼에 할일을 지정 (언제?)

//	openBT.addEventListener("click", function() {
//		itemDIV.classList.remove("d-none");
//	});  // 이벤트 리스너 : 이벤트를 여러가지 (추가)지정
//	closeBT.addEventListener("click", function() {
//		itemDIV.classList.add("d-none");
//	});  // 이벤트 리스너 : 이벤트를 여러가지 (추가)지정

/* ================================================================= */

	// 1. small-img에 마우스가 올려지면
	// 2. big-img에 이미지(id="img1")가 업데이트 된다

//	const smallIMG = document.querySelectorAll(".small-img li");
//	const img1 = document.querySelector("#img1");

//	smallIMG[0].addEventListener("click", function() {
//		//console.log(img1.getAttribute("src"));  // .getAttribute(), .setAttribute
//		console.log("1번 사진을 클릭했습니다")
//		img1.setAttribute("src", "http://picsum.photos/id/1/400")
//	})
//	smallIMG[1].addEventListener("click", function() {
//		console.log("2번 사진을 클릭했습니다")
//		img1.setAttribute("src", "http://picsum.photos/id/10/400")
//	})
//	smallIMG[2].addEventListener("click", function() {
//		console.log("3번 사진을 클릭했습니다")
//		img1.setAttribute("src", "http://picsum.photos/id/100/400")
//	}) 
	

	
	
	
	
	

	
