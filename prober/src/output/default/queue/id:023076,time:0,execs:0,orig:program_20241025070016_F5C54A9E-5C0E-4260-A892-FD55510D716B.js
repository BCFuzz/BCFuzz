const v0 = [-123.80496254269178,-785339.5726668389,-6.057466631254147,NaN];
const o1 = {
};
const v3 = new Proxy(v0, o1);
const v6 = createGlobalObject().Float16Array;
const v8 = new Float32Array();
const v9 = v6.from(v8);
try { v9.toSorted(v3); } catch (e) {}
gc();
