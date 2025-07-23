class C0 {
}
const v1 = new C0();
const v2 = [v1];
v2[1] = v2;
new Map(v2);
gc();
