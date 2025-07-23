const v2 = new Int32Array(14);
const v4 = v2.fill(v2.subarray(), 14, 14);
const v6 = this.constructor;
try { v6.freeze(v4); } catch (e) {}
gc();
