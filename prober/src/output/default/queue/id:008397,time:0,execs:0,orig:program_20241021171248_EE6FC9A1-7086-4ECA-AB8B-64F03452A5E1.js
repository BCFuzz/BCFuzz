class C1 extends Array {
}
const v2 = new C1();
const v3 = new C1();
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const v9 = a7.splice();
    function f10() {
        return f10;
    }
    Object.defineProperty(v9, 94, { configurable: true, enumerable: true, get: f10 });
    v9.pop(Array);
}
new F4(v2, v3);
gc();
