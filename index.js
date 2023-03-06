function submit(){
    var tarmac = document.getElementById("tarmac");
    var lowGoal = document.getElementById("lowGoal");
    var highGoal = document.getElementById("highGoal");
    var chasis = document.getElementById("chasis");
    var notes = document.getElementById("notes");
    var highScore = document.getElementById("paragraph2");
    var lowScore = document.getElementById("paragraph4");
    let jzon = {
        'leftTarmac': `${tarmac.checked}`,
        'lowGoal': `${lowGoal.checked}`,
        'highGoal': `${highGoal.checked}`,
        'chasis': `${chasis.value}`,
        'notes': `${notes.value}`,
        'highScore': `${highScore.innerHTML}`,
        'lowScore': `${lowScore.innerHTML}`
    };
    final = btoa(JSON.stringify(jzon))
    console.log(final)
    document.getElementById('questions').style.display = 'none';
    g = document.createElement('div');
    g.setAttribute("id", "qrcode");
    var qrcode = new QRCode("qrcode", {
        text: `${final}`,
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
}

function increment(pos, inc) {
    if(pos=="high" && inc=="+") {
        var cur = document.getElementById("paragraph2");
        cur.innerHTML = parseInt(cur.innerHTML) + 1;
    } else if (pos=="high") {
        var cur = document.getElementById("paragraph2");
        cur.innerHTML = parseInt(cur.innerHTML) - 1;
    } else if (pos=="low" && inc=="+") {
        var cur = document.getElementById("paragraph4");
        cur.innerHTML = parseInt(cur.innerHTML) + 1;
    } else {
        var cur = document.getElementById("paragraph4");
        cur.innerHTML = parseInt(cur.innerHTML) - 1;
    }
}