const v1 = (-9223372036854775807).__proto__;
const v2 = v1.toFixed();
const o3 = {
};
const v5 = new Proxy(v1, o3);
try { v5.toLocaleString(-9223372036854775807, v5, -9223372036854775807, -9223372036854775807, v2); } catch (e) {}
gc();
