import { readFileSync } from 'fs';
import { join } from 'path';
import { isKeyObject } from 'util/types';

export type Instruction = {
  direction: 'L' | 'R';
  rotation: number;
}


export class SecretEntrance {
  public instructions: Instruction[];
  private readonly __dirname: string;
  private __currentDialPoint: number;
  private __timesPastZero: number;

  constructor(readonly fileName: string) {
    this.instructions = [];
    this.__dirname = import.meta.dirname;
    this.__currentDialPoint = 50;
    this.__timesPastZero = 0;
    this.parseFile();
  }

  parseFile(): void {
    const path = join(this.__dirname, 'inputs', this.fileName);
    const content = readFileSync(path, 'utf-8');
    const rawInstructions = content.split('\n');
    rawInstructions.filter(_ => _).forEach(instruction => {
      const dir = instruction[0] === 'L' ? 'L' : 'R';
      this.instructions.push({
        direction: dir,
        rotation: parseInt(instruction.substring(1, instruction.length))
      })
    })
  }


  part1(): number {
    let dialAtZeroTimes = 0;
    this.instructions.forEach(instruction => {
      const dir = instruction.direction;
      const rotation = instruction.rotation;
      if (dir === 'L') {
        this.rotateLeft(rotation);
      } else if (dir === 'R') {
        this.rotateRight(rotation);
      } else {
        throw new Error(`unknown direction: ${instruction.direction}`);
      }

      if (this.__currentDialPoint === 0) {
        dialAtZeroTimes++;
      }
    })

    return dialAtZeroTimes;
  }


  part2(): number {
    return this.part1() + this.__timesPastZero;
  }

  private rotateLeft(rotateTo: number) {


    let leftOffset = this.__currentDialPoint - rotateTo;
    do {
      if (leftOffset < 0) {
        if (this.__currentDialPoint !== 0) {
          this.__timesPastZero++;
        }
        leftOffset = leftOffset + 100;
      }
      this.__currentDialPoint = leftOffset;
    } while (this.__currentDialPoint < 0)
  }

  private rotateRight(rotateRight: number) {
    let rightOffset = rotateRight + this.__currentDialPoint;
    do {
      if (rightOffset > 99) {
        if (rightOffset !== 100) {
          this.__timesPastZero++;
        }
        rightOffset = rightOffset - 100;
      }
      this.__currentDialPoint = rightOffset;
    } while (this.__currentDialPoint > 99)
  }
}
