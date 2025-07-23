const v1 = [54901,1000,255,-65536];
const v3 = [Reflect,Reflect,Reflect,Reflect];
Reflect.apply(v1.join, "NA", v3);
gc();
