function f0() {
    return f0;
}
class C1 extends f0 {
}
function f2() {
    Math.trunc(--C1);
    function f7() {
        return f2;
    }
    const v8 = f7.apply(f7, arguments);
    try { v8(); } catch (e) {}
    return f7;
}
f2();
gc();
