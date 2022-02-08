---
title: "[boj] 2470. 줄 세우기 (node.js)"
date: "2022-02-05T23:50:33Z"
description: "이분 탐색(Binary Search)"
---

### 문제 요약

[BOJ 2470 줄 세우기](https://www.acmicpc.net/problem/2470)

- **입력**: N개의 숫자가 주어진다.
- **출력**: 주어진 숫자들 중 합했을 때 0에 가장 가까운 수를 만드는 서로 다른 두 수를 출력하라.

### 풀이

- 이분 탐색의 입력값으로 주어진 수에 반대 부호를 붙여 합이 0에 가까운 수를 탐색한다.
- 이분 탐색으로 찾은 인덱스 좌우 값을 비교하여 더 나은 결과를 result 배열에 저장한다.

#### 내 풀이

```javascript
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let cnt = 0
const input = () => stdin[cnt++]

function binarySearch(arr, L, R, elem) {
  let result = L,
    mid
  while (L <= R) {
    mid = Math.trunc((L + R) / 2)
    if (arr[mid] < elem) {
      result = mid
      L = mid + 1
    } else {
      R = mid - 1
    }
  }
  return result
}

let stdin = []
rl.on("line", function (line) {
  stdin.push(line)
}).on("close", function () {
  const N = Number(input())
  let arr = input().split(" ").map(Number)
  let result = [],
    minSum = Infinity
  arr.sort((a, b) => a - b)
  for (let i = 0; i < N; i++) {
    idx = binarySearch(arr, i, N, -arr[i])
    if (arr[i] + arr[idx] == 0) {
      result = [arr[i], arr[idx]]
      break
    }
    if (arr[i] + arr[idx + 1] == 0) {
      result = [arr[i], arr[idx + 1]]
      break
    }
    if (idx > N - 1) continue
    if (i != idx && Math.abs(arr[i] + arr[idx]) < minSum) {
      minSum = Math.abs(arr[i] + arr[idx])
      result = [arr[i], arr[idx]]
    }
    if (i != idx + 1 && Math.abs(arr[i] + arr[idx + 1]) < minSum) {
      minSum = Math.abs(arr[i] + arr[idx + 1])
      result = [arr[i], arr[idx + 1]]
    }
  }
  console.log(result.sort((a, b) => a - b).join(" "))
  process.exit()
})
```

- 합이 0에 가까워야 하므로 Math.abs를 활용한다.
- 고른 두 수가 중복되지 않아야 하며 범위 내에 존재해야 하므로 예외처리를 꼼꼼히 해줘야 한다.
- 결과는 오름차순으로 출력한다.
