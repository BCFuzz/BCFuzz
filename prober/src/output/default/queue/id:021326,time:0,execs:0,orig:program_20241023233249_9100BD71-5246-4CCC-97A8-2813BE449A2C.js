class C0 {
}
const v2 = this.constructor;
function f3(a4, a5, a6) {
    const v7 = a5?.g;
    try { v7(C0); } catch (e) {}
    try { a5.call(v2, a5); } catch (e) {}
    const v11 = a4.bind().apply;
    try { v11(); } catch (e) {}
    try { v11.apply(v11); } catch (e) {}
    return a6;
}
f3.g = f3;
f3(f3, f3);
gc();
