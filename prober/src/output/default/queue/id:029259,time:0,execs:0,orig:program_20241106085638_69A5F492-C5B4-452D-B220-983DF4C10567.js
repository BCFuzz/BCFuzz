const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = v0.toLocaleString();
    for (let i6 = 16, i7 = 1851;
        (() => {
            const v8 = i7--;
            const v11 = ("-789426228").constructor.fromCharCode(v8);
            const v12 = i6 < i7;
            this[v3 + v11] = v8;
            return v12;
        })();
        ) {
    }
}
new F1();
new F1();
gc();
