const o0 = {
};
function f1() {
    const v4 = new ArrayBuffer(4294967296);
    const v6 = new Int16Array(v4);
    try { v6.findLast(f1); } catch (e) {}
    for (let i10 = 0, i11 = 10; i11--, i10 < i11;) {
    }
}
o0[Symbol.toPrimitive] = f1;
class C20 {
    [o0];
}
gc();
