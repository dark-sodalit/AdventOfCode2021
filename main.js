var div = document.getElementsByTagName('div')[0];
var part1 = document.getElementById('part1');
var part2 = document.getElementById('part2');

function onChange(element) {
    var index = element.selectedIndex;
    var day = 'd' + (index < 10 ? '0' : '') + index;
    window[day]();
}