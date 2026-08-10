import re
from functools import reduce
class MullItOver:
    def __init__(self, filename):
        self.filename = filename

    def get_mul_instructions(self):
        with open(self.filename) as f:
            multiply_instructions = [re.findall(r'mul\(\d+,\d+\)', line) for line in f.readlines()]
            return[i for row in multiply_instructions for i in row]

    def multiply_instruction(self, instruction):
        args = re.findall(r'\d+', instruction)
        if len(args) < 2:
            raise Exception('Invalid instruction')
        return float(args[0]) * float(args[1])

    def get_enabled_mul_instructions(self):
        mul_instructions = []
        with open(self.filename) as f:
            line = f.read()
            start = 0
            while start is not None and start < len(line):
                curr_match = re.search(r'don\'t\(\)', line[start:])
                curr = curr_match.regs[0][1] + start if curr_match else len(line)

                instructions = re.findall(r'mul\(\d+,\d+\)', line[start:curr + 1])
                mul_instructions.append(instructions)

                curr_match = re.search(r'do\(\)', line[curr:])
                start = curr_match.regs[0][1] + curr if curr_match else len(line)


        return [i for row in mul_instructions for i in row]


    def part1(self):
        multiply_instructions = self.get_mul_instructions()
        result = reduce(lambda acc, y: acc + self.multiply_instruction(y), multiply_instructions, 0.0)
        print(result)

    def part2(self):
        enabled_mul_instructions = self.get_enabled_mul_instructions()
        result = reduce(lambda acc, y: acc + self.multiply_instruction(y), enabled_mul_instructions, 0.0)
        print(result)


x = MullItOver("inputs/real.txt")
x.part2()