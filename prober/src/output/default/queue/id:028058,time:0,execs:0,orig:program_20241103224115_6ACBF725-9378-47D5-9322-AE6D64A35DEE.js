for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
}
const v12 = new Int32Array();
function f13(a14) {
    a14[Symbol.toPrimitive] = Date;
    const o17 = {
        "g": a14,
        [f13]: v12,
    };
    return o17;
}
eval(JSON.stringify([f13(f13(f13)).g]));
for (let i28 = 0, i29 = 10; i28 < i29; i29--) {
}
gc();
