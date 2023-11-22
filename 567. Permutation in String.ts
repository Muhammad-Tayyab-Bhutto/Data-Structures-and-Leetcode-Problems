function checkInclusion(s1: string, s2: string): boolean {
    let s1Map = new Array(26).fill(0)
    let s2Map = new Array(26).fill(0)
    let count = 0

    if (s1.length > s2.length) {
        return false
    }

    for (let i = 0; i < s1.length; i++) {
        s1Map[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++
        s2Map[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++
    }

    for (let i = 0; i < 26; i++) {
        if (s1Map[i] == s2Map[i]) {
            count++
        }
    }

    for (let i = 0; i < s2.length - s1.length; i++) {
        if (count == 26) {
            return true
        }
        let r = s2.charCodeAt(i + s1.length) - 'a'.charCodeAt(0)
        let l = s2.charCodeAt(i) - 'a'.charCodeAt(0)

        s2Map[r]++
        if (s2Map[r] == s1Map[r]) {
            count++
        } else if (s2Map[r] == s1Map[r] + 1) {
            count--
        }

        s2Map[l]--
        if (s2Map[l] == s1Map[l]) {
            count++
        } else if (s2Map[l] == s1Map[l] - 1) {
            count--
        }
    }

    return count == 26
}

// =======================================Best Solution With Respect To Memory======================
function checkInclusion(s1: string, s2: string): boolean {
    let s1Map = makeMap(s1)
    let s1Length = s1.length
    let window = []

    for(let i = 0;i < s2.length;i ++){

        if(s1Map.has(s2[i])){
            while(s1Map.get(s2[i]) < 1){
                s1Length = turnback(window, s1Map, s1Length)
            }
            window.push(s2[i])
            s1Map.set(s2[i], s1Map.get(s2[i]) - 1)
            s1Length -= 1
        }else {
            s1Length = reset(window, s1Map, s1Length)
        }

        if(s1Length === 0) return true
    }

    return false
};


function makeMap(string: string){
    let map = new Map

    for(let i = 0;i < string.length;i ++){
        map.set(string[i], (map.get(string[i]) ?? 0) + 1)
    }
    return map
}

function turnback(window: string[], map: Map<string, number>, length: number){
    let shiftOut = window.shift()
    if(map.has(shiftOut)){
        map.set(shiftOut, map.get(shiftOut) + 1)
        length += 1
    }
    return length
}

function reset(window: string[], map: Map<string, number>, length: number){
    while(window.length){
        let shiftOut = window.shift()
        map.set(shiftOut, map.get(shiftOut) + 1)
        length += 1
    }
    return length
}