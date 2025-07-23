function f1() {
    const v2 = new Float64Array(f1, f1, f1);
    return v2;
}
class C4 extends Date {
}
const v5 = new C4();
v5.toString = f1;
const v7 = v5.toString().buffer;
v7.transferToFixedLength();
try { v7.slice(); } catch (e) {}
gc();
