function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
([]).concat(1073741825, v2);
gc();
