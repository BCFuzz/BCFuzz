class C0 {
}
const v1 = new C0();
const o2 = {
};
const v3 = o2.constructor;
v3.seal(v1);
v3.entries(v1);
gc();
