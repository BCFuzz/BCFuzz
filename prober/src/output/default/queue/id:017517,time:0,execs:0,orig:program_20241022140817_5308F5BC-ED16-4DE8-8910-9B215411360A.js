for (let v0 = 0; v0 < 25; v0++) {
    function F1(a3, a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        const v7 = ("GaMS").fontcolor(a3, this, v0, a4, "GaMS");
        const v8 = /([\xe2\x81\xa3])/vis;
        try { v8.compile(v7, v8); } catch (e) {}
        ("pOs")["replace"](v8, v7);
    }
    new F1(F1, v0, F1);
}
gc();
