function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    a4.toUTCString = a4;
}
new F2(14n);
new F2(9223372036854775807n);
gc();
