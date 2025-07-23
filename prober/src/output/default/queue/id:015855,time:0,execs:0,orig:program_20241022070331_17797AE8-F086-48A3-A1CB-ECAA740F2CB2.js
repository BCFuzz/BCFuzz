const v1 = new Uint32Array();
const o2 = {
};
const v3 = o2.constructor;
v3.freeze(v1);
v3.isFrozen(v1);
gc();
