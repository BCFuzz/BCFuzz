function f0() {
    const o7 = {
        get g() {
            super[-2.6028316716710094e+307];
            return f0;
        },
        valueOf(a5, a6) {
            return this;
        },
    };
    o7.c = o7;
}
const v10 = new Float64Array(257);
for (const v11 of v10) {
    class C12 extends f0 {
    }
    new C12();
}
gc();
