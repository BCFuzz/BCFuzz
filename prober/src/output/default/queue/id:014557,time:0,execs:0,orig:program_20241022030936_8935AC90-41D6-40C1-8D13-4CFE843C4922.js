function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
}
const v3 = new C2();
for (let v4 = 0; v4 < 37; v4++) {
    v3.d = v4;
    delete v3.d;
}
for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
}
gc();
