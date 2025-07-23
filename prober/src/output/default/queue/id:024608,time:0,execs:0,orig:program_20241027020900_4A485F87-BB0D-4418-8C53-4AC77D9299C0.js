const v2 = Int32Array.toString();
const v3 = new Int32Array();
function f4(a5) {
    a5[Symbol.toPrimitive] = Date;
    const o8 = {
        ...v2,
        "g": a5,
        [f4]: v3,
    };
    return o8;
}
JSON.parse(JSON.stringify([f4(f4(f4)).g]));
for (let i18 = 0, i19 = 10; i18 < i19; i19--) {
}
for (let i29 = 0, i30 = 10 + 10; i30--, i29 < i30;) {
}
gc();
