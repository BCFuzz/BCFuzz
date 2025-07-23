function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0(F0, F0);
const v7 = Int32Array.toString(v4, F0, F0, Int32Array, Int32Array);
const v8 = new Int32Array();
function f9(a10) {
    a10[Symbol.toPrimitive] = Date;
    const o13 = {
        [Symbol]: v4,
        [-2]: v7,
        "g": a10,
        [f9]: v8,
    };
    return o13;
}
JSON.parse(JSON.stringify([f9(f9(f9)).g]));
for (let i23 = 0, i24 = 10; i23 < i24; i24--) {
}
gc();
