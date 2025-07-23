class C1 {
    m(a3, a4) {
        a3[9] |= 1e-15;
    }
}
const v5 = new C1();
const v6 = new C1();
const v9 = new Int32Array(128);
const v11 = v9["indexOf"](v6);
try { v5.m(v11); } catch (e) {}
gc();
