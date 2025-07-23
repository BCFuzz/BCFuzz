function f1() {
    return 762477882;
}
for (let i4 = 0, i5 = 10;
    (() => {
        for (let i9 = 0, i10 = 10 + 10; i10--, i10;) {
        }
        const v17 = new Uint8ClampedArray(i5);
        v17.valueOf = f1;
        Object.defineProperty(Int16Array, "maximum", { writable: true, value: v17 });
        Int16Array.initial = 127;
        const v22 = this.WebAssembly.Memory;
        try { new v22(Int16Array); } catch (e) {}
        for (let i26 = 0, i27 = 10; i26 != i27; i27--) {
        }
        return i4 < i5;
    })();
    i5--) {
}
gc();
