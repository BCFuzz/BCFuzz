function f0() {
    return f0;
}
class C1 extends f0 {
    constructor(a3, a4) {
        super();
        for (let i = 0; i < 100; i++) {
            function f7(a8, a9, a10, a11) {
                class C12 {
                }
                const v14 = new SharedArrayBuffer();
                const v16 = new DataView(v14);
                try { v16.getUint16(v16); } catch (e) {}
                const o18 = {
                    __proto__: a10,
                };
                o18.e = o18;
                return o18;
            }
            f7(2, "o", f7());
        }
    }
}
new C1(C1, f0);
for (let i24 = 0, i25 = 10; i24 < i25; i25--) {
}
gc();
