# Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

# Assumptions:
# A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
# Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
# Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
# Matches should be case-insensitive, and the words in the result should be lowercased.
# Ties may be broken arbitrarily.
# If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
# Examples:
# "In a village of La Mancha, the name of which I have no desire to call to
# mind, there lived not long since one of those gentlemen that keep a lance
# in the lance-rack, an old buckler, a lean hack, and a greyhound for
# coursing. An olla of rather more beef than mutton, a salad on most
# nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
# on Sundays, made away with three-quarters of his income."

# --> ["a", "of", "on"]


# "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"

# --> ["e", "ddd", "aa"]


# "  //wont won't won't"

# --> ["won't", "wont"]

import heapq
import re

def top_3_words(text):
    all_words = re.findall(r"[a-z']+", text.lower())
    print("Extracted words before filtering:", all_words)

    filtered_words = []
    for word in all_words:
        # Ensure the word contains at least one alphabetic character
        
        if any(char.isalpha() for char in word):
            filtered_words.append(word)

    word_freq = {}
    for word in filtered_words:
        if word not in word_freq:
            word_freq[word] = 0
        word_freq[word] += 1

    top_three_words = []
    for word, freq in word_freq.items():
        heapq.heappush(top_three_words, (-freq, word))

    result = []
    max_results = min(3, len(top_three_words))
    for _ in range(max_results):
        freq, word = heapq.heappop(top_three_words)
        result.append(word)

    print("Top 3 words:", result)
    return result
