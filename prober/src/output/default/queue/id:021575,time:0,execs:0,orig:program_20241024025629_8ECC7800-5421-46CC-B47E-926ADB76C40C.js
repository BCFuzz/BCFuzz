class C0 {
}
let v2;
try { v2 = ensureArrayStorage.o(); } catch (e) {}
for (let v3 = 0; v3 < 50; v3++) {
    class C4 {
        constructor(a6, a7) {
            a7.g = C0;
            try { a7(); } catch (e) {}
            a7.g = a7;
        }
    }
    const v9 = new C4(v2, C4);
    const v10 = new C4(C4, v9);
    const t14 = v10.constructor;
    new t14(ensureArrayStorage, v10);
}
gc();
