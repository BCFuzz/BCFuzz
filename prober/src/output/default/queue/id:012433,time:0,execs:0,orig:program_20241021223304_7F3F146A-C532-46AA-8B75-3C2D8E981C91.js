class C0 {
}
const v1 = new C0();
const v2 = v1.toString;
for (let i = 0; i < 250; i++) {
    v2();
}
gc();
