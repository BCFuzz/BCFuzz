const v1 = new Int16Array(Int16Array);
const v2 = new Int16Array(v1, Int16Array);
const v4 = [v1,v1,v1];
const v5 = v2.copyWithin;
const v6 = Reflect.apply(v5, v1, v4);
v6.fill();
v6.lastIndexOf(v2, v5);
gc();
