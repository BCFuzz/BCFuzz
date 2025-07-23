for (let v0 = 0; v0 < 5; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        for (let v3 = 0; v3 < 25; v3++) {
            const v4 = /F(?<a>(?<b>(?<c>(?<d>.).).).)/mis;
            v4.test(v4);
        }
    }
    new F1();
}
gc();
