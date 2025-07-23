class C4 extends WeakSet {
}
const v5 = new C4();
const v6 = new C4();
v5[v6 || 2147483648] *= -3;
gc();
