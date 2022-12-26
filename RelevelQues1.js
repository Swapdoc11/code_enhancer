/**Maximum Subarray
Question Name: Maximum Subarray

Problem Statement

Antonio is given an array A of length N. Every array element is mapped in the 2-D plane as point (A[i], i) for where 1<=i<=N.

The distance between any two points P1 (having coordinate (a,b)) and P2 (having coordinate(c,d)) is equal to |a-c| + |b-d|, where |x| represents absolute value of x.

Lets say three points P,Q,R irritates Antonio if distance(P,R) = distance(P,Q) + distance(Q,R).

To stop Antonio from getting irritated you decided to remove some elements from the beginning of the array and some elements from the end of the array.

You have to tell the length of the maximum length final array such that it does not irritate Antonio.

Input Format

First-line contains a single integer T, denoting the number of test cases.
The First-line of every test case contains a single integer N, denoting the length of the Array.
The next line contains N space-separated integers, denoting the array elements.
Output Format

Output the length of the maximum length final array such that it does not irritate Antonio.
Constraints

1<=T<=10
1<=N<=105, sum of N over all the test cases <=2*105
1<=A[i]<=109
Sample Input 1

2

4

6 9 10 9

2

4 5

Sample Output 1

3

2

Explanation of Sample 1

For test case 1 :

Say we did not remove any element from the array, then points are :
P1 = (6,1), P2 = (9,2), P3 = (10,3), P4 = (9,4)

Here for points P1, P2, P4 :

Distance (P1,P4) = |9-6| + |4-1| = 6

Distance (P1,P2) = |9-6| + |2-1| = 4

Distance (P2,P4) = |9-9| + |2-4| = 2

As distance(P1,P2) + distance(P2,P4) = distance(P1,P4) it irritates Antonio and we cannot take the enrite array.

If we remove P4 from the end, then also points P1,P2, P3 irritates Antonio.
If we remove P1, from the beginning then there are none of the point triplets that irritate Antonio. So the length of the maximum length final array we can get is 3.**/