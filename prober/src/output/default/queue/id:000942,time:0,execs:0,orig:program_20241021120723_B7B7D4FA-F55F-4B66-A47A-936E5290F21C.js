const v3 = Array();
const v6 = [65535,456,[456,456,456,456]];
Reflect.apply(v3.splice, v3, v6);
gc();
