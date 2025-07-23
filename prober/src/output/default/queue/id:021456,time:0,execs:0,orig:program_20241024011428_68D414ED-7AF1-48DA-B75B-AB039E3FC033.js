class C0 {
}
const v1 = new C0();
function f2(a3) {
    return f2;
}
Object.defineProperty(v1, 4, { enumerable: true, set: f2 });
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9(a10, a11) {
        const o12 = {
        };
        o12.get = a11;
        const v14 = new Proxy(v1, o12);
        v14[4];
        return a11;
    }
    try { f9(a8, a8); } catch (e) {}
}
new F4(f2, v1, f2);
gc();
