class C0 {
}
const v1 = new C0();
function f2(a3) {
    return C0;
}
Object.defineProperty(v1, 4, { enumerable: true, set: f2 });
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = [a7,a7,a7,a7];
    function f10(a11, a12) {
        const o13 = {
        };
        function f14(a15, a16) {
        }
        o13.get = f14;
        const v18 = new Proxy(v1, o13);
        v18[4];
        return f2;
    }
    v9.constructor = f10;
    class C21 extends v9.constructor {
    }
    new C21();
}
new F4(F4, f2, f2);
gc();
