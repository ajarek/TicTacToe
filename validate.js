export class Validation {
    constructor(circle, cross, alert) {
        this.circle = circle
        this.cross = cross
        this.alert = alert
    }
    validationWin() {
        let fieldText = document.querySelectorAll('.field')
        let arr = []
        fieldText.forEach((el) => {
            arr.push(el.innerHTML)
        })
        function isX(element) {
            return (element == 'X');
        }
        function isO(element) {
            return (element == 'O');
        }
        
        if (
            arr.slice(0, 3).every(isO) ||
            arr.slice(3, 6).every(isO) ||
            arr.slice(6, 9).every(isO) ||
            arr[0] == 'O' && arr[3] == 'O' && arr[6] == 'O' ||
            arr[1] == 'O' && arr[4] == 'O' && arr[7] == 'O' ||
            arr[2] == 'O' && arr[5] == 'O' && arr[8] == 'O' ||
            arr[0] == 'O' && arr[4] == 'O' && arr[8] == 'O' ||
            arr[2] == 'O' && arr[4] == 'O' && arr[6] == 'O') {
            this.alert.innerHTML = 'wygrana ' + this.circle
            setTimeout("window.location.reload()", 1000);
        }
        if (
            arr.slice(0, 3).every(isX) ||
            arr.slice(3, 6).every(isX) ||
            arr.slice(6, 9).every(isX) || 
            arr[0] == 'X' && arr[3] == 'X' && arr[6] == 'X' ||
            arr[1] == 'X' && arr[4] == 'X' && arr[7] == 'X' ||
            arr[2] == 'X' && arr[5] == 'X' && arr[8] == 'X' ||
            arr[0] == 'X' && arr[4] == 'X' && arr[8] == 'X' ||
            arr[2] == 'X' && arr[4] == 'X' && arr[6] == 'X') {
            this.alert.innerHTML = 'wygrana ' + this.cross
            setTimeout("window.location.reload()", 1000);
        }

    }
}