function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F0(F0, F0);
const o5 = {
};
const v7 = new Proxy(v4, o5);
const o8 = {
};
const v9 = o8.__proto__;
try { v9.__defineGetter__(v9, v7); } catch (e) {}
gc();
