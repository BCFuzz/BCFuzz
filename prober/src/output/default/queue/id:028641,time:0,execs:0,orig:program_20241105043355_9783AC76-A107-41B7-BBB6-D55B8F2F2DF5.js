for (let i2 = -3, i3 = 10; i2 < i3; i3--) {
}
const o10 = {
};
const v13 = (1.7976931348623157e+308).toString();
const v14 = v13.link(658249368, v13, o10, v13);
for (const v15 of v14) {
    o10[v15] /= 658249368;
}
const v19 = new Int32Array(Date, v14, v14);
function f20(a21) {
    a21[Symbol.toPrimitive] = Date;
    const o24 = {
        ...o10,
        "g": a21,
        [f20]: v19,
    };
    return o24;
}
JSON.parse(JSON.stringify([f20(f20(f20)).g]));
gc();
