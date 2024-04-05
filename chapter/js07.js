"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Chapter case   

      Word Cloud   Generator
      Author: 
      Date:       

      Filename:       js07.js
 */


document.getElementById("getFile").onchange = function()
{
      let uploaded_file = this.files[0];
      try{
            let text = uploaded_file.type.startsWith("text");
            if(!text) {
                  throw uploaded_file.name + " is not a text file"; 
            }

            let reader = new FileReader();
            reader.readAsText(uploaded_file);

            let doc = document.getElementById("wc_document");
            reader.onload = function(){
                  doc.innerHTML = reader.result;
                  let text = doc.textContent;
                  display(text);
            }
      }

      catch(msg){
            window.alert(msg);
      }

      function display(data){
            data = data.toLowerCase();
            data = data.trim();

            let reg_exp = /[^a-zA-Z\s]/g;
            data = data.replace(reg_exp, "");

            for(let i=0; i<stopWords.length; i++){
                  let stop_reg_exp = new RegExp("\\b"+ stopWords[i]+"\\b", "g");
                  data = data.replace(stop_reg_exp, "");
            }

            let words = data.split(/\s+/g);
            words.sort();

            let unique = [ [words[0],1] ];

            let uniqueindex = 0;

            for(let i=1; i<words.length; i++){
                  if(words[i] === words[i-1]){
                        unique[uniqueindex][1]++;
                  }
                  else{
                        uniqueindex++;
                        unique[uniqueindex] = [words[i], 1];
                  }
            }

            unique.sort(sort_func);

            function sort_func(a,b){
                  return b[1]-a[1];
            }

            unique = unique.slice(0, 100);

            let maxcount = unique[0][1];

            unique.sort();

            let sol = document.getElementById("wc_cloud");
            sol.innerHTML = "";

            for(let i=0; i<unique.length; i++){
                  let span = document.createElement("span");
                  span.innerHTML = unique[i][0];
                  span.style.fontSize = unique[i][1]/maxcount + "em";
                  sol.appendChild(span);
            }
      }
};
























/*--- ----------------------------------------------*/
/* Array of words to NOT include in the word cloud */
/*-------------------------------------------------*/

let stopWords = ["a", "about", "above", "across", "after", "afterwards", "again", "against", 
                 "ago", "all", "almost", "alone", "along", "already", "also", "although", 
                 "always", "am", "among", "amongst", "amoungst", "amount", "an", "and", 
                 "another", "any", "anyhow", "anyone", "anything", "anyway", "anywhere", 
                 "are", "around", "as", "at", "back", "be", "became", "because", "become", 
                 "becomes", "becoming", "been", "before", "beforehand", "behind", "being", 
                 "below", "beside", "besides", "between", "beyond", "bill", "both", "bottom", 
                 "but", "by", "call", "came", "can", "cannot", "cant", "case","cases","cause", 
                 "co", "computer", "con", "could", "couldnt", "cry", "de", "describe", "detail", 
                 "do", "does", "doing", "done", "down", "due", "during", "each", "eg", "eight", 
                 "either", "eleven", "else", "elsewhere", "empty", "enough", "etc", "even", 
                 "ever", "every", "everyone", "everything", "everywhere", "except", "few", "fie",
                 "fifteen", "fify", "fill", "find", "fire", "first", "five", "for", "former", 
                 "formerly", "forty", "found", "four", "from", "front", "full", "further", 
                 "get", "give", "go", "had", "has", "hasnt", "have", "he", "held", "having", 
                 "hence", "her", "here", "hereafter", "hereby", "herein", "hereupon", "hers", 
                 "herself", "him", "himself", "his", "how", "however", "hundred", "i", "ie", 
                 "if", "in", "inc", "indeed", "interest", "into", "is", "it", "its", "itself", 
                 "keep", "know", "knows", "knew", "last", "latter", "latterly", "least", "less", 
                 "let", "ltd", "made", "make","many", "may", "me", "meanwhile", "might", "mill", 
                 "mine", "more", "moreover", "most", "mostly", "move", "much", "must", "my", 
                 "myself", "name", "namely", "neither", "never", "nevertheless", "next", 
                 "nine", "no", "nobody", "none", "noone", "nor", "not", "nothing", "now", 
                 "nowhere", "of", "off", "often", "on", "once", "one", "only", "onto", "or", 
                 "other", "others", "otherwise", "our", "ours", "ourselves", "out", "over", 
                 "own", "part", "per", "perhaps", "plainly", "please", "precisely", "put", 
                 "rather", "re", "same", "said", "say", "says", "see", "seem", "seemed", 
                 "seeming", "seems", "serious", "several", "shall", "she", "should", "show", 
                 "side", "since", "sincere", "six", "sixty", "so", "some", "somehow", "someone", 
                 "something", "sometime", "sometimes", "somewhere", "st", "sts", "still", "such", 
                 "system", "take", "ten", "th", "ths", "thx", "than", "that", "the", "their", 
                 "them", "themselves", "then", "thence", "there", "thereafter", "thereby", 
                 "therefore", "therein", "thereupon", "these", "they", "thick", "thin", 
                 "third", "this", "those", "though", "three", "through", "throughout", 
                 "thru", "thus", "to", "together", "too", "top", "toward", "towards", 
                 "twelve", "twenty", "two", "un", "unless", "under", "until", "up", 
                 "upon", "us", "very", "via", "was", "we", "well", "were", "weve", "what", 
                 "whatever", "when", "whence", "whenever", "where", "whereafter", "whereas", 
                 "whereby", "wherein", "whereupon", "wherever", "whether", "which", "while", 
                 "whither", "who", "whoever", "whole", "whom", "whose", "why", "will", 
                 "with", "within", "without", "would", "year", "years", "yet", "you", 
                 "your", "yours", "yourself", "yourselves"];
                 