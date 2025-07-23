const v2 = [127,[127]];
const v3 = v2[1];
const v4 = [v2,v2,v2,v2,v2];
const v6 = [127];
Reflect.apply(v4.lastIndexOf, v3, v6);
gc();
