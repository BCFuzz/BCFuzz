const v1 = new Uint8Array();
function f2() {
    return v1;
}
const o3 = {
};
const v5 = new Proxy(f2, o3);
const v7 = new Float32Array(v5);
v7.constructor = f2;
const t9 = v7.constructor;
t9().sort(v5);
gc();
