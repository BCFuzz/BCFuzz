function f0() {
    return f0;
}
class C1 {
}
const v2 = new C1();
this.constructor.seal(this);
this.constructor.defineProperties(v2, this);
for (let i11 = 0, i12 = 10; i11 < i12; --i12) {
}
gc();
