function f0() {
    const o7 = {
        get g() {
            return super[-2.6028316716710094e+307];
        },
        valueOf(a5, a6) {
            return a5;
        },
    };
}
const v10 = new Float64Array(257);
for (const v11 of v10) {
    class C12 extends f0 {
        d;
    }
    new C12();
}
gc();
