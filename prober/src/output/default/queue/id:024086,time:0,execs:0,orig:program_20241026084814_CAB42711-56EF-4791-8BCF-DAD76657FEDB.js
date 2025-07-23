class C1 extends Date {
}
const v2 = new C1();
function f3(a4, a5, a6, a7) {
    const v8 = a4.getTime;
    try { v8(v2, a5, a7); } catch (e) {}
    return f3;
}
f3(v2);
gc();
