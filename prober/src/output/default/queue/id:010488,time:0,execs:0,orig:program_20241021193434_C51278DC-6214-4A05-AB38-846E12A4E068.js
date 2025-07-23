const v4 = createGlobalObject().WebAssembly.Table;
try { new v4(4n); } catch (e) {}
gc();
