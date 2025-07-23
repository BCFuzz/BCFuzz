const v2 = new BigUint64Array(3938);
try { v2.sort(BigUint64Array); } catch (e) {}
const v6 = new Float64Array(10);
try { v6.sort(BigUint64Array); } catch (e) {}
gc();
