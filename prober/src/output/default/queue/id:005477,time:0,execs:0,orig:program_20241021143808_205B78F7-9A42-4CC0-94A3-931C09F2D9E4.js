const v2 = new Int8Array(6);
let v3 = v2[1];
v3--;
v2["copyWithin"](6, v3);
gc();
