for (let i = 0; i < 5; i++) {
    function F0(a2) {
        if (!new.target) { throw 'must be called with new'; }
        this instanceof F0;
    }
    new F0(F0);
}
gc();
