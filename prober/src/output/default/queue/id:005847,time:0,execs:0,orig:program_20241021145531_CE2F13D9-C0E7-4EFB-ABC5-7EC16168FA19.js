const v0 = [4294967296,-1507112381];
const v1 = [0,8,-1073741824,-13];
function f2() {
    return v1;
}
const o3 = {
};
const o4 = {
    "getOwnPropertyDescriptor": f2,
};
const v6 = new Proxy(v0, o4);
try { v6.reverse(); } catch (e) {}
const t12 = o3.__proto__;
t12[2147483648] = o3;
const v9 = [1754061190,16,11,256,-62769,-256,8];
function f10() {
    return v0;
}
Object.defineProperty(v9, 10, { configurable: true, set: f10 });
gc();
