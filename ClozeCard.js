module.exports = ClozeCard

var ClozeCard = function(fullText, cloze) {
    this.cloze = cloze    
    this.fullText = fullText
    this.partial = (fullText - (cloze).val)
}

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");
