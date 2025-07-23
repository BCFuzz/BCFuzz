const v2 = new Float64Array(268435456);
try { ("2").link(v2); } catch (e) {}
gc();
