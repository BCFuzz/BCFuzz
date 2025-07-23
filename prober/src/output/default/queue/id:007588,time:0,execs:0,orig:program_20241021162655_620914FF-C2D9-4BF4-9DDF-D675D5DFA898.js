class C0 {
}
for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
const v13 = new Int8Array(255);
for (const v14 in v13) {
    class C15 {
        constructor(a17, a18) {
            try { a18(a17); } catch (e) {}
        }
    }
    const v20 = new C15(v13, Int8Array);
    const t12 = v20.constructor;
    new t12(C15, C0);
}
gc();
