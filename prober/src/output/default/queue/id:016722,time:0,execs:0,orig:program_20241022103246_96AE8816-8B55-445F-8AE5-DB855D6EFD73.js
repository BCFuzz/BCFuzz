for (let i2 = -3, i3 = 10; i2 < i3; i3--) {
}
const v11 = new Float32Array(Float32Array, Float32Array, Float32Array);
const v13 = new Int8Array(v11, v11);
function f14(a15) {
    return v11;
}
v13.toString = f14;
const v16 = [5.0,-1000000.0,9.930868605520413,-Infinity,-1.7976931348623157e+308,-3.0,-5.874149474342256e+307,1.2687522835675878e+308,-1000000000000.0];
v16.value = v13;
const v20 = createGlobalObject().WebAssembly.Global;
try { new v20(v16); } catch (e) {}
gc();
