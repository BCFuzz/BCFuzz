function f2() {
    return Reflect.defineProperty(("valueOf")[1]);
}
Float64Array.valueOf = f2;
const v7 = new Uint32Array();
try { v7.slice(Float64Array); } catch (e) {}
gc();
