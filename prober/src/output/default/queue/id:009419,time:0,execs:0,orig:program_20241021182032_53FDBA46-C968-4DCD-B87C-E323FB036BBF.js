class C0 {
}
const v1 = new C0();
function f2(a3) {
    return a3;
}
Object.defineProperty(v1, 4, { enumerable: true, set: f2 });
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = [v1,v1,v1];
    function f10(a11, a12) {
        const o13 = {
        };
        const v15 = new Proxy(v1, o13);
        v15[4] = v15;
        return a8;
    }
    v9.constructor = f10;
    class C17 extends v9.constructor {
    }
    new C17();
}
new F4();
gc();
