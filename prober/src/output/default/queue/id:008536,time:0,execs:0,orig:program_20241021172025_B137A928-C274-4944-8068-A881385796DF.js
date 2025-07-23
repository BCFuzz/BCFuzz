makeMasquerader();
for (let v2 = 0; v2 < 100; v2++) {
    function F3(a5, a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F3(F3, makeMasquerader, v2);
}
gc();
