$(document).ready(function(){

	var imageArray = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "https://lh3.googleusercontent.com/skVRfbitWUeleHiZ3KnFLJHwjU4QfwCzk68DruDta7hBcgwl6ek0zdrp6MiyCtOZGp0_wtMAP31lkuM8T5hmP2NDHnKFos8dbUobwRw0YxE-mYaDPHfEJ1S6T7riPn5v06ABvfv3eA=w2400", "https://lh3.googleusercontent.com/Eh915GcuHoiSXICMROpgLoo2sm5LVKYhQz9YukFJ5iL1SvAZNXuZp2bBXOKs-sCiRkxfdsMEqueq0I69k0eX6otuQmxiYOqfwTOtO3Jwy0fnwLTHawloyVEKZP0DIqgH6TW3fqLoxg=w2400", "https://lh3.googleusercontent.com/9aytO6sK_TkhvnXeRefSjncD5193BNvJvNQhx-Sy-4vqOyk3mLe_FR1fZ50AzqOJKAxSSU3tVrt4fkC-RxCpw3VX6-NdLLFEwqJ2102t0S_cZmXuhWIujROEPv9rwWWLlmq2VohqQw=w2400"];
	
  	var pathName = "file:///Users/b-hans/web_project/";
	//var pathName = "https://b-hans.github.io/web_project/";
	
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
			
		var t = document.getElementById("galImg");
		t.src = imageArray[nextImg];

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
			
		var t = document.getElementById("galImg");
		t.src = imageArray[prevImg];

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
