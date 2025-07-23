const v3 = ([[/qbu(?:ab|cde)[\d-\d]/dyis]]).toString();
for (let i6 = 0, i7 = 10; i6 !== i7; i7--) {
}
const v16 = new Int32Array();
function f17(a18) {
    a18[Symbol.toPrimitive] = Date;
    const o21 = {
        ...v3,
        "g": a18,
        [f17]: v16,
    };
    return o21;
}
JSON.parse(JSON.stringify([f17(f17(f17)).g]));
gc();
