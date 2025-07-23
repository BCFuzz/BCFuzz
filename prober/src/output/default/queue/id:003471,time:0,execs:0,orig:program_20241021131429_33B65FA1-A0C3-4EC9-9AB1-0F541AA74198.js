let v1;
try { v1 = Float64Array.__defineGetter__(); } catch (e) {}
const v2 = new Float64Array(v1, v1, v1);
try { v2.toSorted(v2); } catch (e) {}
gc();
