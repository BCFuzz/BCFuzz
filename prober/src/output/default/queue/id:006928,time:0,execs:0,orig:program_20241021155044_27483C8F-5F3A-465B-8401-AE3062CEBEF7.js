class C0 {
    constructor(a2, a3) {
        const v4 = [1000,268435440,8];
        const v5 = [-9007199254740990,-1543020116,-17970,-47671,-8255,19341,536870887];
        function f6(a7, a8) {
            try { a7.values(); } catch (e) {}
            const o10 = {
                __proto__: a7,
            };
            return o10;
        }
        const v11 = f6(v5);
        f6(v4);
        const v13 = f6(v11);
        v13[0] = v13;
        v13.flatMap(f6);
    }
}
const v15 = new C0(C0, C0);
const v16 = new C0(v15, v15);
new C0(v15, v16);
gc();
