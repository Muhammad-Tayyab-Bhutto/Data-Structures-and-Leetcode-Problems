function totalFruit(fruits: number[]): number {
    let n = fruits.length;
    let type1 = fruits[0], type2 = -1;
    let combos = 1;//assume type1 is prev type
    let curLen = 1, max = 1;
    for (let i = 1; i < n; i++) {
        if (fruits[i] != type1 && fruits[i] != type2 && type2 != -1) {
            max = Math.max(curLen, max);
            curLen = combos + 1;
            type2 = type1;
            type1 = fruits[i];
            combos = 1;
            continue;
        }
        if (fruits[i] == type1)
            combos++;
        else //swap type1 and type2 
        {
            type2 = type1;
            type1 = fruits[i];
            combos = 1;
        }
        curLen++;
    }
    return Math.max(max, curLen);
};


// =========================================Best Solution With Respect To Time===================
/**
 * Sliding window + Frequency counter.
 * @time O(2n)
 * @space O(3)
 */
function totalFruit(fruits: number[]): number {
    // Basket with amount of each type fruit.
    const basket = new Map<number, number>();
    const n = fruits.length;
    const k = 2;
    let max = 0;

    for (let left = 0, right = 0; right < n; right++) {
        // Add the fruit[right] to the basket.
        basket.set(fruits[right], (basket.get(fruits[right]) || 0) + 1);

        if (basket.size <= k) {
            // When the basket has exactly two types of fruits.
            max = Math.max(max, right - left + 1);
        } else if (basket.size > k) {
            // When the basket has more that two types of fruits.
            // Keep removing the fruits[left] from the basket
            // until we have exactly two typse of fruits.
            for (; basket.size > k; left++) {
                if (basket.get(fruits[left]) > 1) {
                    basket.set(fruits[left], basket.get(fruits[left]) - 1);
                } else {
                    basket.delete(fruits[left]);
                }
            }
        }
    }

    return max;
}
// ==========================Best Solution With Respect To Memory=================================
function totalFruit(fruits: number[]): number {
    let meetsFruit = new Map();
    let startIndex = 0;
    let max = 0;

    for (let i = 0; i < fruits.length; i++) {
        meetsFruit.set(fruits[i], (meetsFruit.get(fruits[i]) ?? 0) + 1);
        while (meetsFruit.size > 2) {
            const fruit = fruits[startIndex++];
            const nums = meetsFruit.get(fruit)
            if (nums > 1) meetsFruit.set(fruit, nums - 1);
            else if (nums === 1) meetsFruit.delete(fruit);
        }
        max = Math.max(max, i - startIndex + 1);
    }
    return max;
};
