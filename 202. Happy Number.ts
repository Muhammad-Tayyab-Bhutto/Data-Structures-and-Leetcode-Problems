function isHappy(n: number, sum: number = 0, n2: number = 10): boolean {
    if (n === 1) return true;
    if (n2 === 0) return false;
    for (let c of n + '') sum += +c * +c;
    return isHappy(sum, 0, n2 - 1);
};

// ============================ Slow Fast Algorithm =========================
function digitSquareSum(n: number): number {
    let Σ = 0
    while (n) {
        const Ω = n % 10
        Σ += Ω ** 2
        n = n / 10 >> 0
    }
    return Σ
};
function isHappyy(n: number): boolean {
    let slow = n, fast = n
    do {
        slow = digitSquareSum(slow);
        fast = digitSquareSum(fast);
        fast = digitSquareSum(fast);
    } while (slow !== fast);
    return slow === 1;
};