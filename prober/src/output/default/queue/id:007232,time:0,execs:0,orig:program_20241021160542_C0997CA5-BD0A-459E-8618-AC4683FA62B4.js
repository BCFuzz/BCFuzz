class C1 extends Date {
}
function f3(a4) {
    const v6 = new Int8Array(a4, a4, a4);
    function f7() {
        return C1;
    }
    v6[Symbol.toPrimitive] = f7;
    try { v6.with(a4, v6); } catch (e) {}
    return Int8Array;
}
Int16Array.valueOf = f3;
class C11 extends Date {
}
const v12 = new C11();
v12.setYear(Int16Array);
gc();
