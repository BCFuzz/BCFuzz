function f0() {
    const o6 = {
        get e() {
            const v3 = new WeakMap();
            const o4 = {
                __proto__: v3,
            };
            let v5;
            try { v5 = o4.has(); } catch (e) {}
            return v5;
        },
    };
    return o6.e;
}
const v10 = new Int8Array(191);
v10.sort(f0);
gc();
