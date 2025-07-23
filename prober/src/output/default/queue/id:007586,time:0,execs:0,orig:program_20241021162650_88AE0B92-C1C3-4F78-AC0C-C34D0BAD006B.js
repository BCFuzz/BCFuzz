const v2 = new Uint8ClampedArray(268435440);
try { EvalError(v2); } catch (e) {}
gc();
