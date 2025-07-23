function f0() {
    return f0;
}
class C1 extends f0 {
}
function f2() {
    Math.abs(--C1);
    function f7() {
        return f2;
    }
    const v8 = f7.apply(f7, arguments);
    try { v8(v8, f2, v8, f0, v8); } catch (e) {}
    return C1;
}
f2();
gc();
