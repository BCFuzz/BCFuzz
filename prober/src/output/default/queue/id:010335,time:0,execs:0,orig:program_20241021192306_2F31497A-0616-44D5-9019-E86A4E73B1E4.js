class C0 {
}
const v1 = [4294967296,-1507112381];
const o2 = {
    "getOwnPropertyDescriptor": C0,
};
const v4 = new Proxy(v1, o2);
try { v4.reverse(); } catch (e) {}
gc();
