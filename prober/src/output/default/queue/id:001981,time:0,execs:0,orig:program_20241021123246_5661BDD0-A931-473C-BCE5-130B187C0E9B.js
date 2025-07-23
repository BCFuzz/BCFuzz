function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    a3.propertyIsEnumerable();
}
new F1(-50058n);
gc();
