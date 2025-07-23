function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const o2 = {
    };
    const v4 = new Proxy(this, o2);
    const o5 = {
    };
    new Proxy(v4, o5);
}
new F0();
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    switch (a13) {
        case 127:
    }
    const v15 = this.constructor;
    try { new v15(-1.0); } catch (e) {}
}
new F11(4.0);
const o19 = {
    ...Reflect,
};
gc();
