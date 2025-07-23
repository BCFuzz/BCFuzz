function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F1(undefined, undefined, undefined);
const v8 = ("-13")[undefined];
const v9 = v6.constructor;
v9.prototype = v8;
new v9();
gc();
