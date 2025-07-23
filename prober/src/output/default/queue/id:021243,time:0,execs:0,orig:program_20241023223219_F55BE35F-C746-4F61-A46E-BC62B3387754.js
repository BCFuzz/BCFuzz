const v2 = (-9223372036854775807).__proto__;
const o3 = {
};
o3.deleteProperty = Int8Array;
const v5 = new Proxy(v2, o3);
function f6(a7) {
    return delete v5[a7];
}
try { f6(-9223372036854775807); } catch (e) {}
gc();
