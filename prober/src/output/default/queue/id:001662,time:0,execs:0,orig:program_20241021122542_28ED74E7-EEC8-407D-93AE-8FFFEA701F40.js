const v1 = new Int16Array();
const v3 = new Uint8Array();
const v5 = [v1];
Reflect.apply(v1.join, v3, v5);
gc();
