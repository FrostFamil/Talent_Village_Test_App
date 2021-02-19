function calculateNumberDivision(number) {
    if(number < 1000) {
        return number;
    } else {
        let newNumber = number/1000;
        return `${parseFloat(newNumber.toFixed(1))}k`;
    }
}

function mergeTags(tags) {
    return tags.join(" | ")
}

export {
    calculateNumberDivision,
    mergeTags
}