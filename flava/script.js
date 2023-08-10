"use strict";
let circleSize = 77.4;
let team = document.querySelector('.team_circle');
let vision = document.querySelector('.vision__img_block');
let path = document.querySelector('.svg_arrow > path');
let changingSlide = false;
let scroll_anims = {
	team: true,
	vision: true,
};
function elementInView(el){
  let bounds = el.getBoundingClientRect();
  return (bounds.top + bounds.height > 0) && (window.innerHeight - bounds.top > 0);
}
async function changeSlide(button){
	if(!changingSlide){
		changingSlide = true;
		let nextSlide;
		if(button == 'right'){
			if(shownSlide == slides.length-1){
				nextSlide = 0;
			}else{
				nextSlide = shownSlide + 1;
			}
		}else if(button == 'left'){
			if(shownSlide == 0){
				nextSlide = slides.length-1;
			}else{
				nextSlide = shownSlide - 1;
			}
		}
		dots[shownSlide].classList.remove('shown_item');
		dots[nextSlide].classList.add('shown_item');
		slides[shownSlide].classList.remove('visible_member');
		await new Promise((resolve) => setTimeout(resolve, 500));
		slides[shownSlide].classList.remove('shown_member');
		slides[nextSlide].classList.add('shown_member');
		await new Promise((resolve) => setTimeout(resolve, 10));
		slides[nextSlide].classList.add('visible_member');
		await new Promise((resolve) => setTimeout(resolve, 500));
		shownSlide = nextSlide;
		changingSlide = false;
	}
}
async function scrollAnim(){
	if(elementInView(team) && scroll_anims.team){
		await new Promise((resolve) => setTimeout(resolve, 500));
		let i = 2;
		let circles = Array.from(document.querySelectorAll('.team_circle'));
		circles.shift();
		for(let circle of circles){
			circle.style.width = circleSize * i + 'px';
			circle.style.height = circleSize * i + 'px';
			circle.style.top = 454.34 - circleSize*(i-1)/2 + 'px';
			circle.style.right = -circleSize*(i-1)/2 + 'px';
			i++;
			await new Promise((resolve) => setTimeout(resolve, 300));
			scroll_anims.team = false;
		}
	}
	if(elementInView(vision) && scroll_anims.vision){
		setTimeout(() => {document.querySelector('.vision__img_2').style.marginTop = 0}, 300);
		scroll_anims.vision = false;
	}

}
if(window.innerWidth >= 1024){
	document.addEventListener('scroll', scrollAnim);
}

document.getElementById('toggle_menu').addEventListener('click', function(){
	document.querySelector('.mobile_menu').classList.toggle('mobile__menu_opened');
});

let slides = document.querySelectorAll('.member_outer');
let dots = document.querySelectorAll('.slider_item');
let shownSlide = 0;
document.getElementById('slider_right').addEventListener('click', () => changeSlide('right'));
document.getElementById('slider_left').addEventListener('click', () => changeSlide('left'));

window.addEventListener('load', function(){
	setTimeout(() => document.getElementById('preloader').remove(), 2000);
});