const v0 = /(a)(ab)\1/mdyvs;
const v1 = -Infinity;
const v4 = new Int32Array(v0, v1);
function f5(a6) {
    a6[Symbol.toPrimitive] = Date;
    const o9 = {
        "g": a6,
        [v0]: v1,
        [f5]: v4,
    };
    return o9;
}
const v16 = JSON.stringify([f5(f5(f5)).g]).toUpperCase();
v16.matchAll(v16);
gc();
