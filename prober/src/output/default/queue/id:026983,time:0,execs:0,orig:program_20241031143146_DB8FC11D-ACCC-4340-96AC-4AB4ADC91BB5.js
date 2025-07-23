class C2 extends Uint8ClampedArray {
    toString(a4, a5, a6) {
        Object.defineProperty(a5, "toString", { writable: true, configurable: true, value: Symbol });
    }
}
const v7 = new C2();
const v10 = new Int32Array(1880);
for (let i13 = 0, i14 = 10; i14--, i13 < i14;) {
    const v23 = createGlobalObject().Atomics;
    try { v23.add(v10, v10, v7); } catch (e) {}
}
gc();
