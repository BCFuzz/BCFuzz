const v1 = new Uint8Array();
const v3 = new Int8Array();
const v4 = [v1,v3];
const v6 = Array.bind(Array, v3, v4);
v6.name = v6;
v4.sort(v6);
gc();
