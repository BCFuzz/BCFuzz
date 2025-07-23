class C4 {
    m(a6, a7) {
        [a6] = a6;
    }
}
const v8 = new C4();
v8[Symbol.iterator] = Date;
try { v8.m(v8); } catch (e) {}
gc();
