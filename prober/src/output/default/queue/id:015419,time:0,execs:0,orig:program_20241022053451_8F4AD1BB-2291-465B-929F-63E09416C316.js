let v0 = null;
function f1(a2, a3, a4) {
    const v6 = v0++;
    const v7 = v6 ^ v6;
    v7 | v7;
    return arguments;
}
const v11 = new BigUint64Array(586);
for (const v12 of v11) {
    for (let v13 = 0; v13 < 5; v13++) {
        f1(v12);
    }
}
gc();
