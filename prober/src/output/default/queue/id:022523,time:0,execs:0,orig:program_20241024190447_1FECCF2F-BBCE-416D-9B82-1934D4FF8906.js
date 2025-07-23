const v1 = new Uint16Array(Uint16Array);
const v2 = v1.constructor;
v2.__proto__ = [-1024,-9007199254740992,-9007199254740992,1000];
const v4 = new v2();
v4.subarray(v4, v4);
gc();
