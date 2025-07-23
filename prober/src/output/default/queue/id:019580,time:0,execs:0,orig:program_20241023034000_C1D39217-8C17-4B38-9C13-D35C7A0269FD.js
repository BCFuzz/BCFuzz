const v0 = `callee`;
const v1 = [5.0,-1000000.0,9.930868605520413,-Infinity,-1.7976931348623157e+308,-3.0,-5.874149474342256e+307,1.2687522835675878e+308,-1000000000000.0];
v1.value = v0;
const v5 = createGlobalObject().WebAssembly.Global;
try { new v5(v1); } catch (e) {}
for (let i9 = -3, i10 = 10; i10--, i9 < i10;) {
}
gc();
