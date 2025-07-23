class C1 {
    #toString(a3, a4) {
    }
}
const v5 = new C1();
const v6 = v5.constructor;
try { v6(v5); } catch (e) {}
new v6(C1);
for (let i11 = 0, i12 = 10; i11 < i12; i12--) {
    class C19 extends C1 {
    }
    new C19();
    const v22 = new Uint8Array(i12, i12, i12);
    try { v22.setFromBase64(); } catch (e) {}
}
const v25 = new BigUint64Array(586);
for (const v26 of v25) {
}
gc();
