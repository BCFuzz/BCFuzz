function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = createGlobalObject().Float16Array;
    const v11 = new t2();
    const v12 = [-134215.260558886,-933.3259109430887,2.220446049250313e-16];
    v11["fill"](v12.concat(createGlobalObject, v12), -52260, a3);
}
const v16 = new F1();
const v17 = v16.constructor;
try { new v17(1n); } catch (e) {}
gc();
