const v1 = 5.0 - 5.0;
function F2() {
    if (!new.target) { throw 'must be called with new'; }
    let v3 = this;
    v3 >>>= v3;
    const v4 = -v1;
    v3.constructor.isInteger(v4);
}
new F2();
gc();
