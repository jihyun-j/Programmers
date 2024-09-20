function solution(array) {
    const sorted = array.sort((a,b) => a-b) // 먼저 숫자들을 오름차순으로 정렬한다.
    const mid = Math.floor(sorted.length / 2) // 소수점 이하를 버린다.
 
    return sorted[mid] 
    
    /**
    테스트 케이스 [1,2,7,10,11]을 예를 들어 설명하면,
    mid 값은 원래 2.5이지만 소수점 이하를 버리면 2가 된다.
    배열은 0부터 시작되기 때문에 mid값이 2인 경우, 배열의 중간값인 세번째 요소가 반환된다.
    **/
}