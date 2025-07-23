function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        class C7 {
        }
        class C8 extends C7 {
        }
        Object.defineProperty(C7, 2, { value: NaN });
    }
    new F2();
}
const v10 = new F0();
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
const v23 = new Int32Array(681);
function f24(a25, a26, a27, a28) {
    const v29 = [26963,8,268435456,-1914503870,3,7,1073741823,-63999];
    const v30 = [1232491872,129,16,-49163,565601673,57427,-2];
    function f31(a32, a33, a34) {
        a33[3];
        const o36 = {
        };
        return a34;
    }
    f31(f31, f31);
    f31(v30, v29);
    return v10;
}
v23.map(f24);
gc();
