function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F0(F0, F0, F0);
const v6 = [-1.5616023576270028e+308,-Infinity,1.2825924240608303e+308,1000.0];
v6[6] = v5;
AggregateError(v6);
gc();
