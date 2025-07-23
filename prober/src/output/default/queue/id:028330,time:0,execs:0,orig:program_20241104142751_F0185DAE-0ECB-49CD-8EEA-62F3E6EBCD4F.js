const v2 = new Int8Array();
const v3 = v2.with;
const v5 = Date(v3);
const v10 = [[16],2147483648,[v3],2147483648,v5];
const v12 = SharedArrayBuffer.constructor;
try { v12(v10); } catch (e) {}
gc();
