"use strict";

function scrambler(x) {
    var str = x.toLowerCase();
    str = str.replace(/a/g, "4")
    str = str.replace(/e/g, "3");
    str = str.replace(/i/g, "1");
    str = str.replace(/o/g, "0");
    str = str.replace(/s/g, "5");
    str = str.replace(/t/g, "7");
    str = str.replace(/b/g, "8");
    str = str.replace(/c/g, "(");
    str = str.replace(/g/g, "6");
    str = str.replace(/z/g, "2");
    str = str.replace(/l/g, "L");
    str = str.replace(/k/g, "|<");
    str = str.replace(/d/g, "|)");
    document.write("<br>" + str + "<br>");
}


    scrambler('"The greatest glory in living lies not in never falling, but in rising every time we fall." -Nelson Mandela');
    scrambler('"The way to get started is to quit talking and begin doing." -Walt Disney');
    scrambler('"Life is what happens when you\'re busy making other plans." -John Lennon');
    scrambler('"Many of life\'s failures are people who did not realize how close they were to success when they gave up." -Thomas A. Edison');
    scrambler('Do you like Green eggs and ham ?I do not like them, Sam-I-am. I do not like Green eggs and ham. -Dr. Seuss');

