
# https://www.codewars.com/kata/523a86aa4230ebb5420001e1

def anagrams(word, words)
  words.select {|w| w.split('').sort == word.split('').sort}
end