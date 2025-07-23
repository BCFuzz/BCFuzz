const v0 = [4294967296,-1507112381];
const v1 = [0,8,-1073741824,-13];
function f2(a3) {
    return f2;
}
v1.set = f2;
function f4() {
    return v1;
}
const o5 = {
    "getOwnPropertyDescriptor": f4,
};
const v7 = new Proxy(v0, o5);
try { v7.reverse(); } catch (e) {}
gc();
