function f0(a1, a2) {
    return a2;
}
const v3 = [3,536870912,0,-16,1073741825];
const v4 = [-61001,-536870912,-2147483647];
const v5 = `
    let v6 = 1037771175n;
    const v8 = new Map();
    const v10 = v8.has.name;
    let v13 = +(v8 | v4) <= v10;
    if (!v13) {
    } else {
        [f0,v13,v6] = v3;
    }
    for (let v14 = 0; v14 < 5; v14++) {
    }
`;
eval(v5);
gc();
