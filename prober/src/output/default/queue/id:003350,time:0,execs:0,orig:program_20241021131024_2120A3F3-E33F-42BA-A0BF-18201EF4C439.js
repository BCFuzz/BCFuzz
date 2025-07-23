function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = [-1.6997984398129786e+307];
([-1e-15,-1e-15,-1e-15,-1e-15,v2]).concat(v3);
gc();
