function solution(emergency) {
    const arr = emergency.slice().sort((a,b)=>b-a)
    return emergency.map((num) => arr.indexOf(num)+1)
}