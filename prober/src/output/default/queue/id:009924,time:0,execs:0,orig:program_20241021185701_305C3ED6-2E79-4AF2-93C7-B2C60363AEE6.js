class C0 {
}
const v1 = new C0();
const v2 = new C0();
const v4 = new Uint8Array();
const v5 = [v2,v2,v2,v2,v2];
function f6(a7, a8) {
    return v4;
}
const v10 = Date();
function f11(a12, a13) {
    function f15(a16) {
        return a13;
    }
    f6(v5, ...v4, v10, ...arguments);
    return v5;
}
f11(v2, v1);
gc();
