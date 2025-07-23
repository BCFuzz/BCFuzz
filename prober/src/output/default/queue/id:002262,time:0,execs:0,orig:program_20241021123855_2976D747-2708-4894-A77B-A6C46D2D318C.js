class C0 {
}
C0.name = C0;
const v1 = new C0();
const v2 = v1.constructor;
v2.bind(v2, v2, v1, v1, v2);
gc();
