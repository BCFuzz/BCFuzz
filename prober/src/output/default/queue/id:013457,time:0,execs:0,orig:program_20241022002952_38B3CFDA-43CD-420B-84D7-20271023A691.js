const v2 = Array(Array);
v2.writable = -334088457n;
for (let i5 = 0, i6 = 10; i5 !== i6; i6--) {
}
const v13 = [4294967296,-1507112381];
function f14() {
    return v2;
}
const o15 = {
    "getOwnPropertyDescriptor": f14,
};
const v17 = new Proxy(v13, o15);
try { v17.reverse(); } catch (e) {}
gc();
