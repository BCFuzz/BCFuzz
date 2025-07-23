const v1 = new Uint16Array();
const v2 = v1.constructor;
v2.__proto__ = [-1024,-9007199254740992,-9007199254740992,1000];
const v4 = new v2(v1, v2, Uint16Array, v1, v1);
v4.subarray(v2).slice();
gc();
