class C0 {
}
const v1 = new C0();
const o2 = {
};
const v4 = new Proxy(v1, o2);
const v5 = [4294967296,-1507112381];
const v6 = [0,8,-1073741824,-13];
v6.set = v4;
function f7() {
    return v6;
}
const o8 = {
    "getOwnPropertyDescriptor": f7,
};
const v9 = new Proxy(v5, o8);
try { v9.fill(); } catch (e) {}
gc();
