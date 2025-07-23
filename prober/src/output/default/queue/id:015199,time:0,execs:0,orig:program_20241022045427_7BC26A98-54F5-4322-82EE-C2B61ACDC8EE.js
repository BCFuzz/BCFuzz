Object.defineProperty(Date, "iterator", { configurable: true, value: [0.9141793371916799,-1.1960935327754854,2.0,-1.0,1.630090921086258e+308,1.7976931348623157e+308,-51.6505985478957,-533.5319380408298,1.5756463202977758e+308,-5.0] });
const v2 = Date.iterator;
Object.defineProperty(v2, Symbol.toPrimitive, { configurable: true, value: Date });
const v5 = /(x)(x)(x)\3*foo(?!bar)bazZrC?/mv;
v5.constructor = Symbol;
const t5 = v5.constructor;
t5(v2).toString();
gc();
