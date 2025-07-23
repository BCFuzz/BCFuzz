async function f0(a1, a2) {
    const o5 = {
        "maxByteLength": 572,
    };
    const v7 = new SharedArrayBuffer(572, o5);
    const v9 = new Uint16Array(v7);
    v9.indexOf();
    return f0;
}
const v12 = f0().constructor;
try { new v12(); } catch (e) {}
for (let v14 = 0; v14 < 1000; v14++) {
}
gc();
