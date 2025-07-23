const v1 = [54222,54222];
const v6 = createGlobalObject().WebAssembly;
v6.CompileError.apply(undefined, v1);
const v9 = v6.Table;
try { new v9(false); } catch (e) {}
gc();
