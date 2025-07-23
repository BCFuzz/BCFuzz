const v1 = new Uint8Array();
function f2() {
    return v1;
}
const v3 = [Uint8Array,Uint8Array,Uint8Array,Uint8Array,Uint8Array];
const o4 = {
};
const v6 = new Proxy(v3, o4);
const v8 = new Float32Array();
v8.constructor = f2;
const t10 = v8.constructor;
const v10 = t10(Uint8Array);
try { v10.sort(v6); } catch (e) {}
gc();
