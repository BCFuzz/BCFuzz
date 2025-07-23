const v1 = new Uint8ClampedArray(Uint8ClampedArray);
const o2 = {
    __proto__: v1,
};
const v4 = new Uint8Array();
try { v4.join(o2); } catch (e) {}
gc();
