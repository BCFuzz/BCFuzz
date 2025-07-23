function f1() {
    return "128";
}
class C2 {
    constructor(a4, a5) {
        for (let v6 = 0; v6 < 100; v6++) {
        }
        const o11 = {
            n(a8, a9, a10) {
                return a10;
            },
        };
        const v12 = o11.n;
        v12[Symbol.toPrimitive] = f1;
        let v15;
        try { v15 = a4(); } catch (e) {}
        const v16 = `object${v15}-1126020689${v12}boolean`;
        this[v16] = v16;
    }
}
new C2("128", C2);
new C2(C2, f1);
gc();
