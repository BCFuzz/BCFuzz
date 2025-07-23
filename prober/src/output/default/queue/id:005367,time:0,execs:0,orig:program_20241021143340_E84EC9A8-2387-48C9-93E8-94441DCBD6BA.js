const v3 = new Proxy(/i/mis, Array);
try { v3.toString(); } catch (e) {}
gc();
