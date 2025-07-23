function f0() {
    return f0;
}
const v1 = f0();
function f2(a3) {
    return f0;
}
v1[Symbol.iterator] = f2;
try { new Uint32Array(v1); } catch (e) {}
const v10 = new Int8Array(3516);
v10[2986];
for (let v12 = 0; v12 < 250; v12++) {
    v12++;
    v12--;
}
gc();
