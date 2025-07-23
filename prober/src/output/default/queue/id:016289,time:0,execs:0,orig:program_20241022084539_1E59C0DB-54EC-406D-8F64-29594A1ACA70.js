const v2 = ReferenceError(Uint8ClampedArray);
const v3 = new Uint8ClampedArray();
v3.name = v3;
const v5 = [v2];
Reflect.apply(v2.toString, v3, v5);
gc();
