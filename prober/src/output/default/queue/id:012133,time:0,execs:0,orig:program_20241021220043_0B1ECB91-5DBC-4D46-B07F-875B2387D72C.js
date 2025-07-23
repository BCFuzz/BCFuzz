class C0 {
}
const v1 = new C0();
const v2 = new C0();
this.constructor.assign(v1, v2);
gc();
