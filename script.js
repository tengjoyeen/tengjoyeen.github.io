let background = document.getElementsByClassName('card');
for (let i = 0; i < background.length; i++ ) {
    const colors = ['#E0BBE4', '#EDB4A1', '#D291BC', '#FEC8D8','#FFDFD3', '#FF83A9'];
    let random_color = colors[Math.floor(Math.random() * colors.length)];
    background[i].style.backgroundColor = random_color;
}
