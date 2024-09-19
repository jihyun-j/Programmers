function solution(numer1, denom1, numer2, denom2) {
    const denominator = denom1 * denom2 // 분모
    const numerator = (denom1 * numer2) + (denom2 * numer1) // 분자
    
    // 기약분수를 구하기 위해서 최대공약수를 이용해 나누어야 한다.
    const gcd = (numer, denom) => (numer % denom === 0 ? denom : gcd(denom, numer % denom))
    const getGcd = gcd(numerator, denominator)

    let answer = [numerator/getGcd, denominator/getGcd];
    return answer;
}