function f0() {
    return f0;
}
class C1 {
}
const v2 = new C1();
v2.isPrototypeOf(f0);
new BigInt64Array(C1);
gc();
