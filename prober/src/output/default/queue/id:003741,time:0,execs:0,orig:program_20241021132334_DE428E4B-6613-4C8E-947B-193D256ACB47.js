function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
new Date(10600, 10600, 10600, v2);
gc();
