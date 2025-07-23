class C0 {
}
class C1 extends C0 {
}
const v2 = new C1();
for (let i = 0; i < 5; i++) {
    new WeakRef(v2);
    new WeakRef(WeakRef);
}
gc();
