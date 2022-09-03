const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});

let delta = 0;
function animate() {
	ctx.fillStyle = 'rgba(0, 0, 0, 0.01)';
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	ctx.fillStyle = 'rgb(255, 0, 0)';
	ctx.beginPath();
	ctx.arc(canvas.width / 2 + Math.sin(delta) * 150, canvas.height / 2 + -Math.tan(Math.cos(Math.sin(delta))) * 230, 20, 0, 2 * Math.PI);
	ctx.fill();

	ctx.beginPath();
	ctx.arc(canvas.width / 2 + -Math.sin(delta) * 70, canvas.height / 2 + -Math.tan(Math.cos(Math.sin(delta))) * 130, 20, 0, 2 * Math.PI);
	ctx.fill();

	ctx.beginPath();
	ctx.arc(canvas.width / 2 + Math.sin(delta / 1.5) * 170, canvas.height / 2, 20, 0, 2 * Math.PI);
	ctx.fill();

	ctx.font = '100px Segoe UI Light';
	ctx.fillText('P P I E', canvas.width / 2 - 130, canvas.height / 2 + 120 + Math.sin(delta / 2) * 8);

	delta += 0.05;

	requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
