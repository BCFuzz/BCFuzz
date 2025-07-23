const o1 = {
};
const v3 = new Proxy(ReferenceError, o1);
v3.captureStackTrace(o1, v3);
gc();
