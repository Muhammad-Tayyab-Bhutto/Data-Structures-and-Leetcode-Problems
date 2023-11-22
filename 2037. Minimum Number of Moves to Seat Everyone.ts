// ======================= Beest Solutio With Respect To Memory =============================
function minMovesToSeat(seats: number[], students: number[]): number {
    if (seats.length !== students.length) {
        return 0;
    }
    seats.sort((a, b) => b - a);
    students.sort((a, b) => b - a);
    let i: number, result = 0;
    for (i = 0; i < students.length; i++) {
        result += Math.abs(students[i] - seats[i]);
    }

    return result;
};

// ======================= Beest Solutio With Respect To Time =============================
function minMovesToSeats(seats: number[], students: number[]): number {
    const sortArr = (arr: number[]): number[] => {
        let len = arr.length;
        let minIdx;

        for (let i = 0; i < len - 1; i++) {
            minIdx = i;

            for (let j = i + 1; j < len; j++) {
                if (arr[j] < arr[minIdx]) {
                    minIdx = j;
                }
            }
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }
        return arr
    }

    const sortedSeats = sortArr(seats);
    const sortedStudents = sortArr(students);

    return sortedSeats.reduce((t, c, i) => {
        t += Math.abs(c - sortedStudents[i]);
        return t;
    }, 0)

};