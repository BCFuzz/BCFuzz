for (let v0 = 0; v0 < 100; v0++) {
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        this.hasOwnProperty(a4);
    }
    new F2("");
}
gc();
