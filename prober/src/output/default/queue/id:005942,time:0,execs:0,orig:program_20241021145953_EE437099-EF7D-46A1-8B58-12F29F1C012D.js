for (let i = 0; i < 10; i++) {
    function F0(a2, a3) {
        if (!new.target) { throw 'must be called with new'; }
        a2.bind();
    }
    new F0(F0);
}
gc();
