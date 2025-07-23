const v2 = Array();
v2.writable = -334088457n;
Object.defineProperty(v2, "get", { writable: true, enumerable: true, value: Array });
const v3 = [4294967296,-1507112381];
function f4() {
    return v2;
}
const o5 = {
    "getOwnPropertyDescriptor": f4,
};
const v7 = new Proxy(v3, o5);
try { v7.reverse(v7); } catch (e) {}
gc();
