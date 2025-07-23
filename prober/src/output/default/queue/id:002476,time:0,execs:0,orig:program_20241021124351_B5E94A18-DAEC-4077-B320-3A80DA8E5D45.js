const v1 = new BigInt64Array();
const o2 = {
    __proto__: v1,
};
let v3;
try { v3 = o2.with(BigInt64Array, BigInt64Array, v1); } catch (e) {}
const v5 = new Set();
const v6 = v5.__proto__;
try { v6.has(v5, v1, v3, v6, v6); } catch (e) {}
gc();
