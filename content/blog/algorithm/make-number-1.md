---
title: "[1로 만들기] 다이나믹 프로그래밍을 해보자"
date: 2020-01-11 15:01:27
category: algorithm
draft: false
---

> [Baekjoon 1463번 문제 - 1로 만들기](https://www.acmicpc.net/problem/1463)

문제는 되게 간단하다. 

- X가 3으로 나누어 떨어지면, 3으로 나눈다.
- X가 2로 나누어 떨어지면, 2로 나눈다.
- 1을 뺀다.

정수 N이 주어졌을 때, 위와 같은 연산 세 개를 적절히 사용해서 1로 만드는 연산횟수의 **최솟값**을 출력해야 한다.
## 깊이 우선 탐색(DFS), 너비 우선 탐색(BFS)
처음 문제를 접했을 때 재귀방식의 DFS, BFS가 떠올랐다. 그래서 무작정 코드를 다음과 같이 작성해보았다.

```python
def make_one(n):
    min_count = 1000000
    if n == 1:
        return 0
    if n % 3 == 0:
        tmp = make_one(n // 3)
        if tmp < min_count:
            min_count = tmp
    if n % 2 == 0:
        tmp = make_one(n // 2)
        if tmp < min_count:
            min_count = tmp
    tmp = make_one(n - 1)
    if tmp < min_count:
        min_count = tmp
    return min_count + 1


quest = int(input())
print(make_one(quest))

```

 

무작정 재귀방식으로 풀어보았다. 예제에 있던 입출력 결과가 다 동일하기에 제출했다. 시간초과가 발생했다. 이 문제에는 2초라는 시간 제한이 존재한다. 입력값에 5000의 숫자를 넣었더니 당연하게도 프로그램이 끝나질 않았다. 

> **시간복잡도란?** 문제를 해결하는데 걸리는 시간과 입력의 함수 관계를 가리킨다.

위의 문제를 예로 들자면 makeone이라는 함수가 **O(n)**이라는 시간복잡도를 가진다고 가정하고 60을 입력했을 때 

1. 3으로 나눠 20이 된다. 
2. 2로 나눠 30이 된다. 
3. 1을 빼서 59가 된다.

이렇게 세가지 경우의 수를 가질 수 있다. 재귀를 풀게 되면 이렇게 나온 숫자들을 또 다시 make_one함수의 매개변수로 넣어서 각각 같은 과정을 거치게 된다. 즉, 함수에 한번 들어갈 때마다 O(n)의 과정을 3번씩 거치게 되고 또 넘겨진 n값으로 계속 물고 물어져서 배수로 커져가는 시간복잡도를 확인할 수 있다.  
이렇게 되면 낮은 숫자일 때는 별 문제 없는 것처럼 보일 수 있지만 큰 숫자로 갈 수록 계산 시간이 엄청 늦어진다.

이 과정에서 앞에 벽을 세운 것 마냥 답답했다. 자료구조를 배워 이제 막 해결하나 싶었는데 시간초과를 해결할 방법이 떠오르지 않았다. 그렇다고 풀이를 본다거나 포기하는 것은 자존심이 상할 것 같았다. 그러던 도중 페이지의 하단을 보니 문제의 분류가 표시되어 있는 것이 아닌가! 다이나믹 프로그래밍이라고 적혀있었다. 풀이를 보느니 이것을 공부해서 직접 적용해보는 것이 도움이 되리라 생각했다. 

## 다이나믹 프로그래밍(DP)

다이나믹 프로그래밍은 **하나의 문제는 단 한번만 풀도록 하는 알고리즘**이며 한 번 푼 것을 여러 번 다시 푸는 비효율적인 알고리즘을 개선시키는 방법이다.  

**초기값**을 정하고 **점화식**을 찾아낸 후 밑에서부터 차례로 구해나가 답을 알아내는 형태이다.

```python
def dynamic(n):
    storage = [0, 0, 1, 1]
    for up in range(4, n+1):
        check = 10000
        if up % 3 == 0:
            tmp = storage[up // 3]
            if tmp < check:
                check = tmp
        if up % 2 == 0:
            tmp = storage[up // 2]
            if tmp < check:
                check = tmp
        tmp = storage[up - 1]
        if tmp < check:
            check = tmp
        storage.append(check +1)
    return storage[n]

n = int(input())
print(dynamic(n))
```

storage 리스트는 인덱스 번호값이 1로 만드는 연산횟수의 최솟값이 저장된다. 여기서 초기값으로 1의 경우 0, 2의 경우 1, 3의 경우 1이라는 초기값을 계산하고 리스트에 넣어두었다.

보기 쉽게 딕셔너리로 나타내면 storage = {1:0, 2:1, 3:1}가 된다. 여기서 4의 연산최솟값을 구해야 된다하면 4는 3과 2로 떨어질 수 있고 우린 3에 대한 연산최솟값을 리스트에 갖고 있기 때문에 dynamic(4) = min(storage[3], storage[2])로 쉽게 구할 수 있다. 이렇게 구해진 4의 최솟값을 리스트에 추가시키고 5의 연산최솟값을 찾아 또 다시 저장한다. 이렇게 밑에서부터 차례로 구해나가다 보면 내가 입력한 값의 답을 알아낼 수 있게 된다.

> 이렇게 중복 계산을 제거하기 위해서 이전의 값을 저장해두는 것을 **메모이제이션**이라고 한다.

과정 자체는 굉장히 복잡해 보이지만 시간복잡도에서는 굉장히 빠른 속도를 보인다. 점화식이 맞는 값을 찾아 리스트에서 값을 꺼내오기만 하면 되기 때문에 **O(n)**이라고 볼 수 있다. (직접 코드를 입력해서 확인해보더라도 체감이 될 정도로 빠르다.)

이것이 다이나믹 프로그래밍의 가장 큰 장점인 것 같다.

## 부족한 점
문제를 풀어보면서 재귀방식은 프로그래머가 이해하기 쉽게 코드를 짤 수 있지만 복잡한 연산에서는 어울리지 않는 것 같고 다이나믹 프로그래밍은 메모리를 조금 더 사용해서 연산 시간을 대폭 줄이는 방식이라는 느낌을 받았다.

다이나믹 프로그래밍을 처음 접했기 때문에 점화식을 세우는 과정이나 시간복잡도를 이해하는 부분에서 많은 부족함이 보이지만 지금은 문제를 해결했다는 점에서 만족감을 느끼고 있다.