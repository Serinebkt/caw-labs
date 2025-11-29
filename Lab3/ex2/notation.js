function mean(scores) {
    if (scores.length === 0) return 0;
    
    let sum = 0;
    for (let score of scores) {
        sum += score;
    }
    return sum / scores.length;
}

// Export pour pouvoir l'importer
module.exports = { mean };