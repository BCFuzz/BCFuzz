class C0 {
}
const v1 = new C0();
const v2 = new C0();
v2.cause = v1;
TypeError(256, v2);
gc();
