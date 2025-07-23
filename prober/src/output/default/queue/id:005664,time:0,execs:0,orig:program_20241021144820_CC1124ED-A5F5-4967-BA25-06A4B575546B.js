function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new Date(-1000000.0, F0);
v4.getSeconds();
gc();
