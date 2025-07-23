const v2 = new BigInt64Array(536870912);
try { ("MAX_VALUE").match(v2); } catch (e) {}
gc();
