	window.addEventListener("DOMContentLoaded", function(){
			
		const FIRSTBTN = document.querySelector("#mgBtn1");
		const SECONDBTN = document.querySelector("#mgBtn2");
		const THIRDBTN = document.querySelector("#mgBtn3");
		const MAGAZINES = document.querySelector("#magazine");		
		
		FIRSTBTN.addEventListener("click", function(){
			let coords = -100 * 0 + "%";
			MAGAZINES.style.marginLeft = coords;
		})
		SECONDBTN.addEventListener("click", function(){
			let coords = -100 * 1 + "%";
			MAGAZINES.style.marginLeft = coords;
		})
		THIRDBTN.addEventListener("click", function(){
			let coords = -100 * 2 + "%";
			MAGAZINES.style.marginLeft = coords;
		})
				
		FIRSTBTN.addEventListener("click", function(){
			let colorBlack = "#000";
			let colorGrey = "#A89F9F";
			FIRSTBTN.style.background = colorBlack;
			SECONDBTN.style.background = colorGrey;
			THIRDBTN.style.background = colorGrey;
		})
		SECONDBTN.addEventListener("click", function(){
			let colorBlack = "#000";
			let colorGrey = "#A89F9F";
			SECONDBTN.style.background = colorBlack;
			FIRSTBTN.style.background = colorGrey;
			THIRDBTN.style.background = colorGrey;
		})
		THIRDBTN.addEventListener("click", function(){
			let colorBlack = "#000";
			let colorGrey = "#A89F9F";
			THIRDBTN.style.background = colorBlack;
			FIRSTBTN.style.background = colorGrey;
			SECONDBTN.style.background = colorGrey;
		})
	})

	window.addEventListener("scroll",()=>{
	    let manWoman = document.querySelector("#manWoman");
	    let manImg = document.querySelector("#manImg");
	    let womanImg = document.querySelector("#womanImg");
		let contentposition = manWoman.getBoundingClientRect().top;
	    let screenposition = window.innerHeight / 2;
	    if(contentposition = screenposition){
	        manImg.classList.add("active-man");
	    }else{
	        manImg.classList.remove("active-man");
	    }
	    if(contentposition = screenposition){
	        womanImg.classList.add("active-woman");
	    }else{
	        womanImg.classList.remove("active-woman");
	    }
	});
	
	    
   