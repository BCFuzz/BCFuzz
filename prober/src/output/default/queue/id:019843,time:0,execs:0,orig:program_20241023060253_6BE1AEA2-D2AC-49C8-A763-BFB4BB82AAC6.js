class C0 {
    constructor(a2, a3) {
        for (let v4 = 0; v4 < 100; v4++) {
            const v6 = new Uint8ClampedArray(this, v4);
            const t4 = v6.constructor;
            const v8 = new t4();
            const v9 = v8.toString();
            const o10 = {
            };
            const v11 = o10.constructor;
            class C13 extends Array {
            }
            try { v11.create(v9); } catch (e) {}
        }
    }
}
new C0(C0, C0);
new C0(C0, C0);
gc();
