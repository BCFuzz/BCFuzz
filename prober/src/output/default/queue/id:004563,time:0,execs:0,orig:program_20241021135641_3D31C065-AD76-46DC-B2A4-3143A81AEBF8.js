const v1 = new Uint32Array();
const v4 = Array(3408);
v4[1327] = v1;
const v8 = [7 << 7,7,3408];
Reflect.apply(v4.copyWithin, v4, v8);
gc();
