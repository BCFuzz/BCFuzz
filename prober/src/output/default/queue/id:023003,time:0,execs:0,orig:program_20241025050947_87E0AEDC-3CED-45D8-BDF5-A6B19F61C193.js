const v2 = new Int32Array();
function f3(a4) {
    a4[Symbol.toPrimitive] = Date;
    const o7 = {
        "g": a4,
        [f3]: v2,
    };
    o7.toJSON = a4;
    return o7;
}
JSON.parse(JSON.stringify([f3(f3(f3)).g]));
for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
}
gc();
