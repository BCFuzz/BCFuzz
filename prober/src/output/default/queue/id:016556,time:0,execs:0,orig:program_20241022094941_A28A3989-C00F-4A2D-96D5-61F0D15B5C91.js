function f0() {
    return f0;
}
class C1 extends f0 {
}
function f2() {
    return f2;
}
class C3 extends f2 {
}
const v4 = new C3();
v4.a = v4;
for (let v5 = 0; v5 < 10; v5++) {
    const v6 = [-60211,2,1024,-4];
    function f7(a8, a9, a10, a11) {
        function F12(a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            a9.n(this);
        }
        new F12(a11, C1, C1);
        return f7;
    }
    try { f7(v6, C1); } catch (e) {}
}
gc();
