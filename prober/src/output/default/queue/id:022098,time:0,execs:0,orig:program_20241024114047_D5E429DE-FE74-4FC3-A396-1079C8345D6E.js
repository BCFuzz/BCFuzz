const o11 = {
    toString(a1, a2) {
        function F3(a5, a6, a7) {
            if (!new.target) { throw 'must be called with new'; }
            /[\c_]?/gs.compile(F3);
        }
        new F3(this, this, a1);
        return F3;
    },
};
o11.toString();
gc();
