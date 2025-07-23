function f0() {
    return f0;
}
const o1 = {
};
const v3 = new Proxy(f0, o1);
const v4 = [4294967296,-1507112381];
const v5 = [0,8,-1073741824,-13];
v5.set = v3;
function f6() {
    return v5;
}
const o7 = {
    "getOwnPropertyDescriptor": f6,
};
const v8 = new Proxy(v4, o7);
try { v8.fill(); } catch (e) {}
gc();
