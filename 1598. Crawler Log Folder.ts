function minOperations(logs: string[]): number {
    let count = 0;
    for (let i = 0; i < logs.length; i++) {
		if (logs[i] === './'){
            continue;
        } if (logs[i] !== '../') {
            count++;
        } else {
            count = Math.max(0, count-1);
        }
	}
    return count;
};

// ================================ Best Solution With Respect to Space=====================================
function minOperations(logs: string[]): number {
    let counter = 0;
    logs.forEach(log => {
      if(log === '../') {
        if(counter > 0) counter--
        return
      }

      if(log === './') return

      counter++
    })
  return counter
};

// ================================ Best Solution With Respect to Time======================================
function minOperations(logs: string[]): number {
    return logs.reduce<string[]>((acc, command) => {
        if (command === '../') {
            acc.pop();

            return acc;
        }

        if (command === './') {
            // do notghing
        } else {
            acc.push(command);
        }

        return acc;
    }, []).length;
};
