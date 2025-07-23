const v4 = createGlobalObject().WebAssembly.Exception.prototype;
try { v4.getArg(); } catch (e) {}
gc();
