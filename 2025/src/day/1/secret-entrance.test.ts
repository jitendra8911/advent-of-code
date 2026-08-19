import { describe, expect, it } from 'vitest';
import { SecretEntrance } from './secret-entrance.ts';

describe('SecretEntrance', () => {
  it('part1 test', async () => {
    const puzzle = new SecretEntrance('test1.txt');
    const test1Output = puzzle.part1();
    console.log(test1Output);
  });

  it('part2 test 1', async () => {
    const puzzle = new SecretEntrance('test1.txt');
    const test2Output = puzzle.part2();
    console.log(test2Output);
  });

  
  it('part2 test 2', async () => {
    const puzzle = new SecretEntrance('test2.txt');
    const test2Output = puzzle.part2();
    console.log(test2Output);
  });


  it('part2 test 3', async () => {
    const puzzle = new SecretEntrance('test3.txt');
    const test3Output = puzzle.part2();
    console.log(test3Output);
  });

  it('part 1', async () => {
    const puzzle = new SecretEntrance('rotations.txt');
    const part1Output = puzzle.part1();
    console.log(part1Output);
  });


  it('part 2', async () => {
    const puzzle = new SecretEntrance('rotations.txt');
    const part2Output = puzzle.part2();
    console.log(part2Output);
  });
});
