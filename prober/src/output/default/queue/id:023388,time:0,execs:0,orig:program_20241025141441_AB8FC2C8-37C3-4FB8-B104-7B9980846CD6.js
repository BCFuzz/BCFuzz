const v1 = new WeakMap();
const v4 = new Int16Array(257);
const v7 = new Int32Array();
function f8(a9) {
    a9[Symbol.toPrimitive] = Date;
    const o12 = {
        "g": a9,
        [f8]: v7,
        [v4]: v1,
    };
    return o12;
}
JSON.parse(JSON.stringify([f8(f8(f8)).g]));
for (let i22 = 0, i23 = 10; i22 < i23; i23--) {
}
gc();
