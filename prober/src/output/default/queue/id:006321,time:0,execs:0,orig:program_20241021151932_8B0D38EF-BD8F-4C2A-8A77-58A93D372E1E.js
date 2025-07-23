function f1() {
    return f1;
}
function F3(a5, a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f10() {
        return F3;
    }
    class C11 extends f10 {
    }
    let v12;
    try { v12 = C11(); } catch (e) {}
    class C13 extends Uint32Array {
    }
    a8 ^= Int32Array;
    const v14 = +v12;
    v14 - v14;
    for (let v16 = 0; v16 < 5; v16++) {
        for (let v17 = 0; v17 < 5; v17++) {
        }
        v16++;
        v16--;
    }
}
const v20 = new F3(f1, Uint32Array, 6n, f1);
const v21 = new F3();
const t26 = v21.constructor;
new t26(F3, F3);
const v24 = new F3();
const v25 = new F3(v21, v24, v20, v20);
const v26 = v25.constructor;
try { new v26(6n, f1, v25, 6n); } catch (e) {}
gc();
