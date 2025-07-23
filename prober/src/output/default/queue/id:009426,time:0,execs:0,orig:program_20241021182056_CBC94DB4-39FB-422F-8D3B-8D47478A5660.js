const v1 = [-63576,-256,-9223372036854775807,-2147483649];
const v3 = [v1,v1,v1];
Reflect.apply(v1.lastIndexOf, "maxByteLength", v3);
gc();
