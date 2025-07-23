function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v4 = 0; v4 < 10; v4++) {
        try { a3.find(); } catch (e) {}
        for (let v6 = 0; v6 < 250; v6++) {
        }
        function* f7(a8, a9, a10) {
            return F0;
        }
        f7().return(a2);
    }
}
new F0();
gc();
