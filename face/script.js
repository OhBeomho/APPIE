const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

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
	ctx.arc(canvas.width / 2 - 50, canvas.height / 2 - 50, 15, 0, 2 * Math.PI);
	ctx.fill();

	ctx.beginPath();
	ctx.arc(canvas.width / 2 + 50, canvas.height / 2 - 50, 15, 0, 2 * Math.PI);
	ctx.fill();

	ctx.beginPath();
	ctx.arc(canvas.width / 2 + Math.sin(delta) * 60, canvas.height / 2 + Math.tan(Math.cos(Math.sin(delta))) * 30, 15, 0, 2 * Math.PI);
	ctx.fill();

	delta += 0.05;

	requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
