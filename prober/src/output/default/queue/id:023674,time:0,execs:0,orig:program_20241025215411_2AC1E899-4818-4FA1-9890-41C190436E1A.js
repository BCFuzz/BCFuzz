const v1 = BigUint64Array.of();
const v4 = new Proxy([1073741824,-26526], Proxy);
try { v1.toSorted(v4); } catch (e) {}
gc();
