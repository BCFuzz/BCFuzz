class C0 {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    ([]).flatMap(runString);
}
gc();
