const v2 = new Set();
const v5 = new Int8Array(2147483648);
const v7 = new Date();
try { v7.setUTCHours(1000, v2, v5); } catch (e) {}
gc();
