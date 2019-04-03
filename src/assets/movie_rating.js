

window.onload = () => {
    const panelRating = document.querySelectorAll('.panel-rating p');

    let heart_score_pair_arr =  [];

    for (let i = 0; i < panelRating.length; i++) {
        let obj = {
            heart: panelRating[i].children[0],
            score: Number(panelRating[i].children[1].innerText),
        }

        heart_score_pair_arr.push(obj);
    }

    heart_score_pair_arr.map(pair => {
        return pair.heart.style.backgroundImage = `
            linear-gradient(
                to top,
                rgba(235,111,85,1) ${pair.score * 10}%,
                rgba(187,187,187,0.7) 0%
            )
        `;
    });
};