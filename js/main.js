$(document).ready(function(){

	var imageArray = [
"https://drive.google.com/uc?id=1zy0CyxKnNlqWVy29EMwk8zQJtl_2EU_5", "https://drive.google.com/uc?id=1EGDzeE-mx72IuNQJVCj88OBnOJvLZrrT",
"https://drive.google.com/uc?id=12DT7Lec1-cZdayRAbivhTRmlg624704k",
"https://drive.google.com/uc?id=1NPyKPN5fdDcHjMvKiiXdWXKgM_mhf0AD",
"https://drive.google.com/uc?id=1hLo-6uBg0ex_2vfDk5qihM6tMZFnEMDH",
"https://drive.google.com/uc?id=1N6emqH72MWQgx7aZRuU4oRlC_9IHeJwE",
"https://drive.google.com/uc?id=1tCpc9epQSvotwXWVbSimldoiylRpYI_a",
"https://drive.google.com/uc?id=1ysH_ulY-YInhJ5-TcpAGFELIGmLKS9zm",
"https://drive.google.com/uc?id=1uUWyLjrQJ-A3yQ3vYXqJpTTCVdxvzQdp",
];
	
	var imageLinkArray = [
"https://drive.google.com/uc?id=131DojoTFhT0c4C2zKHfcJgAlF8iT0yZ1", "https://drive.google.com/uc?id=1eG5D_eT8SDe-LtAzCv5o9ZHwMhacHURH",
"https://drive.google.com/uc?id=1ZnFsBD7Fl0-klqyjGAkF9VISwmnTa3Xk",
"https://drive.google.com/uc?id=1oZQ50xa8dHDdSBkztUo0mCMVMj2rwDw4",
"https://drive.google.com/uc?id=181mBNjae2xOmZECBnfy9IjMy4XSMNFqO",
"https://drive.google.com/uc?id=1w6f27UY3U39QxBiH3zbj9kMOP1YQJfVL",
"https://drive.google.com/uc?id=12rGz8WKn_B6FqRproZ12jSoSMueCJ9ey",
"https://drive.google.com/uc?id=1mabQfkz1Iw1hFFWHqcg9ZABI8bZls5Ua",
"https://drive.google.com/uc?id=1jqlRZM2gJo7BKup_fFYw5jkld_I2XAeu",
];
	
  	//var pathName = "file:///Users/b-hans/wedding_project/";
	var pathName = "https://b-hans.github.io/wedding_project/";
	
	var nums = document.getElementById("imgNum");
	
	nums.textContent = "1 of " + imageArray.length;
	
	
	document.getElementById("galImg").src = imageArray[0];

	document.getElementById("galLink").href = imageLinkArray[0];

	
	$('.next').on('click', function(){
	
		var currentImg;
	
		var currentImgName = document.querySelector(".active").src;
		for (i=0; i<imageArray.length; i++){
			if (currentImgName == imageArray[i] || 
				currentImgName == pathName + imageArray[i]){
				currentImg = i;
				break;
			}
		}
		
		if (currentImg == imageArray.length -1)
			nextImg = 0;
		else
			nextImg = currentImg + 1;

		nums.textContent = (nextImg + 1) + " of " + imageArray.length;
					
		var t = document.getElementById("galImg");
		t.src = imageArray[nextImg];

		var l = document.getElementById("galLink");
		l.href = imageLinkArray[nextImg];
	});

	$('.prev').on('click', function(){
	
		var currentImg;
	
		var currentImgName = document.querySelector(".active").src;
		for (i=0; i<imageArray.length; i++){
			if (currentImgName == imageArray[i] || 
				currentImgName == pathName + imageArray[i]){
				currentImg = i;
				break;
			}
		}
		
		if (currentImg == 0)
			prevImg = imageArray.length -1;
		else
			prevImg = currentImg - 1;

		nums.textContent = (prevImg + 1) + " of " + imageArray.length;
			
		var t = document.getElementById("galImg");
		t.src = imageArray[prevImg];
		
		var l = document.getElementById("galLink");
		l.href = imageLinkArray[prevImg];

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
