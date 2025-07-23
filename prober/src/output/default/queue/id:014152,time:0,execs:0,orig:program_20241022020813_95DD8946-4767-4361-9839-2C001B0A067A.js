const v1 = Array(Array);
v1.configurable = Array;
const v2 = [4294967296,-1507112381];
function f3() {
    return v1;
}
const o4 = {
    "getOwnPropertyDescriptor": f3,
};
const v6 = new Proxy(v2, o4);
try { v6.reverse(); } catch (e) {}
for (let i10 = -3, i11 = 10; i10 < i11; i11--) {
}
gc();
