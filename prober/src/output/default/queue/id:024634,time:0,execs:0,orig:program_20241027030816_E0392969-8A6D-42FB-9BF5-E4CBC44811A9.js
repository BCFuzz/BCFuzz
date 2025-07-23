const v1 = Int8Array.of();
const v2 = v1.constructor;
v2.__proto__ = [-1024,-9007199254740992,-9007199254740992,1000];
const v4 = new v2();
v4.subarray().slice(Int8Array, v1, Int8Array, Int8Array, Int8Array);
gc();
