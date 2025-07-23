const v2 = new Int32Array(209);
const v3 = [Int32Array,Int32Array,Int32Array,Int32Array];
function f4() {
    const v6 = new Int16Array(209, 209, 209);
    function f7(a8) {
        return v6;
    }
    class C9 extends f7 {
        4294967296 = Int16Array;
    }
    try { new C9(); } catch (e) {}
    return v2;
}
const v12 = [f4];
Reflect.apply(v3.toSorted, v2, v12);
gc();
