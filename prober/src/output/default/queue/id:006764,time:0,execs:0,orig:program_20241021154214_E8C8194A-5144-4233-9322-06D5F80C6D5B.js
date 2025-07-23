function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = new Int16Array(10);
    function f7() {
        return v6;
    }
    v6.sort(f7);
}
new F1(10, F1);
gc();
