class galleryItem {
	constructor(largeImage, smallImage, sWidth, sHeight){
		this.largeImage = (largeImage.replace(
			"/view?usp=sharing", "")).replace(
			"file/d/","uc?id=");
		this.smallImage = (smallImage.replace(
			"/view?usp=sharing", "")).replace(
			"file/d/","uc?id=");
			
		this.sWidth = sWidth;
		this.sHeight = sHeight;
	}
	
	getLargeImage(){ return this.largeImage; }
	getSmallImage(){ return this.smallImage; }
}


$(document).ready(function(){

	var galleryItemsArray = [
	new galleryItem(
	"https://drive.google.com/file/d/131DojoTFhT0c4C2zKHfcJgAlF8iT0yZ1/view?usp=sharing", 
	"https://drive.google.com/file/d/1y4vC-r3DOJn7wozd987lPb99tm4sm40H/view?usp=sharing", 497, 750),
	new galleryItem(
	"https://drive.google.com/file/d/1ZnFsBD7Fl0-klqyjGAkF9VISwmnTa3Xk/view?usp=sharing",
	"https://drive.google.com/file/d/12DT7Lec1-cZdayRAbivhTRmlg624704k/view?usp=sharing", 1000, 662),
	new galleryItem(
	"https://drive.google.com/file/d/1eG5D_eT8SDe-LtAzCv5o9ZHwMhacHURH/view?usp=sharing",
	"https://drive.google.com/file/d/1EGDzeE-mx72IuNQJVCj88OBnOJvLZrrT/view?usp=sharing", 1000, 662),
	new galleryItem(
	"https://drive.google.com/file/d/1oZQ50xa8dHDdSBkztUo0mCMVMj2rwDw4/view?usp=sharing",
	"https://drive.google.com/file/d/10x72ZTNdCVG1Oo8O0_cISAx_VrzL7egG/view?usp=sharing", 497, 750),
	new galleryItem(
	"https://drive.google.com/file/d/181mBNjae2xOmZECBnfy9IjMy4XSMNFqO/view?usp=sharing",
	"https://drive.google.com/file/d/1ZCOoiEbL9q_d8X9IgOZ0g93sUxPies12/view?usp=sharing", 497, 750),
	new galleryItem(
	"https://drive.google.com/file/d/1w6f27UY3U39QxBiH3zbj9kMOP1YQJfVL/view?usp=sharing",
	"https://drive.google.com/file/d/1N6emqH72MWQgx7aZRuU4oRlC_9IHeJwE/view?usp=sharing", 1000, 662),
	new galleryItem(
	"https://drive.google.com/file/d/12rGz8WKn_B6FqRproZ12jSoSMueCJ9ey/view?usp=sharing",
	"https://drive.google.com/file/d/1sSoNh9hqrh1UlYLh0-u-O7lp45AmPvM2/view?usp=sharing", 497, 750),
	new galleryItem(
	"https://drive.google.com/file/d/1mabQfkz1Iw1hFFWHqcg9ZABI8bZls5Ua/view?usp=sharing",
	"https://drive.google.com/file/d/1n50QPsy4LXcEyGIGqLVfEnfDnmSjqB1e/view?usp=sharing", 497, 750),
	new galleryItem(
	"https://drive.google.com/file/d/1jqlRZM2gJo7BKup_fFYw5jkld_I2XAeu/view?usp=sharing",
	"https://drive.google.com/file/d/1jbG2IMAeFxby25FRnR6n9gD4oDjK8cKN/view?usp=sharing", 497, 750)
	];
	
	for (i=0; i<galleryItemsArray.length; i++){
		//console.log(galleryItemsArray[i].getSmallImage());
		
		var img = new Image ();
        img.src = galleryItemsArray[i].getSmallImage();

	}
	
	var nums = document.getElementById("imgNum");
	
	nums.textContent = "1 of " + galleryItemsArray.length;
	
	var iImg = galleryItemsArray[0];
		
	document.getElementById("galImg").src = iImg.getSmallImage();
	document.getElementById("galLink").href = iImg.getLargeImage();
	
	document.getElementById("container").style = "width: " + (iImg.sWidth + 40) + 
		"px; margin : 40px auto; overflow : auto";
		
	document.getElementById("sl-inner").style = "position: relative; " +
		"overflow : hidden; float : left; padding : 3px; border : #666 solid 1px; " + 
		"width: " + iImg.sWidth +  "px; height: " + iImg.sHeight + "px"
	
	document.getElementById("galImg").style = "width: " + iImg.sWidth + 
		"px; height: " + iImg.sHeight + "px";
		
	document.querySelector(".next").style = "float : left; cursor : pointer; " +
		"position : relative; margin-left : -25px; z-index : 100;" + 
		"margin-top: " + ((iImg.sHeight - 40) /2) + "px;";

	document.querySelector(".prev").style = "float : left; cursor : pointer; " +
		"position : relative; margin-right : -25px; z-index : 100;" +
		"margin-top: " + ((iImg.sHeight - 40) /2) + "px;";

	$('.next').on('click', function(){
	
		var currentImg;
	
		var currentImgName = document.querySelector(".active").src;
		for (i=0; i<galleryItemsArray.length; i++){
			if (currentImgName == galleryItemsArray[i].getSmallImage()){
				currentImg = i;
				break;
			}
		}
		
		if (currentImg == galleryItemsArray.length -1)
			nextImg = 0;
		else
			nextImg = currentImg + 1;

		nums.textContent = (nextImg + 1) + " of " + galleryItemsArray.length;
		
		var nImg = galleryItemsArray[nextImg];
					
		var t = document.getElementById("galImg");
		t.src = nImg.getSmallImage();

		var l = document.getElementById("galLink");
		l.href = nImg.getLargeImage();
		
		x1 = document.getElementById("container");
		x2 = document.getElementById("sl-inner");
		
		x1.style.width = (nImg.sWidth + 40) + "px";
		x2.style.width = nImg.sWidth + "px";
		x2.style.height = nImg.sHeight  + "px";
		t.style.width = nImg.sWidth + "px";
		t.style.height = nImg.sHeight + "px";
		
		document.querySelector(".next").style.marginTop = ((nImg.sHeight - 40) / 2) + 
			"px";
		document.querySelector(".prev").style.marginTop = ((nImg.sHeight - 40) / 2) + 
			"px";
				
	});

	$('.prev').on('click', function(){
	
		var currentImg;
	
		var currentImgName = document.querySelector(".active").src;
		for (i=0; i<galleryItemsArray.length; i++){
			if (currentImgName == galleryItemsArray[i].getSmallImage()){
				currentImg = i;
				break;
			}
		}
		
		if (currentImg == 0)
			prevImg = galleryItemsArray.length -1;
		else
			prevImg = currentImg - 1;

		nums.textContent = (prevImg + 1) + " of " + galleryItemsArray.length;
		
		var iImg = galleryItemsArray[prevImg];
			
		var t = document.getElementById("galImg");
		t.src = iImg.getSmallImage();
		
		var l = document.getElementById("galLink");
		l.href = iImg.getLargeImage();
	
		x1 = document.getElementById("container");
		x2 = document.getElementById("sl-inner");
		
		x1.style.width = (iImg.sWidth + 40) + "px";
		x2.style.width = iImg.sWidth + "px";
		x2.style.height = iImg.sHeight + "px";
		t.style.width = iImg.sWidth + "px";
		t.style.height = iImg.sHeight + "px";
		
		document.querySelector(".next").style.marginTop = ((iImg.sHeight - 40) / 2) +
			"px";
		document.querySelector(".prev").style.marginTop = ((iImg.sHeight - 40) / 2) +
			"px";		

	});


});


