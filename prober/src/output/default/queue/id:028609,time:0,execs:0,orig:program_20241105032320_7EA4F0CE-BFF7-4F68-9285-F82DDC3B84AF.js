const v2 = new Int8Array();
const v3 = v2.with;
const v5 = [16];
const v7 = [v5,2147483648,[v3]];
const v9 = SharedArrayBuffer.constructor;
try { v9(v7); } catch (e) {}
gc();
