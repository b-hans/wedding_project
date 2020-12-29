$(document).ready(function(){

	var imageArray = [
"https://drive.google.com/uc?id=1hkyFDHYSRQCYAtCIRPvkhFbSL5boOnPb", "https://drive.google.com/uc?id=1BXmRZdkZ7FHIRTpTXgAcSwovCd9OVBsC", "https://drive.google.com/uc?id=1Gm8DxcCbRyjCcsH062K1NK1XXtwyDHyq", "https://drive.google.com/uc?id=12h2OGL5FhGMbe6dwDCzbApsAyUTT2Bj3", 
"https://drive.google.com/uc?id=1Xta-5UE3Oczu4yuT40I4jl50spO7UBks",
"https://drive.google.com/uc?id=1C8UoS6dZ5SpqveBUVaVg9RB6cPG3GEC7"
];
	
	var imageLinkArray = [
"https://drive.google.com/uc?id=1FqKpKp02aoWlwlHgzk9EA3BXU5gTYJe3", "https://drive.google.com/uc?id=1Fv57nDVIx-3EmJcPjtkWpUNYGvVEJfFO", "https://drive.google.com/uc?id=1dNwXTkHnlzuzrml8FkbhGwiy9TBEwqSp", 
"https://drive.google.com/uc?id=1aiWz-E6eyVwXJMfxF55EjQfsxwQUAU15",
"https://drive.google.com/uc?id=1TUr5CjmwdsJ-WczzbSXgivBCR7bCFYVK",
"https://drive.google.com/uc?id=1ddtOWEZ9_k41o-YBi3HNpx7u8yfSHSCk"
];
	
  	//var pathName = "file:///Users/b-hans/web_project/";
	var pathName = "https://b-hans.github.io/web_project/";
	
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
