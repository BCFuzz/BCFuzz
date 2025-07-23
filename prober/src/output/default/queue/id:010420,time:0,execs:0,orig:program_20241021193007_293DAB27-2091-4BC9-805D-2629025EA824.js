class C1 {
}
const v2 = new C1();
v2.length = 12;
function F3() {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8) {
        return 1000;
    }
    SharedArrayBuffer.valueOf = f7;
    const v10 = new SharedArrayBuffer(SharedArrayBuffer);
    const v11 = new Uint8ClampedArray(v10);
    v11.set(v2);
}
new F3();
gc();
