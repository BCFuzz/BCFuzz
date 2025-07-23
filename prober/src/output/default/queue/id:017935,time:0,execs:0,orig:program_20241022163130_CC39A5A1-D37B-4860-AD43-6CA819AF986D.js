const v0 = [];
const o1 = {
};
const v3 = new Proxy(v0, o1);
const v5 = new Float32Array(o1, Float32Array, o1);
function f6() {
    const v8 = new Int8Array();
    return v8;
}
v5.constructor = f6;
const v9 = v5.constructor;
const t11 = v9(Float32Array, v9).constructor;
new t11(v3);
gc();
