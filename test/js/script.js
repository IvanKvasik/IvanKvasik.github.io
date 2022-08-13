var menu = document.querySelector('.mobile-menu');
function showMenu(){
	if(menu.style.height == 0 || menu.style.height == "0px"){
		menu.style.height = "300px";
	}else{
		menu.style.height = "0";
	}
}
/*window.onscroll = function(){
	if(window.innerWidth <= 728){
		var header = document.querySelector('header');
		if(document.documentElement.scrollTop >= header.offsetHeight / 2){
			menu.style.top = header.offsetHeight + 'px';
		}
	}
};*/