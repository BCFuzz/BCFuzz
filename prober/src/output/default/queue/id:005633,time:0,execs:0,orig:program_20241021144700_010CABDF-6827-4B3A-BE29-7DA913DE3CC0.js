const v1 = new WeakSet();
class C3 extends Date {
}
const v4 = new C3();
v4.setUTCMilliseconds(v1);
v4.getFullYear();
gc();
