	window.addEventListener("DOMContentLoaded", function(){
		
		const CONTENT = document.querySelector("#index-content");		
		const FIRSTBTN = document.querySelector("#mgBtn1");
		const SECONDBTN = document.querySelector("#mgBtn2");
		const THIRDBTN = document.querySelector("#mgBtn3");
		const FORTHBTN = document.querySelector("#mgBtn4");
		const LEFT = document.querySelector("#left");
		const RIGHT = document.querySelector("#right");
		let postIndex = 0;
		let colorBlack = "#000";
		let colorGrey = "#A2BB9E";
		let DNONE = "none";
		let BLOCK = "block";
				
		RIGHT.addEventListener("click", function(){
			postIndex++;
			if (postIndex >= 3) postIndex = 3;
			let coords = -100 * postIndex;
			CONTENT.style.marginLeft = coords + "%";
			if (postIndex == 0) {				
			FIRSTBTN.style.background = colorBlack
			SECONDBTN.style.background = colorGrey
			THIRDBTN.style.background = colorGrey
			FORTHBTN.style.background = colorGrey;
			RIGHT.style.display = BLOCK;			
			LEFT.style.display = DNONE;			
			} else if (postIndex == 1) {				
			FIRSTBTN.style.background = colorGrey
			SECONDBTN.style.background = colorBlack
			THIRDBTN.style.background = colorGrey
			FORTHBTN.style.background = colorGrey;
			RIGHT.style.display = BLOCK;			
			LEFT.style.display = BLOCK;			
			}else if (postIndex == 2) {
			FIRSTBTN.style.background = colorGrey
			SECONDBTN.style.background = colorGrey
			THIRDBTN.style.background = colorBlack
			FORTHBTN.style.background = colorGrey;
			RIGHT.style.display = BLOCK;			
			LEFT.style.display = BLOCK;			
			} else if (postIndex == 3) {
			FIRSTBTN.style.background = colorGrey
			SECONDBTN.style.background = colorGrey
			THIRDBTN.style.background = colorGrey
			FORTHBTN.style.background = colorBlack;
			RIGHT.style.display = DNONE;			
			LEFT.style.display = BLOCK;			
			} 
		})	
		LEFT.addEventListener("click", function(){
			postIndex--;
			if (postIndex <= 0) postIndex = 0;				
			let coords = -100 * postIndex;
			CONTENT.style.marginLeft = coords + "%";
			if (postIndex == 0) {				
			FIRSTBTN.style.background = colorBlack
			SECONDBTN.style.background = colorGrey
			THIRDBTN.style.background = colorGrey
			FORTHBTN.style.background = colorGrey;
			RIGHT.style.display = BLOCK;			
			LEFT.style.display = DNONE;			
			} else if (postIndex == 1) {				
			FIRSTBTN.style.background = colorGrey
			SECONDBTN.style.background = colorBlack
			THIRDBTN.style.background = colorGrey
			FORTHBTN.style.background = colorGrey;
			RIGHT.style.display = BLOCK;			
			LEFT.style.display = BLOCK;			
			}else if (postIndex == 2) {
			FIRSTBTN.style.background = colorGrey
			SECONDBTN.style.background = colorGrey
			THIRDBTN.style.background = colorBlack
			FORTHBTN.style.background = colorGrey;
			RIGHT.style.display = BLOCK;			
			LEFT.style.display = BLOCK;			
			} else if (postIndex == 3) {
			FIRSTBTN.style.background = colorGrey
			SECONDBTN.style.background = colorGrey
			THIRDBTN.style.background = colorGrey
			FORTHBTN.style.background = colorBlack;
			RIGHT.style.display = DNONE;			
			LEFT.style.display = BLOCK;			
			} 
		})	
				
		FIRSTBTN.addEventListener("click", function(){
			let coords = -100 * 0 + "%";
			CONTENT.style.marginLeft = coords;
			postIndex = 0;
			FIRSTBTN.style.background = colorBlack;
			SECONDBTN.style.background = colorGrey;
			THIRDBTN.style.background = colorGrey;
			FORTHBTN.style.background = colorGrey;
			RIGHT.style.display = BLOCK;			
			LEFT.style.display = DNONE;			
		})
		SECONDBTN.addEventListener("click", function(){
			let coords = -100 * 1 + "%";
			CONTENT.style.marginLeft = coords;
			postIndex = 1;
			SECONDBTN.style.background = colorBlack;
			FIRSTBTN.style.background = colorGrey;
			THIRDBTN.style.background = colorGrey;
			FORTHBTN.style.background = colorGrey;
			RIGHT.style.display = BLOCK;			
			LEFT.style.display = BLOCK;			
		})
		THIRDBTN.addEventListener("click", function(){
			let coords = -100 * 2 + "%";
			CONTENT.style.marginLeft = coords;
			postIndex = 2;
			THIRDBTN.style.background = colorBlack;
			FIRSTBTN.style.background = colorGrey;
			SECONDBTN.style.background = colorGrey;
			FORTHBTN.style.background = colorGrey;
			RIGHT.style.display = BLOCK;			
			LEFT.style.display = BLOCK;			
		})
		FORTHBTN.addEventListener("click", function(){
			let coords = -100 * 3 + "%";
			CONTENT.style.marginLeft = coords;
			postIndex = 3;
			FORTHBTN.style.background = colorBlack;
			FIRSTBTN.style.background = colorGrey;
			SECONDBTN.style.background = colorGrey;
			THIRDBTN.style.background = colorGrey;
			RIGHT.style.display = DNONE;			
			LEFT.style.display = BLOCK;			
		})
	})
