const v1 = new Uint16Array();
const v2 = v1.reverse;
const v4 = new Float32Array(Float32Array);
const v6 = v4["fill"]();
try { v6.reduceRight(v2); } catch (e) {}
gc();
