gc();
RangeError();
function F4() {
    if (!new.target) { throw 'must be called with new'; }
    EvalError();
}
new F4();
gc();
