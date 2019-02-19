/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
const m = +prompt('Введите число x - любое целое число больше 0', '');
const n = +prompt('Введите степень n - любое целое число больше 0', '');
let result;

function pow (m, n) {
    result = 1;
    for (let i = 1; i <= n; i++) {
        result *= m;
    }

    return result;
}

alert(pow(m, n));