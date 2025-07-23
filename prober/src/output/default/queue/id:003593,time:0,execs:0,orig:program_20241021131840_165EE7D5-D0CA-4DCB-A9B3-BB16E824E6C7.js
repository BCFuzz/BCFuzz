const v0 = [-9007199254740990,-15689,-4096,11,136099362,536870912,790956000,-7,1424794663];
const v2 = new Int16Array(v0);
const v4 = new Int16Array(v2, 4096);
const v6 = [4096,v0,v2];
Reflect.apply(v4.copyWithin, v2, v6);
gc();
