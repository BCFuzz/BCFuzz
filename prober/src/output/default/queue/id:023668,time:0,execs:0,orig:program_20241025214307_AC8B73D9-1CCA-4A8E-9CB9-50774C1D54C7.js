function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
const v7 = new Int32Array();
function f8(a9) {
    a9[Symbol.toPrimitive] = Date;
    const o12 = {
        [Symbol]: v4,
        "g": a9,
        [f8]: v7,
    };
    return o12;
}
JSON.parse(JSON.stringify([f8(f8(f8)).g]));
for (let i22 = 0, i23 = 10; i22 < i23; i23--) {
}
gc();
