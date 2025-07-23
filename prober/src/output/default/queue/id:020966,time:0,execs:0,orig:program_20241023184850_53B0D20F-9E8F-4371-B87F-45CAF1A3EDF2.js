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
    new F2(F0, F0);
}
new F0();
for (let i13 = 0, i14 = 10; i13 < i14; i14--) {
}
function F21() {
    if (!new.target) { throw 'must be called with new'; }
}
const v23 = new F21();
const v26 = new Int32Array(681);
function f27(a28, a29, a30, a31) {
    const v32 = [26963,8,268435456,-1914503870,3,7,1073741823,-63999];
    const v33 = [1232491872,129,16,-49163,565601673,57427,-2];
    function f34(a35, a36, a37) {
        a36[3];
        const o39 = {
        };
        return o39;
    }
    f34[3] = v23;
    f34(f34, f34);
    f34(v33, v32);
    return a28;
}
v26.map(f27);
gc();
