const v3 = new BigUint64Array(1000);
const v4 = [4294967296,-1507112381];
function f5() {
    Object.defineProperty(v3, 0, { configurable: true, set: f5 });
    return v3;
}
const o6 = {
    "getOwnPropertyDescriptor": f5,
};
const v8 = new Proxy(v4, o6);
try { v8.reverse(); } catch (e) {}
gc();
