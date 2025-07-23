function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F0(F0);
const v4 = v3.constructor;
const v5 = [5.0,-1000000.0,9.930868605520413,-Infinity,-1.7976931348623157e+308,-3.0,-5.874149474342256e+307,1.2687522835675878e+308,-1000000000000.0];
Object.defineProperty(v5, "mutable", { configurable: true, get: v4 });
const v9 = createGlobalObject().WebAssembly.Global;
try { new v9(v5); } catch (e) {}
for (let i13 = -3, i14 = 10; i14--, i13 < i14;) {
}
gc();
