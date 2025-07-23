const v2 = new Int32Array(209);
const v3 = [209,209,209];
function f4() {
    const v6 = new Int16Array(v2, 209, 209);
    function f7(a8) {
        return v6;
    }
    class C9 extends f7 {
        [-1] = Int16Array;
    }
    let v10;
    try { v10 = new C9(); } catch (e) {}
    return v10;
}
const v12 = [f4];
Reflect.apply(v3.toSorted, v2, v12);
gc();
