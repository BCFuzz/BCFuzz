const o15 = {
    n(a3, a4, a5) {
        const v8 = (-2.0).constructor;
        const v9 = new Int16Array(a3, a3, v8);
        const v10 = new Int16Array();
        Reflect.apply(v10.copyWithin, v9, v8).fill(Uint8Array, this, 1024n);
        return a4;
    },
};
try { o15.n(); } catch (e) {}
gc();
