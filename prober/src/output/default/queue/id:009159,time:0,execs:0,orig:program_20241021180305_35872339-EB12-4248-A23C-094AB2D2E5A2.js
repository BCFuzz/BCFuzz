const v1 = [255,255,255,255];
const v3 = 255 < v1 ? 255 : v1;
const o4 = {
};
const v6 = new Proxy(v3, o4);
const o9 = {
    "maxByteLength": 268435441,
    __proto__: v6,
};
const v11 = new ArrayBuffer(1024, o9);
v11.resize(o9);
gc();
