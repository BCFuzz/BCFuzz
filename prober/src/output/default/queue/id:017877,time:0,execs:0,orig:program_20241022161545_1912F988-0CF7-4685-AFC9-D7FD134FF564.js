const v2 = [1.7976931348623157e+308,-1000000000.0,-913.7634169951498,2.5926117183979694e+307];
function f3() {
    return v2;
}
function f4() {
    return 3736;
}
const v7 = new Uint8Array(1024);
function F8(a10, a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v7;
}
const v14 = new F8(v2, 3736, Uint8Array, F8);
for (const v16 of v14.d) {
    class C17 extends Int8Array {
        static p(a19, a20, a21, a22) {
        }
        static [f4] = v2;
        constructor(a24) {
        }
        [f3] = 3736;
    }
}
gc();
