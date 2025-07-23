function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (let [i11, i12] = (() => {
            eval(a4);
            return [0, 10];
        })();
        delete arguments[0], i11 < i12;
        i12--) {
    }
}
new F1(Uint32Array);
gc();
