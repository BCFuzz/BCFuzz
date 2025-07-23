const v2 = new Uint16Array(1300);
const v5 = new Int32Array();
function f6(a7) {
    a7[Symbol.toPrimitive] = Date;
    const o10 = {
        "g": a7,
        [f6]: v5,
        [1300]: v2,
    };
    return o10;
}
JSON.parse(JSON.stringify([f6(f6(f6)).g]));
for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
}
gc();
