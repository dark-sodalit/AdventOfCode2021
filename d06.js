function d06() {
    div.style.display = 'block';
    var data = d06_input.split(',').map(value => parseInt(value));
    part1.innerText = d06_part1([...data]);
    part2.innerText = d06_part2([...data]);
}

function d06_part1(data) {
    var days = 80;
    var stage = [];
    for (var i = 0; i < 9; i++)
        stage[i] = 0;
    for (var i = 0; i < data.length; i++)
        stage[data[i]]++;
    for (var i = 0; i < days; i++) {
        var temp = stage[0];
        for (var j = 1; j < stage.length; j++)
            stage[j - 1] = stage[j];
        stage[6] += temp;
        stage[8] = temp;
    }
    var result = 0;
    for (var i = 0; i < stage.length; i++)
        result += stage[i];
    return result;
}

function d06_part2(data) {
    var days = 256;
    var stage = [];
    for (var i = 0; i < 9; i++)
        stage[i] = 0;
    for (var i = 0; i < data.length; i++)
        stage[data[i]]++;
    for (var i = 0; i < days; i++) {
        var temp = stage[0];
        for (var j = 1; j < stage.length; j++)
            stage[j - 1] = stage[j];
        stage[6] += temp;
        stage[8] = temp;
    }
    var result = 0;
    for (var i = 0; i < stage.length; i++)
        result += stage[i];
    return result;
}

var d06_test =
`3,4,3,1,2`

var d06_input =
`3,4,1,1,5,1,3,1,1,3,5,1,1,5,3,2,4,2,2,2,1,1,1,1,5,1,1,1,1,1,3,1,1,5,4,1,1,1,4,1,1,1,1,2,3,2,5,1,5,1,2,1,1,1,4,1,1,1,1,3,1,1,3,1,1,1,1,1,1,2,3,4,2,1,3,1,1,2,1,1,2,1,5,2,1,1,1,1,1,1,4,1,1,1,1,5,1,4,1,1,1,3,3,1,3,1,3,1,4,1,1,1,1,1,4,5,1,1,3,2,2,5,5,4,3,1,2,1,1,1,4,1,3,4,1,1,1,1,2,1,1,3,2,1,1,1,1,1,4,1,1,1,4,4,5,2,1,1,1,1,1,2,4,2,1,1,1,2,1,1,2,1,5,1,5,2,5,5,1,1,3,1,4,1,1,1,1,1,1,1,4,1,1,4,1,1,1,1,1,2,1,2,1,1,1,5,1,1,3,5,1,1,5,5,3,5,3,4,1,1,1,3,1,1,3,1,1,1,1,1,1,5,1,3,1,5,1,1,4,1,3,1,1,1,2,1,1,1,2,1,5,1,1,1,1,4,1,3,2,3,4,1,3,5,3,4,1,4,4,4,1,3,2,4,1,4,1,1,2,1,3,1,5,5,1,5,1,1,1,5,2,1,2,3,1,4,3,3,4,3`