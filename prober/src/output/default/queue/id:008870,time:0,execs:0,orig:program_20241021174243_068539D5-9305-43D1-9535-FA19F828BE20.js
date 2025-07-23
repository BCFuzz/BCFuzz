const v1 = Array();
const o2 = {
    __proto__: v1,
};
new Uint8Array(o2);
gc();
