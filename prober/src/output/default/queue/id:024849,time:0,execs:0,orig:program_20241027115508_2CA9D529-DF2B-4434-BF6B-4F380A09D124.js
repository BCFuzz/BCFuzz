const o15 = {
    valueOf(a2) {
        const o3 = {
        };
        const v5 = new Proxy(Float32Array, o3);
        function f6(a7, a8, a9, a10) {
            const t6 = this.FinalizationRegistry;
            new t6(v5);
            return a2;
        }
        f6();
        return v5;
    },
};
o15.valueOf();
gc();
