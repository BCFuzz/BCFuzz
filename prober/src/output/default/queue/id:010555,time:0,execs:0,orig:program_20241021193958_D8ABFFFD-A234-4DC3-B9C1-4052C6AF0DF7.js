const v0 = [4294967296,-1507112381];
const v1 = [0,8,-1073741824,-13];
v1.enumerable = v1;
function f2() {
    return v1;
}
const o3 = {
    "getOwnPropertyDescriptor": f2,
};
const v5 = new Proxy(v0, o3);
try { v5.reverse(); } catch (e) {}
gc();
