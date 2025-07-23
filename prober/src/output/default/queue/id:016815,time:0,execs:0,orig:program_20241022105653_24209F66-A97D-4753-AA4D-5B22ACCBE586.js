for (let i3 = 0, i4 = 10; i4--, i3 < i4;) {
}
function F11(a13) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v14 = 0; v14 < 50; v14++) {
        function F15(a17, a18, a19) {
            if (!new.target) { throw 'must be called with new'; }
            for (let [i23, i24] = (() => {
                    let v21 = 10;
                    return [0, v21++];
                })();
                5 !== i24, i24;
                i24--) {
            }
        }
        new F15(F11, F15, 5);
    }
}
new F11();
gc();
