// code your solution here
function superbowlWin(arr) {
    let win = arr.find(item => item.result === 'W')
    if (win === undefined) {
        return undefined
    } else {
        return win.year;
    }
}
