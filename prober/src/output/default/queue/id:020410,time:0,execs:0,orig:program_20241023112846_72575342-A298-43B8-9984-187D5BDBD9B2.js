const v1 = new Float64Array();
const o24 = {
    get d() {
        for (let v3 = 0; v3 < 100; v3++) {
            function f4(a5, a6, a7) {
                for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
                }
                const v19 = new Int16Array(v1);
                ("c" + a5) + v19;
                return v3;
            }
            f4(f4, f4, this);
        }
        return v1;
    },
};
const o25 = {
    ...o24,
};
gc();
