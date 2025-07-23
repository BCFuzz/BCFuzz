for (let i = 0; i < 5; i++) {
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
        a3.bind();
    }
    new F1(Float32Array);
    F1.length = F1;
    new F1(F1);
}
gc();
