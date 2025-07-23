function f0() {
    const o5 = {
        get e() {
            const v3 = new WeakMap();
            return v3.has();
        },
    };
    return o5.e;
}
const v9 = new Int8Array(191);
v9.sort(f0);
gc();
