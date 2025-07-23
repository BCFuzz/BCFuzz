const v2 = createGlobalObject().Float16Array;
const v3 = new v2(createGlobalObject, v2, v2, v2);
const v5 = new Uint8Array();
v5.__proto__ = v3;
v5.slice();
gc();
