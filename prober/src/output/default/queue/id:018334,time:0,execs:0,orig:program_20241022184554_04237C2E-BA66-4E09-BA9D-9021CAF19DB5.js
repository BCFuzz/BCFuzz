const v1 = Date();
const v5 = [1739142838];
const v7 = [v5,2147483648,[v5,Date],2147483648,v1];
const v9 = SharedArrayBuffer.constructor;
try { v9(v7); } catch (e) {}
gc();
