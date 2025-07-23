function f0() {
    return f0;
}
const v3 = new SharedArrayBuffer();
try { new Uint32Array(v3, f0, -629.2893948341869); } catch (e) {}
gc();
