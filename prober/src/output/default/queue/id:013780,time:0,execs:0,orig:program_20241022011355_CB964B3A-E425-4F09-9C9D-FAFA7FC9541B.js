function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let [i5, i6] = (() => {
            let v2 = 0;
            v2--;
            return [v2, 10];
        })();
        i6--, i5 < i6;
        ) {
        const v14 = createGlobalObject();
        v14.WebAssembly = v14;
        for (let v15 = 0; v15 < 5; v15++) {
        }
    }
}
new F0();
gc();
