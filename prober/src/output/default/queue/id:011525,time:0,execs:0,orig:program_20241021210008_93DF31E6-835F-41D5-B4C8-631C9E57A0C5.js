function f0() {
}
const v3 = new BigUint64Array(4096);
v3.findIndex(f0);
class C5 {
}
class C6 extends C5 {
}
for (let v7 = 0; v7 < 100; v7++) {
    class C8 extends C6 {
    }
    new C8();
}
gc();
