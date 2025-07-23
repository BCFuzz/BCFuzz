const o2 = {
    "maxByteLength": 1936989208,
};
const v4 = new ArrayBuffer(1235, o2);
const v6 = new Int32Array(v4);
function f8(a9) {
    const v11 = createGlobalObject();
    for (let i14 = 0, i15 = 10; i14 < i15; i15--) {
    }
    const t9 = v11.WebAssembly.Module;
    new t9(a9);
    return v11;
}
BigInt64Array.toString = f8;
class C25 extends BigInt64Array {
}
try { C25.toString(v6); } catch (e) {}
gc();
