class C0 {
}
const v1 = new C0();
for (let i = 0; i < 5; i++) {
    delete v1.h;
}
gc();
