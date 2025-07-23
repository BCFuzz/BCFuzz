function f0() {
    const o1 = {
    };
    return o1;
}
const v3 = new BigUint64Array();
const o4 = {
    "ownKeys": f0,
};
const v6 = new Proxy(v3, o4);
o4.constructor.freeze(v6);
gc();
