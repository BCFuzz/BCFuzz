const v1 = new Float64Array(Float64Array);
const v3 = [1478532159,255,65537,816532861,1073741825,9223372036854775807,-1328327405,512,-9007199254740992,30353];
v3.fill(v1);
const o5 = {
};
const v7 = new Proxy(v3, o5);
const v8 = new Uint16Array(v7, o5, o5);
const v10 = this.constructor;
try { v10.defineProperties(v8, v7); } catch (e) {}
gc();
