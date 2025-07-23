function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F1(Date, Date, Date, F1);
const v8 = v7.constructor;
v8[Symbol.toPrimitive] = Date;
const v11 = new F1(v7, Date, v8, v8);
const o12 = {
};
o12.constructor.defineProperties(v11, F1);
gc();
