const v2 = new Float32Array("number", Float32Array, "number");
v2.constructor = "number";
try { v2.slice(v2); } catch (e) {}
gc();
