const v1 = [255,255];
const v3 = 255 < v1 ? 255 : v1;
const o4 = {
};
const v6 = new Proxy(v3, o4);
const o7 = {
    __proto__: v6,
};
o7.fill();
gc();
