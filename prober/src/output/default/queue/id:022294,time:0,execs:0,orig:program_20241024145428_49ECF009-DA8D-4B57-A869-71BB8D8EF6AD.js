const v1 = ("-789426228").constructor;
const o2 = {
    "get": v1,
};
const v4 = new Proxy(v1, o2);
try { new v4("-789426228", v1, Proxy, v4); } catch (e) {}
gc();
