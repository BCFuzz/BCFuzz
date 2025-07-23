function f0() {
    const o2 = {
        6: "object",
    };
    return o2;
}
function F3() {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        class C10 {
        }
        class C11 extends C10 {
        }
        Object.defineProperty(C10, 2, { value: NaN });
    }
    new F5(f0, F5);
}
new F3();
for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
}
const v24 = f0();
class C26 extends f0 {
    [16n] = v24;
}
const v27 = new C26();
v27[16] = v27;
gc();
