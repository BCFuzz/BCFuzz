function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const t4 = [-1.5569597252174576e+308,-2.0,3.0,-33688.71285769285,-1.2705771815929086e+308,1.7976931348623157e+308,1000000000.0];
t4[gc()] ^= v2;
gc();
