// your code here!function clickAnalyze() {  $('button').click(function(event){    event.preventDefault();    $(".text-report").removeClass("hidden");    var wholeText = $("#user-text").val().split(/[ ',.\s]+/);    //console.log(textToCount.length);        // function call - word count    var wordFrequencies = getWordFrequencies(wholeText);    // function call - calculate text length - create one string    var lengthOfText = getTextLength($("#user-text").val());    //console.log(lengthOfText);    // function call - average word length    var averageWordLength = getAverageWordLength(wholeText,lengthOfText);    //console.log(averageWordLength);        // Number of sentences - count occurences of \s    var numberSentences = $("#user-text").val().split(/[\n]+/);    //console.log(numberSentences.length);        // function call - Average sentence length        var averageSentenceLength = getAverageSentenceLength(lengthOfText,numberSentences)         $(".js-word-count").text(wholeText.length);    $(".js-unique-word-count").text(Object.keys(wordFrequencies).length);    $(".js-word-length").text(averageWordLength);    $(".js-sentence-length").text(averageSentenceLength);          });}// Function to calculate number of wordsfunction getWordFrequencies(inputText) {    // build object to count unique words    var wordFrequencies = {}; //object    for (var i=0; i < inputText.length; i++) {      //console.log(textToCount[i])      if(inputText[i] in wordFrequencies){        wordFrequencies[inputText[i]]++;      } else {         wordFrequencies[inputText[i]] = 1;      }    }  return wordFrequencies;}// Function to calculate total length of textfunction getTextLength(inputText) {  var textLength = inputText.replace(/[ ',.\s]+/g,"").length  return textLength;}// Function to calculate average word lengthfunction getAverageWordLength(inputText,lengthOfText) {  var averageWordLength = lengthOfText / inputText.length  return averageWordLength;}// Function to calculate average sentence lengthfunction getAverageSentenceLength(inpuText,inputSentence) {  var averageSentenceLength = inpuText / inputSentence.length  //console.log(inputSentence);   return averageSentenceLength;}  $(clickAnalyze);