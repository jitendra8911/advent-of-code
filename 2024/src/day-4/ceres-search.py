from functools import reduce
class CeresSearch:
    def __init__(self, filename):
        self.filename = filename
        self.puzzle = self.parse()
        self.m = len(self.puzzle)
        self.n = len(self.puzzle[0])
        self.visualization = set()

    def get_top(self, i, j):
        return (i - 1, j) if i - 1 >= 0 else None

    def get_bottom(self, i, j):
        return (i + 1, j) if i + 1 < self.m else None

    def get_left(self, i, j):
        return (i, j - 1) if j - 1 >= 0 else None

    def get_right(self, i, j):
        return (i, j + 1) if j + 1 < self.n else None

    def get_top_right(self, i, j):
        return (i - 1, j + 1) if i - 1 >= 0 and j + 1 < self.n else None

    def get_bottom_right(self, i, j):
        return (i + 1, j + 1) if i + 1 < self.m and j + 1 < self.n else None

    def get_top_left(self, i, j):
        return (i - 1, j - 1) if i - 1 >= 0 and j - 1 >= 0 else None

    def get_bottom_left(self, i, j):
        return (i + 1, j - 1) if i + 1 < self.m and j - 1 >= 0 else None

    def get_neighbors(self, i, j):
        neighbors = [(-1,0), (1,0), (0, 1), (0, -1), (-1,1), (1,1), (-1, -1), (1, -1)]
        return [(i+x, j+y) for (x,y) in neighbors if 0 <= (i+x) < self.m and 0 <= (j+y) < self.n]

    def get_neighbor(self, i, j , dir):
        if dir == 'left':
            return self.get_left(i, j)
        elif dir == 'right':
            return self.get_right(i, j)
        elif dir == 'top':
            return self.get_top(i, j)
        elif dir == 'bottom':
            return self.get_bottom(i, j)
        elif dir == 'top-right':
            return self.get_top_right(i, j)
        elif dir == 'bottom-right':
            return self.get_bottom_right(i, j)
        elif dir == 'top-left':
            return self.get_top_left(i, j)
        elif dir == 'bottom-left':
            return self.get_bottom_left(i, j)

    def parse(self):
        with open(self.filename) as file:
            return [list(line.strip()) for line in file.readlines()]

    def search_word_recursively(self, word, i, j, start, path, direction):
        if start >= len(word):
            print('path: ', path)
            self.visualization.update(path)
            return True
        neighbor = self.get_neighbor(i, j, direction)
        if neighbor is not None and word[start] == self.puzzle[neighbor[0]][neighbor[1]]:
            new_path = path.copy()
            new_path.append(neighbor)
            result = self.search_word_recursively(word, neighbor[0], neighbor[1], start + 1, new_path, direction)
            if result:
                return True

        return False

    def search_word_recursively_in_all_directions(self, word, i, j, start):
        count = 0
        for direction in ['left', 'right', 'top', 'bottom', 'top-right', 'bottom-right', 'top-left', 'bottom-left']:
            if self.search_word_recursively(word, i, j, start, [(i, j)], direction):
                count += 1
        return count

    def find_all_positions_of_x(self):
        return [(i,j) for i in range(self.m) for j in range(self.n) if self.puzzle[i][j] == 'X']

    def part1(self, word):
        all_x_positions = self.find_all_positions_of_x()
        result = reduce(lambda acc, x: acc + self.search_word_recursively_in_all_directions(word, x[0], x[1], 1) , all_x_positions, 0)
        for i in range(self.m):
            for j in range(self.n):
                if (i,j) in self.visualization:
                    print(self.puzzle[i][j], end='')
                else:
                    print('.', end='')
            print()

        return result


xmas = CeresSearch('inputs/real.txt')
print(xmas.part1('XMAS'))


