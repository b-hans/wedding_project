class galleryItem {
	constructor(largeImage, smallImage){
		this.largeImage = (largeImage.replace(
			"/view?usp=sharing", "")).replace(
			"file/d/","uc?id=");
		this.smallImage = (smallImage.replace(
			"/view?usp=sharing", "")).replace(
			"file/d/","uc?id=");
	}
	
	getLargeImage(){ return this.largeImage; }
	getSmallImage(){ return this.smallImage; }
}


$(document).ready(function(){

	var galleryItemsArray = [
	new galleryItem(
	"https://drive.google.com/file/d/131DojoTFhT0c4C2zKHfcJgAlF8iT0yZ1/view?usp=sharing", 
	"https://drive.google.com/file/d/1zy0CyxKnNlqWVy29EMwk8zQJtl_2EU_5/view?usp=sharing"),
	new galleryItem(
	"https://drive.google.com/file/d/1ZnFsBD7Fl0-klqyjGAkF9VISwmnTa3Xk/view?usp=sharing",
	"https://drive.google.com/file/d/12DT7Lec1-cZdayRAbivhTRmlg624704k/view?usp=sharing"),
	new galleryItem(
	"https://drive.google.com/file/d/1eG5D_eT8SDe-LtAzCv5o9ZHwMhacHURH/view?usp=sharing",
	"https://drive.google.com/file/d/1EGDzeE-mx72IuNQJVCj88OBnOJvLZrrT/view?usp=sharing"),
	new galleryItem(
	"https://drive.google.com/file/d/1oZQ50xa8dHDdSBkztUo0mCMVMj2rwDw4/view?usp=sharing",
	"https://drive.google.com/file/d/1NPyKPN5fdDcHjMvKiiXdWXKgM_mhf0AD/view?usp=sharing"),
	new galleryItem(
	"https://drive.google.com/file/d/181mBNjae2xOmZECBnfy9IjMy4XSMNFqO/view?usp=sharing",
	"https://drive.google.com/file/d/1hLo-6uBg0ex_2vfDk5qihM6tMZFnEMDH/view?usp=sharing"),
	new galleryItem(
	"https://drive.google.com/file/d/1w6f27UY3U39QxBiH3zbj9kMOP1YQJfVL/view?usp=sharing",
	"https://drive.google.com/file/d/1N6emqH72MWQgx7aZRuU4oRlC_9IHeJwE/view?usp=sharing"),
	new galleryItem(
	"https://drive.google.com/file/d/12rGz8WKn_B6FqRproZ12jSoSMueCJ9ey/view?usp=sharing",
	"https://drive.google.com/file/d/1tCpc9epQSvotwXWVbSimldoiylRpYI_a/view?usp=sharing"),
	new galleryItem(
	"https://drive.google.com/file/d/1mabQfkz1Iw1hFFWHqcg9ZABI8bZls5Ua/view?usp=sharing",
	"https://drive.google.com/file/d/1ysH_ulY-YInhJ5-TcpAGFELIGmLKS9zm/view?usp=sharing"),
	new galleryItem(
	"https://drive.google.com/file/d/1jqlRZM2gJo7BKup_fFYw5jkld_I2XAeu/view?usp=sharing",
	"https://drive.google.com/file/d/1uUWyLjrQJ-A3yQ3vYXqJpTTCVdxvzQdp/view?usp=sharing")
	];
	
	var nums = document.getElementById("imgNum");
	
	nums.textContent = "1 of " + galleryItemsArray.length;
		
	document.getElementById("galImg").src = galleryItemsArray[0].getSmallImage();
	document.getElementById("galLink").href = galleryItemsArray[0].getLargeImage();
	
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
					
		var t = document.getElementById("galImg");
		t.src = galleryItemsArray[nextImg].getSmallImage();

		var l = document.getElementById("galLink");
		l.href = galleryItemsArray[nextImg].getLargeImage();
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
			
		var t = document.getElementById("galImg");
		t.src = galleryItemsArray[prevImg].getSmallImage();
		
		var l = document.getElementById("galLink");
		l.href = galleryItemsArray[prevImg].getLargeImage();

	});


});

$("#btn").click(function() {

	var imageArray = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg"];
	
	var message1 = "Booyah brian!";
	var message2 = "Some Spain Images";

	//console.log("Hey now " + $("#sl-inner img").length);
	//console.log("index " + ($('img.active').index() + 1));
	if (document.getElementById("example").textContent == message2){
		$("#title_test").html("<h1 id=\"example\"><b>" + message1 + ": " + imageArray.length + "</b></h1>");
	}else {
		$("#title_test").html("<h1 id=\"example\"><b>" + message2 + "</b></h1>");
	}
	
	var ex1 = document.getElementById("example").textContent;
	
	console.log("Title text is: " + ex1);
});
