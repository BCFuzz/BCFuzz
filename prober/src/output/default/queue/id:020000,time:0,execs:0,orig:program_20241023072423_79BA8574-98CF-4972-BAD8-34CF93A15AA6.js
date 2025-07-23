const v1 = new Uint32Array();
const v2 = [4294967296,-1507112381];
const v3 = [0,8,-1073741824,-13];
v3.set = v1;
function f4() {
    return v3;
}
const o5 = {
    "getOwnPropertyDescriptor": f4,
};
const v7 = new Proxy(v2, o5);
try { v7.reverse(); } catch (e) {}
gc();
