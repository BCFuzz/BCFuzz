function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = createGlobalObject().Float16Array;
    const v10 = new t2();
    v10["fill"](([-134215.260558886,-933.3259109430887,2.220446049250313e-16]).concat(), 47293);
}
new F0();
gc();
