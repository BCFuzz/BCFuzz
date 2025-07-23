function f0() {
}
class C1 {
    constructor(a3, a4) {
        for (let v5 = 0; v5 < 100; v5++) {
        }
        const o10 = {
            n(a7, a8, a9) {
                return a7;
            },
        };
        const v11 = o10.n;
        const v13 = Symbol.toPrimitive;
        v11[v13] = f0;
        let v14;
        try { v14 = a3(o10, a3, C1, f0, v13); } catch (e) {}
        const v15 = `object${v14}-1126020689${v11}boolean`;
        this[v15] = v15;
    }
}
new C1(C1, C1);
new C1();
gc();
