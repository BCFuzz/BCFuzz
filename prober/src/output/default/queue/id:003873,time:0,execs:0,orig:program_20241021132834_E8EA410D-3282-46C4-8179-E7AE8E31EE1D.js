const v1 = new Int16Array();
const v2 = new Int16Array();
const v4 = [v2,v2,v2,v2];
Reflect.apply(v2.copyWithin, v1, v4).fill();
gc();
