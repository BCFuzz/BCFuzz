function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
F2.constructor = Date;
const t4 = F2.constructor;
new t4(-6.567001091348296e+307);
gc();
