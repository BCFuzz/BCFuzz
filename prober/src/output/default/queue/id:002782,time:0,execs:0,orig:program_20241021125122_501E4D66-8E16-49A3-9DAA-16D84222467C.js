function f0() {
}
let v1 = f0();
f0();
-(v1-- && 10);
function f9() {
    return f9;
}
const v12 = new Int32Array(1, 1, 1);
const v15 = new Uint32Array(4096);
try { v12.indexOf(Int32Array, v15, f9, 4096); } catch (e) {}
gc();
