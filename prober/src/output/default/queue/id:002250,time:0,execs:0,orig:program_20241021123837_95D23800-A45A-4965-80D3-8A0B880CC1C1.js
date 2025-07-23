const v1 = gc.toString;
try { v1(gc); } catch (e) {}
gc();
const v7 = new BigInt64Array();
try { v7.with(50, "n"); } catch (e) {}
gc();
