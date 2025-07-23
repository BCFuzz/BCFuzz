const v4 = new Proxy(Int8Array, Symbol);
try { v4.apply("YdS"); } catch (e) {}
gc();
