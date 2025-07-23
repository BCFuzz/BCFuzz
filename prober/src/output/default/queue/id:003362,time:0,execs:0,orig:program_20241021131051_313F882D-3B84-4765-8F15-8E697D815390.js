ReferenceError.stackTraceLimit = ReferenceError;
const v2 = EvalError();
v2.stack = v2;
gc();
