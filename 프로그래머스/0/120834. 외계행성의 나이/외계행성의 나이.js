function solution(age) {
    const characters = Array.from({length: 26}, (v,i) => String.fromCharCode(i + 97))
    const ageArr = String(age).split('')
    let result=''
  
    for (let i=0; i < ageArr.length; i++) {
        for(let j=0; j < characters.length; j++) {
            if(ageArr[i] == j) {
                result += characters[j]
            }
        }
    }
    
    return result
}