const o1 = {
    ...Array,
    __proto__: Array,
};
const v3 = new Uint8Array();
Array.d = v3;
gc();
