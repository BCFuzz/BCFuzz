const v1 = this.WebAssembly;
const v2 = v1.Global;
const v3 = v1.Memory;
function f4(a5) {
    new v2();
    return v1;
}
v3.constructor = f4;
const v7 = v3.constructor;
try { v7(); } catch (e) {}
gc();
