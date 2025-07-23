class C2 {
    valueOf(a4, a5) {
        Object.defineProperty("f7", this, { configurable: true, value: -1.0 });
    }
}
const v6 = new C2();
function f7(a8, a9, a10, a11) {
    try { a8(v6, "f7", v6); } catch (e) {}
    const v14 = new ArrayBuffer(a11, ArrayBuffer);
    const v16 = new Int16Array(v14, ArrayBuffer, a10);
    return v16;
}
f7(f7);
gc();
