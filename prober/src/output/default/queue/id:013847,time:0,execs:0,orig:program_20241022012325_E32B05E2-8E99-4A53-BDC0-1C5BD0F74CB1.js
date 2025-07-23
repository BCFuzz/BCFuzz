function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F1();
v3.toString = Date;
undefined % [1.6108883737384262e+308,v3];
gc();
