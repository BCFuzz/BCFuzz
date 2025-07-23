const v3 = ([615886158n,7n,7n])[2];
const v4 = [4294967296,-1507112381];
const v5 = [0,8,-1073741824,-13];
v5.set = v3;
function f6() {
    return v5;
}
const o7 = {
    "getOwnPropertyDescriptor": f6,
};
const v9 = new Proxy(v4, o7);
try { v9.reverse(); } catch (e) {}
gc();
