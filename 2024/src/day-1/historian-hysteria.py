from functools import reduce
class HistorianHysteria:
    def __init__(self, filename):
        self.filename = filename

    def get_location_ids(self):
        with open(self.filename) as f:
            team1_ids, team2_ids =  zip(*[ (int(word[0]), int(word[1])) for word in [line.strip().split() for line in f]])
        return list(team1_ids), list(team2_ids)

    def part1(self):
        team1_ids, team2_ids = self.get_location_ids()
        team1_ids = sorted(team1_ids)
        team2_ids = sorted(team2_ids)
        solution1 = sum(reduce(lambda x,y: [abs(x[i] - y[i]) for i in range(len(x))], [team1_ids, team2_ids]))
        print(solution1)

    def part2(self):
        team1_ids, team2_ids = self.get_location_ids()
        team2_ids_dict = {}
        for id in team2_ids:
            team2_ids_dict[id] = team2_ids_dict.get(id, 0) + 1

        print(team2_ids_dict)
        solution2 = reduce(lambda acc, x: acc + (team2_ids_dict.get(x, 0) * x), team1_ids, 0)
        print(solution2)


# x = HistorianHysteria('inputs/real-input.txt')
# x.part1()
# x.part2()

x = HistorianHysteria('inputs/test.txt')
x.part1()
x.part2()