function findKthPositive(arr: number[], k: number): number {
    let set = new Set(arr);
    let count = 1;
    while (k) {
      if (!set.has(count)) {
        k--;
      }
      count++;
    }
    return count - 1;
}
  