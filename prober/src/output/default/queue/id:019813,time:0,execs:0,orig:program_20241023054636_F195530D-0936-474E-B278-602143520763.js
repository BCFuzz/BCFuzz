const v1 = ([]).__proto__;
function F2() {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = new Int16Array(this, v1, v1);
    v5["set"](v1);
}
new F2();
gc();
