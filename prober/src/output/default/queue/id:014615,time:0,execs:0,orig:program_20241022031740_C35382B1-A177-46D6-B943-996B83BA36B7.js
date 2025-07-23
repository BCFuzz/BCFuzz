let v1;
try { v1 = new createGlobalObject(); } catch (e) {}
const v4 = createGlobalObject().WebAssembly.Exception;
try { new v4(v1); } catch (e) {}
gc();
