const testInput  = '0: 4 1 5\n' +
    '1: 2 3 | 3 2\n' +
    '2: 4 4 | 5 5\n' +
    '3: 4 5 | 5 4\n' +
    '4: "a"\n' +
    '5: "b"\n' +
    '\n' +
    'ababbb\n' +
    'bababa\n' +
    'abbbab\n' +
    'aaabbb\n' +
    'aaaabbb';

const testInput2 = '42: 9 14 | 10 1\n' +
    '9: 14 27 | 1 26\n' +
    '10: 23 14 | 28 1\n' +
    '1: "a"\n' +
    '11: 42 31\n' +
    '5: 1 14 | 15 1\n' +
    '19: 14 1 | 14 14\n' +
    '12: 24 14 | 19 1\n' +
    '16: 15 1 | 14 14\n' +
    '31: 14 17 | 1 13\n' +
    '6: 14 14 | 1 14\n' +
    '2: 1 24 | 14 4\n' +
    '0: 8 11\n' +
    '13: 14 3 | 1 12\n' +
    '15: 1 | 14\n' +
    '17: 14 2 | 1 7\n' +
    '23: 25 1 | 22 14\n' +
    '28: 16 1\n' +
    '4: 1 1\n' +
    '20: 14 14 | 1 15\n' +
    '3: 5 14 | 16 1\n' +
    '27: 1 6 | 14 18\n' +
    '14: "b"\n' +
    '21: 14 1 | 1 14\n' +
    '25: 1 1 | 1 14\n' +
    '22: 14 14\n' +
    '8: 42\n' +
    '26: 14 22 | 1 20\n' +
    '18: 15 15\n' +
    '7: 14 5 | 1 21\n' +
    '24: 14 1\n' +
    '\n' +
    'abbbbbabbbaaaababbaabbbbabababbbabbbbbbabaaaa\n' +
    'bbabbbbaabaabba\n' +
    'babbbbaabbbbbabbbbbbaabaaabaaa\n' +
    'aaabbbbbbaaaabaababaabababbabaaabbababababaaa\n' +
    'bbbbbbbaaaabbbbaaabbabaaa\n' +
    'bbbababbbbaaaaaaaabbababaaababaabab\n' +
    'ababaaaaaabaaab\n' +
    'ababaaaaabbbaba\n' +
    'baabbaaaabbaaaababbaababb\n' +
    'abbbbabbbbaaaababbbbbbaaaababb\n' +
    'aaaaabbaabaaaaababaa\n' +
    'aaaabbaaaabbaaa\n' +
    'aaaabbaabbaaaaaaabbbabbbaaabbaabaaa\n' +
    'babaaabbbaaabaababbaabababaaab\n' +
    'aabbbbbaabbbaaaaaabbbbbababaaaaabbaaabba';

const realInput = '53: 21 35 | 84 72\n' +
    '129: 72 68 | 35 97\n' +
    '29: 110 35 | 45 72\n' +
    '12: 26 72 | 2 35\n' +
    '101: 72 103 | 35 52\n' +
    '5: 40 35 | 49 72\n' +
    '94: 35 57 | 72 58\n' +
    '87: 86 72 | 69 35\n' +
    '1: 63 35 | 61 72\n' +
    '119: 96 35\n' +
    '59: 35 96 | 72 118\n' +
    '14: 96 35 | 74 72\n' +
    '20: 78 72 | 26 35\n' +
    '120: 72 35 | 72 72\n' +
    '82: 51 72 | 93 35\n' +
    '104: 35 36 | 72 106\n' +
    '96: 35 72 | 72 72\n' +
    '25: 89 35\n' +
    '130: 56 35 | 14 72\n' +
    '57: 35 112 | 72 21\n' +
    '24: 38 35 | 95 72\n' +
    '126: 72 35 | 35 35\n' +
    '39: 35 41 | 72 46\n' +
    '113: 127 35 | 22 72\n' +
    '114: 72 87 | 35 129\n' +
    '3: 72 107 | 35 132\n' +
    '64: 72 98 | 35 9\n' +
    '124: 80 35 | 126 72\n' +
    '117: 35 80 | 72 120\n' +
    '122: 72 1 | 35 43\n' +
    '11: 42 31\n' +
    '76: 58 72 | 71 35\n' +
    '52: 99 96\n' +
    '84: 35 35\n' +
    '88: 35 37 | 72 106\n' +
    '67: 118 72 | 80 35\n' +
    '43: 19 72 | 91 35\n' +
    '4: 113 72 | 23 35\n' +
    '85: 72 80 | 35 15\n' +
    '36: 112 35 | 118 72\n' +
    '32: 72 112 | 35 79\n' +
    '62: 35 77 | 72 81\n' +
    '23: 25 35 | 6 72\n' +
    '116: 96 35 | 112 72\n' +
    '8: 42\n' +
    '105: 131 35 | 15 72\n' +
    '27: 84 72 | 15 35\n' +
    '133: 72 104 | 35 76\n' +
    '16: 72 72\n' +
    '22: 72 112 | 35 80\n' +
    '37: 15 35\n' +
    '41: 120 35 | 112 72\n' +
    '91: 72 82 | 35 88\n' +
    '109: 35 100 | 72 34\n' +
    '15: 35 72 | 35 35\n' +
    '92: 35 18 | 72 50\n' +
    '110: 35 4 | 72 114\n' +
    '123: 35 112 | 72 120\n' +
    '46: 72 16 | 35 120\n' +
    '26: 120 72 | 96 35\n' +
    '83: 123 72 | 33 35\n' +
    '111: 90 35 | 94 72\n' +
    '10: 72 101 | 35 130\n' +
    '45: 133 72 | 111 35\n' +
    '77: 10 72 | 125 35\n' +
    '90: 35 44 | 72 105\n' +
    '99: 72 | 35\n' +
    '93: 112 35 | 112 72\n' +
    '13: 32 35 | 124 72\n' +
    '56: 72 96 | 35 15\n' +
    '61: 72 73 | 35 28\n' +
    '6: 99 74\n' +
    '58: 72 120 | 35 16\n' +
    '95: 72 80 | 35 96\n' +
    '60: 99 21\n' +
    '63: 72 20 | 35 83\n' +
    '42: 72 122 | 35 29\n' +
    '38: 120 72 | 16 35\n' +
    '51: 131 35 | 16 72\n' +
    '17: 35 84 | 72 84\n' +
    '131: 99 99\n' +
    '100: 115 35 | 117 72\n' +
    '55: 35 2 | 72 116\n' +
    '21: 99 72 | 35 35\n' +
    '89: 72 72 | 35 35\n' +
    '34: 22 72 | 85 35\n' +
    '18: 96 35 | 131 72\n' +
    '75: 5 72 | 108 35\n' +
    '108: 3 72 | 102 35\n' +
    '49: 72 117 | 35 127\n' +
    '102: 35 132 | 72 41\n' +
    '0: 8 11\n' +
    '79: 72 35\n' +
    '19: 72 12 | 35 92\n' +
    '71: 21 35\n' +
    '98: 35 15 | 72 131\n' +
    '81: 35 109 | 72 70\n' +
    '106: 72 131 | 35 16\n' +
    '30: 67 35 | 115 72\n' +
    '50: 15 99\n' +
    '86: 35 112\n' +
    '69: 72 21 | 35 89\n' +
    '2: 35 21 | 72 80\n' +
    '73: 35 60 | 72 59\n' +
    '33: 72 15 | 35 118\n' +
    '70: 72 121 | 35 30\n' +
    '31: 35 62 | 72 54\n' +
    '65: 24 72 | 55 35\n' +
    '127: 35 15 | 72 74\n' +
    '118: 35 35 | 72 99\n' +
    '78: 15 72 | 96 35\n' +
    '68: 72 89 | 35 120\n' +
    '112: 35 72\n' +
    '7: 65 35 | 48 72\n' +
    '44: 74 72 | 80 35\n' +
    '115: 35 128 | 72 74\n' +
    '74: 35 72 | 99 35\n' +
    '125: 35 64 | 72 47\n' +
    '40: 98 35 | 17 72\n' +
    '121: 72 53 | 35 119\n' +
    '103: 72 15 | 35 126\n' +
    '9: 35 16 | 72 84\n' +
    '97: 84 35 | 16 72\n' +
    '80: 35 72 | 72 35\n' +
    '47: 35 66 | 72 106\n' +
    '28: 50 35 | 27 72\n' +
    '107: 80 72 | 126 35\n' +
    '128: 72 35 | 99 72\n' +
    '132: 35 80 | 72 118\n' +
    '54: 75 35 | 7 72\n' +
    '66: 72 84 | 35 89\n' +
    '48: 39 35 | 13 72\n' +
    '35: "a"\n' +
    '72: "b"\n' +
    '\n' +
    'bababbaaaabbaaaaabbbbaab\n' +
    'bbbaaaaabababaabbbbaabab\n' +
    'bbaaababbaaaaaaaaabbabba\n' +
    'baaabbbaabaabbabbabbbbaaaabbabab\n' +
    'bbbabbbaaababbbaaaabaaababababbabbabbbabbbabaaabbbaabbbb\n' +
    'aaaaaaaabbabbabaabbabbab\n' +
    'bbaabbababbabaaaababababaabbbaab\n' +
    'bbabbababbaabaabaabbaaab\n' +
    'baaabbbbaababbabaaabaaba\n' +
    'baabbabaaaabbaabbaaabaaa\n' +
    'babbbbaabbabbbabbbabbabbbbbbbabb\n' +
    'aabbaaaabababbabbabbaababbaababa\n' +
    'babbabbbbaabaaabaaaaabbb\n' +
    'bbbabbbababaaababbababab\n' +
    'ababaaabbabbbabaaaabbbba\n' +
    'aabbaaaaabbbbbabbbbbabbbbbbaaaaaaabbabba\n' +
    'abbbaabbaabbabaaaabbaaab\n' +
    'babbaababbaaaabbaaaaabab\n' +
    'babbbbbaabaababbaaabbabb\n' +
    'aaabbaabaabaababbaabaaba\n' +
    'abaaaaabbbbaaaaaaaaaabbb\n' +
    'aabbbaabaabbabbbbaaababababaabaaabaababbabbababbaabaabbababaaaba\n' +
    'bbaabaaabaaabbbbbaaaaaab\n' +
    'abbbbbaaaabaaababbbbabba\n' +
    'aabbbbababbbaabbabaabbab\n' +
    'aaaaaabbabbabbaabaaabbaa\n' +
    'aaabbbbbbbabbabaabaaaaba\n' +
    'bbababaabaababbbbabababbbababaabbbbaaaba\n' +
    'aaaaaababbaabbababbaabbb\n' +
    'babbababaaaabbabbabbbaabbbbbbbaabbaababa\n' +
    'bbbaabbbabbbaaaaabbbaaba\n' +
    'bbbaabbaaabaabababababab\n' +
    'bbbbbaaaaabbbbbbaabbbaab\n' +
    'aababaababbabbbbbabbabba\n' +
    'bbbaabbbaaaaabbabbbbabba\n' +
    'abbaaaabbbbbbaaababababbbabbbabaaababaaa\n' +
    'aaaabaababbabbaababbbbaa\n' +
    'aaaaaabbbbbbabbbbaababaa\n' +
    'baabbbabababbbbbbababaababaabaabbaababaaabbbbbaabbabaabbbbabbaab\n' +
    'ababbbbabaaabbbbbabbaaab\n' +
    'babaababababbbababbbbbba\n' +
    'baaababbbaabbababbabaaaaaaaabbbaabaabbbabbbaabbbaababaaabababbbbabaaaabb\n' +
    'baabaaabaabbbbababaabaaa\n' +
    'aabbaababbbaabababaaabaaabbabbbbabbaabaababaabbb\n' +
    'bbbbabbbbaabababbbbbbbabaaaaabba\n' +
    'babbabbbbababaaaabaaabaa\n' +
    'aababbbaaababababbbbaaaa\n' +
    'babbbaabbaababbbbbbababbbaabbabbaaabbaaa\n' +
    'baababaaaaabbbbbaabbabbbabbbbabaabbbaababbabbbbaabaaabaa\n' +
    'bbaabbaababbbabbabaabaaa\n' +
    'aabaaabaabaabbaaabbbbbba\n' +
    'aaabaaabbaabbbbabbabaaab\n' +
    'babbbbbabaababbbbaababbbbabbaaab\n' +
    'ababbaaabaaababbbabaabaa\n' +
    'aaabbaababbbbbabababaaaa\n' +
    'ababbbababaaaaabbbaaaaba\n' +
    'abbbbbbbaaaaabaaabaaaaba\n' +
    'bbaaababababbaabbaabababbaaabbababbabaaabbbbabaa\n' +
    'abababbaabbbaaababaabbaa\n' +
    'babbbbbaabaaabbbabbabbaabbaaaaaa\n' +
    'baaaabbbbabbbbbbaabababb\n' +
    'abbbbbabaababbababaaabab\n' +
    'babbaabaaabbbbabbbbabaabaaababbaabaababaabbbbbba\n' +
    'aabababaaaaabbbaaabbabab\n' +
    'abbbbbabaaaabbaaaabbbbaa\n' +
    'babbbbbabbbbbaaababbbbaa\n' +
    'bbbabbbbbbbaabbbbaabaaba\n' +
    'aababbbabaaaabbbabbbbbabababbaaaaabaabab\n' +
    'bbbbbababbbabbbaaabbbbaa\n' +
    'bbababaabaaaabaabaaaaaba\n' +
    'bbaabbaaababbbabbbabbbbb\n' +
    'babaaaabaabaabaabbaaaaaaaabbaaab\n' +
    'aaababaabababbabbbabaabb\n' +
    'aaababaaaaabbaababaaabaa\n' +
    'bbabbbbaaaabaabbaabababb\n' +
    'bbaaabbabbaabbaabbaabbba\n' +
    'babbbabaabbabbaababbbaaa\n' +
    'aaaaaaaabaaaababbbbbabba\n' +
    'bbbbabbbabaaababababbbaa\n' +
    'aabbbbbbabbbaabbabaaabba\n' +
    'baaaaabbbbabbbbababaabaa\n' +
    'abbbabbbbaabbbbaabbaabbb\n' +
    'aabaabaabababaaaaaaabaaa\n' +
    'bbbbbabaaabaaabaaaaaabbb\n' +
    'bbbababbbbbabbbabaabababbababababbbbbaabbbabaaba\n' +
    'baaaaaaabbaaaabbabbbbbba\n' +
    'bbbaabbabaaaaaaaaabababb\n' +
    'bbabaaaaababbaababababbbaaabbbba\n' +
    'bbbbaabbbabbbbbaaaaaabbb\n' +
    'abbabbaaabbbaaababbababb\n' +
    'abbabbbbaababaabbbabbbbababbaaab\n' +
    'abbbbabbbbbaaabbabbabbba\n' +
    'babaaaabbabbabbbbaaabaaa\n' +
    'babbaaaaaabaabbabbbaaaba\n' +
    'aababababbbbbbabaabababb\n' +
    'abbbbbbbbbaabaabbbabaaba\n' +
    'baaabbbbaabbaaaaabababbbbbabbabaaabaaaaa\n' +
    'abaabbbabbbbbbaaaabbbabb\n' +
    'bbbbbaaaabbbbbbbbaaaabaababababbbaaaababababbabaaababaaa\n' +
    'aaaabababaababbbaaaaabba\n' +
    'bababbababbbaaaabbbaaaaa\n' +
    'bbabaaaabbbababaaabbbbaa\n' +
    'baababbbababaaabbbbbbbabbabababbaababbaaaaabaaaa\n' +
    'abaababbaabaaabaaaababaabbabbbaaababaaaa\n' +
    'baabbaaabbbabbabbbbbbbaababbaaaabbbbbbbbabaababbbabbabbaabbbbbba\n' +
    'babaabaabbbababbbbbbabaaabaabbaaabbbbababaabbabaababbbaa\n' +
    'aaaaabaabababbabbaaaaaba\n' +
    'bababbabbabbaabaaabbabaaaaaabbab\n' +
    'abbaaaaabbaabaaaabbaaabb\n' +
    'bbbbbbabbaaaabbbbaabaaaa\n' +
    'bbbabbbbbaababbaaabababb\n' +
    'bababbaabbbababbbaaaaabbbabbabbbbbaaaaaaababbaba\n' +
    'aaaabbaaabbbbabbaaaaaaab\n' +
    'baaabbbbbbaabbaabababbba\n' +
    'aaabaaabbaabbaaabbaaaaba\n' +
    'baaabbbbabbbbbbbbaaaaaaabbbaaaba\n' +
    'aabaaaabbabbbabaabbaabab\n' +
    'ababaaababbbababbaaaaaab\n' +
    'abaaaaabbbbbbaaaabaaabba\n' +
    'bbbababaabbbaaababaabbaa\n' +
    'abbabbabaaaabbbabaabaaabaaabbbbaabbbaaabaaabababbbabbbbaaababbaaaaabaaaa\n' +
    'aaaaabaaaababbbaabbbbbbbbbbbabba\n' +
    'bababbaabbbababbbbaabbbb\n' +
    'bbbabaaabbaaaaaabbaabbaaaaaaabba\n' +
    'baabbaaaabbbabaaaaabbbab\n' +
    'baabbababbaabaaaaaaaabba\n' +
    'bababbabbbbbaabbaaabaabababbbabaabbabbbababaaabb\n' +
    'babbbbbaabaaaaaabaaabbba\n' +
    'ababababbabbabbbbaaaaaaabbbbbbbbbbbbabbbbbababbaababbabbabaabbbbabababbabbaaabbbabbabbba\n' +
    'aabaababbbaaaaabababaaba\n' +
    'baabbbbabbaaabbabbabbaab\n' +
    'aaabaaaabaaababbaaaaaabaaaabaaaaaaabbbaabbabbbaabbbabaaaabbbaabaaaabbabb\n' +
    'baabababbbbabbbaaaaabbbb\n' +
    'abbbaaaabaabababababaabb\n' +
    'babaabababababbbaabaaabb\n' +
    'abbbababbbaaababbbbbaaaa\n' +
    'aababaabbaaabbabbabaaabb\n' +
    'bbbbabbbabbaabbabbaaaaaaabbbbaababaababaabaaababaabbaaabbbbabbab\n' +
    'ababbbbbabbabbaabbbabbbbbaababaaabbbbaba\n' +
    'bbbaabbabaaaabbbaaaabaaa\n' +
    'bbbababaaabbabaaaabaaaaa\n' +
    'ababbbabbbbbabbbbbaaabbaabababab\n' +
    'baabaaabbbbbbbabaaaabaabbbaaaaab\n' +
    'baaaabaabbababaaabaabbbabaaabbabbbbababbababaaba\n' +
    'abababbbabbbbbabbababbaababbbbba\n' +
    'babababbaababbbabbabaaab\n' +
    'aabaaabaaaabbaabbbbabbaa\n' +
    'abababbaaaabaabbbbabbbbb\n' +
    'baabbbaaaababbabababbaba\n' +
    'babbbbbaaabaaabaaabbbbabbbbababbaabbaaaabbbbaaba\n' +
    'babbababbabbbabbbbbabbaa\n' +
    'bbaabaaaaaabaabbbaabbaaaabaaabaa\n' +
    'aabbaabbbababaaabbbabbbabbaabaabaaaaabababbbbaaa\n' +
    'babaababbaaaaabbbabbaaaa\n' +
    'aababbbabbbbbaabbaaababa\n' +
    'abbaaaabbbabbababbabbbaa\n' +
    'abbbabaaabababaabbabbbab\n' +
    'abaabaabaaaabbaabbaaaaaabbaaaababaaaaaba\n' +
    'bbbaabbaabbbaaabbbbbaabbbbbbaaab\n' +
    'bbaaaabbaaaabbbaaabbabbbababbaabbbbaaaba\n' +
    'aababaabaabbabaabbaaaaabaaababbaabbbbaaa\n' +
    'bbaaaabbbabababababaabbb\n' +
    'bbbabaabbaaababbaabbbbbbbaaababaabaaabab\n' +
    'bbbbbaabaabbbbbbabbabbab\n' +
    'bbbbabbabbabbaaabbbabbaa\n' +
    'aababaabbaabababbbaaabbbabaabaaa\n' +
    'abbbbbbbaababaabbbbbaaab\n' +
    'bbbaabbbaabbaabbabbabbab\n' +
    'aaaaaababbbbabaaabbaaaabbabaababaaaabbaaaaaaabbbaaabbaaaaaaababbabaababa\n' +
    'aabbbbabaaaabbaaaaabbbab\n' +
    'bbaaabbbaaaabbbababaabba\n' +
    'aabbaaaabaabababaaaabaaa\n' +
    'babaababbabaababababaabb\n' +
    'aabbaababaababbabbabbbab\n' +
    'babbbabaabbbaaaaaaaababaaaabaaabababbaaa\n' +
    'bbabbbbaaababbbaabaaabbbbbbabaabaabbbbaa\n' +
    'aabbbbbbbbbaaabbabbababa\n' +
    'aaaabaabbabbbabbbbbabbab\n' +
    'aabaaabaaaabaaabaabbbabb\n' +
    'bbabbabaaababbaaabbabaaa\n' +
    'aabbaabbaabaababbaaaabbaabaababbbabaaaaa\n' +
    'bbbbbbaabbbabaaaabaaabab\n' +
    'aabbbbababbbababbaaaaabbbaababbbbbabaabb\n' +
    'baababbbbaabbbaaabbaabbb\n' +
    'aabbaabbbbaaabbababbbbab\n' +
    'bababaaabaabbbbaabbaabbb\n' +
    'bbbabaaabbbbbbaabbbbaaab\n' +
    'aababababbaabbabbbababaabbbaabbaaaaabbaabaabbaabaababbbbbbabbbaaaabbbbaa\n' +
    'aaaaabaabaabaabbbaaaaabbbaabaabbbbaaaabbbbbabaabbaaababa\n' +
    'bbaaababaaabbaabbbbbaaab\n' +
    'aabbaaaabbabaaaabbbaaaabbbbabaaaababbaababaabbbababaabbb\n' +
    'babbbbbaabbbaabbaaaaaababaabbbbb\n' +
    'bbaabbbbbbaabbabbaabbbabbabaaaaabaaabaaabaabbbaa\n' +
    'babaababababbaaaaaabbaaa\n' +
    'bbbaabbaaaababbababababbbbbbaaab\n' +
    'aaababaabbbbbbaaabbbbaab\n' +
    'bbaaababababaaabaaaaaaab\n' +
    'aaababaaabaaabbbbabaaababbbabababababbbbaaaabaaa\n' +
    'babaabbbaaabbaaabaabbbab\n' +
    'abbbbbaaaaaaabaaababbabb\n' +
    'babaababaabbbbabababaabb\n' +
    'baaabbbbabaaaaabbaaabaaa\n' +
    'bababaaabbbaaaabbbbbabba\n' +
    'baabababbaaababbbbbabbab\n' +
    'bababaaaababbbabaabababb\n' +
    'bbabbbbabbbbbbbbbaaaababbbbbabbbaabbbabaabaababa\n' +
    'aaabbbbbbaaababbbbaabbba\n' +
    'abbbaaaaababbaabaabaaaaa\n' +
    'bababaaaaabaaaabbabaabababbbaaaaabaababa\n' +
    'baaaaaaaaaaabababbabbaaa\n' +
    'baaaabbbbbbababbaabbbaba\n' +
    'bbbbbbbbbabbbaababbaaaba\n' +
    'baaaaaaabababbaabbbabaabbaaabbbaaaaabaaa\n' +
    'bbbbabbbbaabababaabbbaaaaababbbbbbababbbbabaaaabbbabbaabbabbbbbb\n' +
    'abaababbbbaaaaaabaaabbaa\n' +
    'babbaabaabbbbbaabbabbbbaabbbbabbbbababbb\n' +
    'baaaabaababbbaabbbaabbba\n' +
    'aabaaabababbaabaabaaabba\n' +
    'abbbabababbaaaaabaaaabbbbbaababbbabbabbbbbaabbbb\n' +
    'babbababbabbbaababbbababbbaaaaba\n' +
    'baababbabbbababbbbaaabbbaabbabababababab\n' +
    'ababbaaabaabababbbabbabaabbbabba\n' +
    'bbbaaabbbbaabaabbbbbbaaabbabbabaaaaaabbababaaabb\n' +
    'babbababbaabbbbabbbaaaaa\n' +
    'bbaabbaababababaaabaaabb\n' +
    'ababbaabbbbbbaaabbaaabbbababbbbbaaabbbaaabaaabab\n' +
    'aaabbaabaaaaaabbbabbaabaaabaaababbaaabbaaabaaabb\n' +
    'abbbaabbbbabaaaaabaaaaba\n' +
    'abaaabaaaabababbbababbbababbabba\n' +
    'bbaaaaababaabbbabbbbabba\n' +
    'bbaabaaaaaaaaabbbbaaabbbaababbbaaaabbaba\n' +
    'abababbbaababbaababbbababbbabaabbbabaaababbaaabb\n' +
    'bbaaaaabbbbbbaaaabaaaabb\n' +
    'bbaabbaabbabaaaabaabbaab\n' +
    'bbbaaaabbaaaabaaababbaba\n' +
    'abbbaaababbbbbaabaabbbaaaabbbbbbbaaaabaaababaaba\n' +
    'aababbaaabbbbbaabaaabbba\n' +
    'baaaabbbabaaaaaaaabbabbaabaaaabbabaabbab\n' +
    'bbaababbabbabbaababbaabababaaaaa\n' +
    'aabbaaaaaaaabbabbaabbabaabababbbbaababaa\n' +
    'abbabbaaaabbbbbbbbbabaababababaaabbbabbbabaabbaa\n' +
    'baabbbbabaaababbabababbbabbbbaaabbbbababaaaaaaabbbababaa\n' +
    'bbaaababaabaabaaaaabaaaa\n' +
    'bbbbbbabbabbabbbbbababba\n' +
    'baababbabbaabbabbbababbb\n' +
    'bbabbbbbaaaabbbbaaabbabbababaaaaaaabbbaa\n' +
    'bbabbbbababaabababaabbaa\n' +
    'bbbaaaabaaababbaababbabb\n' +
    'abbaabbaaaaabbaaaabaabbb\n' +
    'abaaaaababababbbbbaababa\n' +
    'aabbbbabaabbaabbbaababbabaaababbabbaababbbabaabb\n' +
    'baaababbaaaababaaaabbaba\n' +
    'bbbbaabbaaaabbbaabbbbabbbaaabbabbbbaabbbaaaaaabababbaaabbaabbabb\n' +
    'abbbbbaabbaabbaaabbaabbb\n' +
    'bbababaaababbbbbbbbbabab\n' +
    'babbbbbaabaaaaabbaababaa\n' +
    'bbababbaababbabaaaaaaababababbbaabaaaabaabbabbaaabbbaaaabaabbbbbbababababaabaabb\n' +
    'bbaabaabbababbaabbbaaaaa\n' +
    'abbaaaabaaaaaababbbbbabb\n' +
    'aababbaaababbbbabababbba\n' +
    'bbaaaaababbababbbaababbbbaaabbbaaabaabbbabbbaabaaabbbbaa\n' +
    'aaaabbabaabbabaaabaabbbabbbaabbbbababbbabbabbabb\n' +
    'aababbbabaabaabbbbbaaaababbbbaab\n' +
    'bababababbbabababaababaa\n' +
    'baabbaaaababbaaaabbabbab\n' +
    'aabbaabaaabaabaaababbbaa\n' +
    'ababbaabababbaabbbbabbab\n' +
    'aaaabaabababbaaaabbbaaba\n' +
    'bbbaabbbababbbbabbbabbab\n' +
    'aaababaabbbaaabbbbabbaab\n' +
    'ababbbabbbaabaaaaaabbbaa\n' +
    'abbbbabbbaabbbaabbbaaabbbaaabbababaabbaa\n' +
    'aabababababaaaabbbbabbbbbbbbbaaababbbbbabbbababaaabbabab\n' +
    'baaaabbbabbaabbabbbabababaabbababaabbbab\n' +
    'babaaabbbbbbabbbababbbbbbaaaaabbaababbbbbbabaababbbaabbaaababbababbbaaabaaaaaaaa\n' +
    'abbbbbababaaaaabbbbbabab\n' +
    'bbaaaaabbabaaabababaaabbabaaabba\n' +
    'ababbbbabbababaaabababab\n' +
    'baababbabaaaabbbaaaabbbb\n' +
    'bbabbabababbbabbbbabbbaa\n' +
    'abbaaaaaababaaabababbbaa\n' +
    'aabaababbababbabaabbbbaa\n' +
    'bbbbbbababaabbaaaaaaabababbbbbba\n' +
    'bbbbabbbbaababbbbabbbbbaababbbbabbababab\n' +
    'baaaaaaabbaabaababbabbba\n' +
    'babbbabbaabbbbbbababaaba\n' +
    'aabaabababbbbabbaaaaabba\n' +
    'baabaabbbaaabbabaaabbbbbbbaaabbababaabbbbbababbbaaaabaaa\n' +
    'bbbabababbaabbabbaaabbbabbaaaababbabbbaaabbaabaa\n' +
    'baaaaaaababababbbbaaaaaaaabbbbabbbbaaabaaaaabbbbaaaaaaab\n' +
    'ababaaabbbbbabbbbaabbbab\n' +
    'aabbaabbabaaaaabaababaaa\n' +
    'abbbbbabbbbabaaabaaabbabaabbabba\n' +
    'babbbbbbbbbaabbabaaaabba\n' +
    'aaaabbaaaabaababaabaabba\n' +
    'baabbabaabbbabaabbbaaaaa\n' +
    'abbabbaabaaaabaabbaabaabbbaabaaaaabbbabb\n' +
    'bbbaaaababbbaabbabaabaaa\n' +
    'babbbbababaaabaabaaababaababaaaabbbaaabbabbabbabaababbba\n' +
    'aaaababababbbaabaaaaabba\n' +
    'aaaababababbababbababbba\n' +
    'bbaababbbaababbabbabaabb\n' +
    'baababbaaabbaaaaaabbbbbbbababbba\n' +
    'bababbabaaaaaabbbbababbb\n' +
    'aaaabaabaabaabaaabbbbaaa\n' +
    'abbbabbbbabbabaaaaabbaaaaaaaabbaaaaaaaabbaabbbbbbabbbaaabaaaabababaaabaaaabaaaaa\n' +
    'bbbababbbbabbabaaabbaaaababaaaababbaaabaababaabb\n' +
    'babababbaaabbaabaaabbbba\n' +
    'baaabbabbaabaaabbbbabbbbabbbaaaaaabaaabb\n' +
    'aabaaababbaaaaabbbbbaabbbbaaabababbaabbabbbabbab\n' +
    'bbbbbaababaabbbaababbbbbabbaabaa\n' +
    'abaaaaaabaaabbabbbbbaaab\n' +
    'aababbbaabbbabbbabaababa\n' +
    'bbaabbaabbaabaabbabbbabbbaaabbbbaababaaabbbabbaabababbbb\n' +
    'babbbbbbababbbbababababaaaabbbba\n' +
    'baaabaaaabbbaabbbabbaaabaabbbaaaabbaabbbbaabbbabbbababaabaaaaaaabbbbaabb\n' +
    'bbbabbbaaaaaaaaabbbbabba\n' +
    'bbbabbbaaabbaababbabaaaaaabaabba\n' +
    'aabaaaababbbbababbbaabab\n' +
    'aabbbbaaababababbbbabbababbbbbbabbaabbbb\n' +
    'baaaaabbbbbbbbbbaabaabba\n' +
    'aabaaabaaababaababbabbab\n' +
    'abaaabaabababbbaabaabaaa\n' +
    'abbbababababaaabbabaabbb\n' +
    'aabaaaababbbbbbbabaababbaaababaabbbababbbababaabaaabaaba\n' +
    'bababaaabbbabbbbababbbababaabaaa\n' +
    'abaaaaabbbbabaaabaababbaaabbaaaaaabaabbbabbbbaba\n' +
    'baabbababbababaaaabbabba\n' +
    'aaababbabababbaabbbbaabbaaaaabaaaabbbbbbbbbabbaa\n' +
    'abaabbbabaabaabbabbaabaa\n' +
    'bbaabaaaababbbbbababbbbbbaabaaabaabbaaab\n' +
    'ababbbbabaababbaaaaabaaa\n' +
    'aabbbbbaaaabbaabbbbbabaaaaaababbaababbbaaaaababbbbbbbbaaabbbbaab\n' +
    'aaabaaabbbaabaaabaaaaabbabbababb\n' +
    'abbabbaaaaaabbabbbababab\n' +
    'aabaababbababbabbaabbbbb\n' +
    'abbabbaaababbaabbaabbbab\n' +
    'ababbbbabaabbbbabbbaaabbabbaaabaabaabbab\n' +
    'aabbaaaabaaabbbbaabaabbb\n' +
    'aababbaabaaabbbbbbaaabaa\n' +
    'bbabaaaabaabbbaaaaaaaaab\n' +
    'bbbbbaaaabbbbbaabaabaaba\n' +
    'aaaaaabbababbbabaabbaaaabaabaaba\n' +
    'bbaaabbbaabaababbababbabbbbbaabbbabababaabaabbbb\n' +
    'bbaaaaaabbaabbabaaabbbaa\n' +
    'baabbbaabbbbbaaabbaaaaba\n' +
    'abbaaaaabababbaaabaaaaba\n' +
    'baabbbaabbaaabbbbbbbaabbbaabaaaaababbbaa\n' +
    'abaababbaaaabaababbbbbba\n' +
    'abbbaabbabaababbbbbbaaab\n' +
    'babbbabaaaababaaaaaaaaab\n' +
    'baaaaaaababbababaabbabbbaababaaa\n' +
    'ababaaabbbbbbabaabaaabab\n' +
    'baababbabbaaaaaaababaaaa\n' +
    'ababaaabbabbbabbaabbbaaa\n' +
    'abaaaaabaabaaabaaabaabbb\n' +
    'aababbaabbabbbbabaaaabba\n' +
    'bbbabaaaabbbaaababbababb\n' +
    'baaaaabbaabbaabababaaaaa\n' +
    'bbaaababbababaaabbbbabba\n' +
    'aabbaabaabbaaaaabbaaabbbbabbbabbbbabbbbbabaaabbaaaaabaaa\n' +
    'aaaaabaaabbbbbaababbbbbbbbbbabba\n' +
    'baaaabbbabababaabaabababbbbabaaabbbbbbbb\n' +
    'bbbabbbbbbbbaabbbbababba\n' +
    'abbbaaaaabbbabaaaabbabaababaabaa\n' +
    'bbbbbbabbabbbbbaaabaaabb\n' +
    'ababbbabababaaabaababaaa\n' +
    'baabaaababaaaaabbbbaaaba\n' +
    'babbbaabbaabbbaaababbaabbbababba\n' +
    'abaaababbbbbbbbaaabbbaaababaabbabbaabbbb\n' +
    'aaabaaabbbaabaabbabbbaaa\n' +
    'babbbaababbaaaababbbbaba\n' +
    'bababbabababbbbbbbbbaaab\n' +
    'abbbbbaaababbaaabbababab\n' +
    'babbbbabaabbababbabaaabbababbababbbaaababaaaaaba\n' +
    'bbaaabbabaabbababbbaaabbaabaaabaaabababbbaaabbbaabbaababaabaaaaaabbaabaabbaababa\n' +
    'aabaabaaaaabaabbabbabababaaaaabaaaabbabb\n' +
    'abaababbbbbaaaababaaaaababbabbab\n' +
    'bbaaababaaababbabbabaabb\n' +
    'babaaaabbaaabbbbabaaaaba\n' +
    'abababbbbbbababaabaabbaa\n' +
    'baabbaaabaabbbaabbbabaabaaabbaba\n' +
    'babbbaabaaaabbbababbaaaa\n' +
    'ababbbabaabbbbabaabaaabb\n' +
    'aabaaaabbbababbabbaabbbaabaaaaababaaaaaabbbbabbbbaaaabaabbababaababbaabb\n' +
    'ababbaabababbbababbbababaabbabaaaabaababbbbbbbba\n' +
    'abaaabbbbbbabaabbbabbabaababbbabaaaaaaabbaaaaaba\n' +
    'bababbabbabababbbbbbbbaaaababaababbaabbb\n' +
    'bbbbabaaabababbbaaabbbba\n' +
    'bbbbaabbbabbaabaaaababaaaaababaaabbabbabaaaababbabaabbab\n' +
    'bbabbbbabaabaabbabaabbbb\n' +
    'babbbbbaabababaababbbbab\n' +
    'aaaabbababbaaaaaaabbbaaa\n' +
    'aabbaabbbabbbbbbbbabbaaa\n' +
    'baaaabbbbbbabaaabaabaaba\n' +
    'bababbbbabbbbababababaab\n' +
    'abbabbbbabbbbbbbabababbaabaabaaabbaabbbb\n' +
    'aaaaabbbabbabaabbabbbabbaabaaaabbbbabaababbbbbbbbbaabbbbaababaabaabbaaaa\n' +
    'bbaababbabbbabaaabbabbba\n' +
    'babbbbbbbbaababbababbbabaaabaaba\n' +
    'aaaaaabbaabbaaaaabaabbab\n' +
    'bbababbbaaaaaaabbaabbbbababbabbabbbaaabbbaabbaaabbababab\n' +
    'abaaabbbbbabbababbaaabaa\n' +
    'abbbbbbbbbaabaaabaaaabababaabbbaabbaabbabaabbbababbbabba\n' +
    'babaaabaabababbbaaaababb\n' +
    'abababbaababbbbbabbbbaba\n' +
    'aaaaabababaaaaaaabbaaabaabbbaabb\n' +
    'baababababaaabbbbbbabaababbaaaabbbaababa\n' +
    'aababaabbaabbbaabaababbbabbbaaba\n' +
    'abababbbaaababaababaaabb\n' +
    'bbaabaabaaaaabaabbbbbbab\n' +
    'ababbaaabbbaabbbaaababab\n' +
    'baabababbaaaaabbbbbbabbbabaabbbb\n' +
    'abababbabbbbaabbbabaabbb\n' +
    'aababbababbbabbbbabbbaaa\n' +
    'baaabbbbabbbbbbbabaaabab\n' +
    'bbbabaabaabbaabbbaabaaaa\n' +
    'ababbbbaaabaababbaababaa\n' +
    'abbbbbaaaababbabbbabbabaaabbabbaaaabbbba\n' +
    'bbbbabaaaabbbbbbabaabbabbababbbbabbabaabbbabbaab';

const parseInput = (input) => {
    const sections = input.split('\n\n');
    const rules = sections[0].split('\n');
    const messagesToTest = sections[1].split('\n');

    return { rules, messagesToTest };
    // const rules = sections[0].split('\n');
    // const testData = sections[1].split('\n');
};

const buildMap = (rules) => {
    const map = {};
    for (let i = 0; i < rules.length; i++) {
        const ruleArr= rules[i].split(': ');
        map[ruleArr[0]] = ruleArr[1];
    }

    return map;
};

const findAllCombinations = (map, dp, key, prevKey, loopIter) => {
    if (map[key] === '"a"') {
        dp[key] = ['a'];
        return ['a'];
    } else if (map[key] === '"b"') {
        dp[key] = ['b'];
        return ['b'];
    }

    let numberOfTimesLoopReached = key === prevKey ? loopIter: 0;

    const allCombinationsInstructions = map[key].split(' | ');
    const allCombinations = [];
    const numberOfTimesToIterate = ((key === prevKey) && numberOfTimesLoopReached > 1 )? 1: allCombinationsInstructions.length;
    for (let i = 0; i < numberOfTimesToIterate; i++) {
        const newKeys = allCombinationsInstructions[i];
        if (dp[newKeys]) {
            for (let p = 0; p < dp[newKeys].length; p++) {
                allCombinations.push(dp[newKeys][p]);
            }
            //allCombinations.push(dp[newKeys]);
        } else {
            const separateKeys = newKeys.split(' ');
            const combinationsByKeys = [];
            for (let j = 0; j < separateKeys.length; j++) {
                const separatedKey = separateKeys[j];
                let combinationsForSeparatedKeyJ = [];
                if (dp[separatedKey]) {
                    combinationsForSeparatedKeyJ = dp[separatedKey];
                } else {
                    combinationsForSeparatedKeyJ = findAllCombinations(map, dp, separatedKey, key, numberOfTimesLoopReached + 1);
                    dp[separatedKey] = combinationsForSeparatedKeyJ;
                }
                combinationsByKeys[j] = combinationsForSeparatedKeyJ;
            }
            const combinationsAt0thIndex = combinationsByKeys[0] ? combinationsByKeys[0] : [];
            const combinationsAt1stIndex = combinationsByKeys[1] ? combinationsByKeys[1] : [];
            const combinationsFor0thIndexAnd1stIndex = [];
            for (let k = 0; k < combinationsAt0thIndex.length; k++) {
                const str1 = combinationsAt0thIndex[k];
                for (let l = 0; l < combinationsAt1stIndex.length; l++) {
                    const str2 = combinationsAt1stIndex[l];
                    combinationsFor0thIndexAnd1stIndex.push(str1 + str2);
                } if (!combinationsAt1stIndex.length) {
                    combinationsFor0thIndexAnd1stIndex.push(str1);
                }
            }
            dp[newKeys] = combinationsFor0thIndexAnd1stIndex;
            for (let m = 0; m < combinationsFor0thIndexAnd1stIndex.length; m++) {
                allCombinations.push(combinationsFor0thIndexAnd1stIndex[m]);
            }
            //allCombinations.push(...combinationsFor0thIndexAnd1stIndex);
        }
    }

    dp[key] = allCombinations;
    return  allCombinations;
};

const part1Solution = (input) => {
    const { rules, messagesToTest } = parseInput(input);
    const map = buildMap(rules);
    const dp = {};
    let totalNumberOfMatchingMessages = 0;
    const combinations = findAllCombinations(map, dp, '0');
    for (let i = 0; i < messagesToTest.length; i++) {
        if (combinations.includes(messagesToTest[i])) {
            totalNumberOfMatchingMessages++;
        }
    }

    return totalNumberOfMatchingMessages;

};

const part2Solution = (input) => {
    const { rules, messagesToTest } = parseInput(input);

    const map = buildMap(rules);
    const dp = {};
    let totalNumberOfMatchingMessages = 0;
    const combinationsOf8 = findAllCombinations(map, dp, '8');
    const combinationsOf11 = findAllCombinations(map, dp, '11');
    const combinationsOf31 = findAllCombinations(map, dp, '31');
    const lenOf8 = combinationsOf8[0].length;
    const lenOf31 = combinationsOf31[0].length;
    const lenOf11 = combinationsOf11[0].length;
    const validMessages = [];


    // 0: 8 11
    // 8: 42 | 42 8
    // 11: 42 31 | 42 11 31
    // all the messages should start with 8 and end with 31
    for (let i = 0; i < messagesToTest.length; i++) {
        const messageToTest = messagesToTest[i];
        let totalTimesOf8 = 0;
        let totalTimesOf31 = 0;
        if (combinationsOf8.includes(messageToTest.substring(0, lenOf8)) && combinationsOf31.includes(messageToTest.substring(messageToTest.length - lenOf31, messageToTest.length))) {
            let isValidMessage = true;
            let curr = lenOf8;
            const end = messageToTest.length - lenOf31 - 1;
            let prevIs32 = false;
            while (curr < end) {
             if (!prevIs32 && curr + lenOf8 - 1 <= end && combinationsOf8.includes(messageToTest.substring(curr, curr + lenOf8))) {
                    curr = curr + lenOf8;
                    totalTimesOf8++
                }
                else if (curr + lenOf31 -1 <= end && combinationsOf31.includes(messageToTest.substring(curr, curr + lenOf31))) {
                    curr = curr + lenOf31;
                    totalTimesOf31++;
                    prevIs32 = true;
                }  else {
                    isValidMessage = false;
                    break;
                }
            }
            if (isValidMessage && totalTimesOf31 < totalTimesOf8) {
                validMessages.push(messageToTest);
                totalNumberOfMatchingMessages++;
            }
        }
    }

    return totalNumberOfMatchingMessages;

};

//console.log(part1Solution(testInput2));
console.log(part2Solution(testInput2));