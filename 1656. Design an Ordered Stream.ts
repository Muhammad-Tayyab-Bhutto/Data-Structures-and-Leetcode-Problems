class OrderedStream {
    arr: string[];
    head: number;
    constructor(n: number) {
        this.arr = new Array(n);
        this.head = 0;
    }

    insert(idKey: number, value: string): string[] {
        this.arr[idKey - 1] = value;

        let res = [];
        if (idKey - 1 === this.head) {
            while (this.arr[this.head]) {
                res.push(this.arr[this.head++]);
            }
        }

        return res;
    }
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */