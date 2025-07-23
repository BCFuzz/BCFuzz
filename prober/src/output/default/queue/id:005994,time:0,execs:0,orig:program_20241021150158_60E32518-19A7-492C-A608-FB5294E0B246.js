const v2 = new Int16Array(512, 512, 512);
const v3 = new Int16Array(512, 512, 512);
const v5 = [v3,v2,512];
Reflect.apply(v3.copyWithin, v2, v5);
gc();
