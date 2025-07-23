class C0 {
}
const v1 = new C0();
function f2(a3) {
    return f2;
}
Object.defineProperty(v1, 4, { enumerable: true, set: f2 });
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = [this,this,this,this];
    function f10(a11, a12) {
        const o13 = {
        };
        function f14(a15, a16) {
            return a15.__lookupGetter__(a16);
        }
        o13.get = f14;
        const v19 = new Proxy(v1, o13);
        v19[4];
        return a12;
    }
    v9.constructor = f10;
    class C22 extends v9.constructor {
    }
    new C22();
}
new F4(f2, v1, f2);
gc();
