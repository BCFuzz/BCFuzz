function f0() {
    return f0;
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    Uint8Array.valueOf = f0;
    const v6 = new Uint8Array(this);
    class C7 extends Uint8Array {
    }
    C7 + v6;
}
new F1(F1, f0);
new F1(F1, F1);
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
gc();
