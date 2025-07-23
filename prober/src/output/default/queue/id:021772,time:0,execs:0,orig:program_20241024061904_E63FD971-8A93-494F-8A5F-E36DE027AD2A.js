for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
const v12 = new Uint8ClampedArray(8);
function f13(a14) {
    return a14;
}
const v16 = new Proxy(f13, v12);
class C17 extends v16 {
}
C17.f = C17;
gc();
