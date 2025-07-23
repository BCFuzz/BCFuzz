class C0 {
}
const v1 = new C0();
const v2 = new C0();
v2[4] = v2;
this.constructor.assign(v1, v2);
gc();
