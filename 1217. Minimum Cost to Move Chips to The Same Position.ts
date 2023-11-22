function minCostToMoveChips(position: number[]): number {
    let even_cost: number = 0;
    let odd_cost: number = 0;
    for (let i = 0; i < position.length; i++) {
        if (position[i] % 2 == 0) {
            even_cost++;
        } else {
            odd_cost++;
        }
    }
    return Math.min(even_cost, odd_cost);
};