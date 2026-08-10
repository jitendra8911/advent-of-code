class RedNoseReport:
    def __init__(self, filename):
        self.filename = filename

    def parse_data(self):
        with open(self.filename) as f:
            reports = [[int(word) for word in line.split()] for line in f]
        return reports

    def part1(self, tolerate = False):
        reports = self.parse_data()
        solution = 0
        for report in reports:
            safe = True
            direction = report[1] - report[0]
            for i in range(1, len(report)):
                curr_direction = report[i] - report[i - 1]
                diff = abs(curr_direction)
                if ((direction > 0 and curr_direction > 0) or (direction < 0 and curr_direction < 0)) and (
                        1 <= diff <= 3):
                    continue
                else:
                    safe = False
                    break
            if safe:
                solution += 1

        print(solution)

    def part2(self):
        reports = self.parse_data()
        solution = 0
        for report in reports:
            safe = True
            direction = report[1] - report[0]
            for i in range(1, len(report)):
                curr_direction = report[i] - report[i - 1]
                diff = abs(curr_direction)

x = RedNoseReport('inputs/real.txt')
print(x.part1())

