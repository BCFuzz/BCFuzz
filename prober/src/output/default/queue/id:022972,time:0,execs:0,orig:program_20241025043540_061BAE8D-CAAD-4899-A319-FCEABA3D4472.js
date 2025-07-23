function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v4 = ([-1073741824,13530,-536870912,-27022,-7698,65226,268435441,-65535,1402643406,257]).slice(F0, v2);
v4.constructor.from(v4);
gc();
