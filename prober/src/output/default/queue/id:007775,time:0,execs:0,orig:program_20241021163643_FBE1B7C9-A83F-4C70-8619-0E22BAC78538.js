function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
new F1();
function f4(a5) {
    const o9 = {
        "maxByteLength": 2312845920,
    };
    const v11 = new ArrayBuffer(750704325, o9);
    const v13 = new Int8Array(v11);
    v13["268435440"] = 1.7976931348623157e+308;
}
f4();
f4();
gc();
