const v1 = new BigUint64Array();
try { new Float32Array(v1); } catch (e) {}
const t2 = "join";
const v7 = (delete t2.length).__proto__.toString;
try { v7(BigUint64Array, v7, BigUint64Array); } catch (e) {}
gc();
