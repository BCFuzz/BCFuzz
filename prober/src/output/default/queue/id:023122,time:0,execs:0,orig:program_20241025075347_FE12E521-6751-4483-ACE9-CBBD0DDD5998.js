const v0 = [];
const v3 = new Int32Array(Date, Int32Array, Int32Array);
v3.toJSON = v0;
function f4(a5) {
    a5[Symbol.toPrimitive] = Date;
    const o8 = {
        "g": a5,
        [f4]: v3,
    };
    return o8;
}
JSON.parse(JSON.stringify([f4(f4(f4)).g]));
for (let i18 = 0, i19 = 10; i18 < i19; i19--) {
}
gc();
