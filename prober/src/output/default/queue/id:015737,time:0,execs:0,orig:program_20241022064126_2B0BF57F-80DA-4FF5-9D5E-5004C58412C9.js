const v1 = new Int8Array(Int8Array);
const v2 = [5.0,-1000000.0,9.930868605520413,-Infinity,-1.7976931348623157e+308,-3.0,-5.874149474342256e+307,1.2687522835675878e+308,-1000000000000.0];
v2.value = v1;
const v6 = createGlobalObject().WebAssembly.Global;
try { new v6(v2); } catch (e) {}
for (let i10 = -3, i11 = 10; i11--, i10 < i11;) {
}
gc();
