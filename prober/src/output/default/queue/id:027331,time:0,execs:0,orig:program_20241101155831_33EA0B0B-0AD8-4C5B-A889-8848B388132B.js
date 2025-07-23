function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    a2.caller;
}
const o5 = {
};
const v7 = new Proxy(F0, o5);
new v7(F0);
gc();
