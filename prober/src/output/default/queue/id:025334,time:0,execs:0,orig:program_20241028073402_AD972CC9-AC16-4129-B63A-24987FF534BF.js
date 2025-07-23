const v0 = /a\nW/vgi;
function f1(a2, a3, a4, a5) {
    for (const v8 of a2.toString().link(f1)) {
        function f9(a10, a11) {
            return a10;
        }
        new Promise(f9);
        function F14(a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
        }
        function f18(a19, a20) {
            return v0;
        }
        Reflect.construct(Promise, [f18], F14);
        new Promise(f18);
    }
    return v0;
}
f1(v0);
gc();
