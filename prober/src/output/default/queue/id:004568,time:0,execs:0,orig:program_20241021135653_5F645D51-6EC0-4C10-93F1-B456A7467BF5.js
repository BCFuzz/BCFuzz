const v1 = new Uint32Array();
const v4 = Array(3408);
v4[1327] = v1;
const v6 = [v1,v1,v1,v1,v1];
const v8 = Reflect.apply(v4.copyWithin, v4, v6);
v8.concat(v8);
gc();
