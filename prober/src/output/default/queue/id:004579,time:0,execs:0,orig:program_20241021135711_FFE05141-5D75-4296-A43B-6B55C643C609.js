const v2 = new BigUint64Array(127);
const v3 = v2[22];
class C4 {
    o(a6, a7) {
        a6.constructor(a6);
        try { a7.o(v3); } catch (e) {}
    }
}
const v10 = new C4();
v10.o(C4, v10);
gc();
