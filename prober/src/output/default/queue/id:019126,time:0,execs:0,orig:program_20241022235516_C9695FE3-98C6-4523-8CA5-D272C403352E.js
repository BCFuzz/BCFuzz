const v0 = [-1.7976931348623157e+308,1.6763806521841644];
const v3 = Proxy.revocable(Int8Array, Int8Array);
v3.revoke();
const v5 = v3.proxy;
const o6 = {
    __proto__: v0,
};
try { o6.slice(v5); } catch (e) {}
gc();
