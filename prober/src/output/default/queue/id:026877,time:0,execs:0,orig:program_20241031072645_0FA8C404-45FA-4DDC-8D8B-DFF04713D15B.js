class C1 {
    #toString(a3, a4) {
    }
}
new C1();
const v6 = new C1();
const v7 = v6.__lookupSetter__;
try { v7(); } catch (e) {}
const t8 = v6.constructor;
new t8();
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
    class C21 extends C1 {
    }
    new C21();
    const v24 = new Uint8Array(C21);
    try { v24.setFromBase64(v7, i13, v24, BigUint64Array, BigUint64Array); } catch (e) {}
}
const v27 = new BigUint64Array(586);
for (const v28 of v27) {
}
gc();
