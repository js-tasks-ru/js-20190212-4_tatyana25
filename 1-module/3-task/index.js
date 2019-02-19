'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
const inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';

function getMinMax(str) {
    let result = {};
    const formatedData = str.replace(/,/g, ' ');
    const numAray = formatedData.split(' ').map(n => parseFloat(n));
    const filteredArray = numAray.filter(n => {
        if (Number(n) === n) return true;
    });

    result.min = Math.min(...filteredArray);
    result.max = Math.max(...filteredArray);

    return result;
}

console.log(getMinMax(inputData));

