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
v6[1] = v6;
for (let i9 = -3, i10 = 10; i9 < i10; i10--) {
}
gc();
