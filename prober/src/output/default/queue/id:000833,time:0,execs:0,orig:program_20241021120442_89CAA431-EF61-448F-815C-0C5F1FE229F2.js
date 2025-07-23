const v1 = new Int8Array();
const v2 = [0.0,1000000000000.0,-1.7947497258565735e+308];
try { v2.flatMap(); } catch (e) {}
const v5 = v1.slice();
try { v5.sort("m"); } catch (e) {}
gc();
