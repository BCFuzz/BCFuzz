const v2 = new Map();
function f3(a4) {
    const v5 = `
        const v7 = ([1.7664845889080372,0.18563487804419587,2.0,-1.0,2.3318882112552703]).length;
        v7 ^ v7;
    `;
    return eval(v5);
}
v2[Symbol.toPrimitive] = f3;
([127,-14,1073741823,1641801041,-4294967295,536870912,6,4294967295]).copyWithin(Int32Array, v2);
gc();
