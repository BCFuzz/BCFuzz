const v1 = new Int8Array();
function F2() {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        v1[Symbol.toStringTag];
        return f4;
    }
    this.constructor = f4;
    const v8 = this.constructor;
    v8(v8, v8, v1, f4, F2);
}
new F2();
gc();
