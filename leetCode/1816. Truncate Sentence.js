// https://leetcode.com/problems/truncate-sentence/submissions/

var truncateSentence = function(s, k) {
    return s.split(" ").slice(0, k).join(" ")
};