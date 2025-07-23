function f0() {
    return f0;
}
class C1 extends f0 {
    constructor(a3, a4, a5) {
        super();
        const v8 = new Float64Array(257);
        for (const v9 of v8) {
            for (let v10 = 0; v10 < 5; v10++) {
                const v12 = new Set();
                super.c = v12["entries"]();
            }
        }
    }
}
for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
}
const v25 = new C1(f0, C1, C1);
new C1(v25, C1, v25);
gc();
