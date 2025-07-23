function f0() {
    return f0;
}
class C1 {
    static set b(a3) {
        Object.defineProperty(this, 2276664664, { configurable: true, get: fullGC });
    }
}
const v5 = new C1();
const o6 = {
    __proto__: C1,
};
C1.b = v5;
const v7 = [f0];
for (let i10 = 0, i11 = 10;
    i10 < i11;
    (() => {
        i11--;
        const o22 = {
            n(a17, a18, a19) {
                const t3 = this.Float16Array;
                new t3(v7);
                return a18;
            },
        };
        const t8 = o22.n;
        t8();
    })()) {
}
gc();
