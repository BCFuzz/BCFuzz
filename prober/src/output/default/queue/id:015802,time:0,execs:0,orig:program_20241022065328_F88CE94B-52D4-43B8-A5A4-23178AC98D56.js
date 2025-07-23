const v1 = Array();
const v2 = [4294967296,-1507112381];
function f3() {
    return v1;
}
const o4 = {
    "getOwnPropertyDescriptor": f3,
};
const v6 = new Proxy(v2, o4);
try { v6.sort(); } catch (e) {}
gc();
