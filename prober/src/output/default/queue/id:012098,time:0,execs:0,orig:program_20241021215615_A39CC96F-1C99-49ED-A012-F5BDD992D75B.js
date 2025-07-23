const v3 = new Uint32Array(3, 3, 3);
function f4(a5) {
    const o8 = {
        "maxByteLength": 426554815,
    };
    const v9 = new ArrayBuffer(3, o8);
    const v10 = new Int16Array(v9);
    return v10;
}
v3.constructor = f4;
const t10 = v3.constructor;
for (const v13 in t10()) {
}
gc();
