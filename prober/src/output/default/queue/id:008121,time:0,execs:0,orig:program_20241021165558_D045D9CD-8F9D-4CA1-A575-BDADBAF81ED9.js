function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0();
const o5 = {
};
const v7 = new Proxy(v4, o5);
v4 in v7;
gc();
