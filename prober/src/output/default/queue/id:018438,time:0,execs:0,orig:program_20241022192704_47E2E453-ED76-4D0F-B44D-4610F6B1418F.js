const v1 = /(?:a{5,1000000}){3,1000000}g+/dyi;
Object.defineProperty(v1, Symbol.toPrimitive, { value: Date });
v1.test(v1);
gc();
