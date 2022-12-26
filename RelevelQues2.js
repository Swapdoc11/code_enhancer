/**Lazy Rabbit
Question Name : Lazy Rabbit

Problem Statement

There are N blocks arranged in a straight line. The height of each block is given in an array H, the rabbit is currently on the first block.

It follows the following rule to jump : It will jump to the right side, to a block whose height is at least equal to the current block and is closest to it as well. In case there is no such block, it will stop at the current block.

Your task is to find the index to which the rabbit will jump for each of the N blocks.

In case there is no suitable block to jump to, Print -1 instead.

Constraints

1 ≤ N ≤ 10⁵

1 ≤ H[i] ≤ 10⁹

Input Format

First line contains N.

Second line contains N space separated integers of the array H.

Output Format

Print N integers, the block the rabbit jumps to or -1 if it can't jump.

Sample Input

8

3 1 3 4 1 1 5 2

Sample Output

3 3 4 7 6 7 -1 -1

Explanation of Sample

Position 1 -> Position 3 (3 -> 3)

Position 2 -> Position 3 (1 -> 3)

Position 3 -> Position 4 (3 -> 4)

Position 4 -> Position 7 (4 -> 5)

Position 5 -> Position 6 (1 -> 1)

Position 6 -> Position 7 (1 -> 5)

Position 7 -> Cannot jump (-1) ( No block with at least height 5 on it’s right side )

Position 8 -> Cannot jump (-1) ( Not Blocks to the right )**/