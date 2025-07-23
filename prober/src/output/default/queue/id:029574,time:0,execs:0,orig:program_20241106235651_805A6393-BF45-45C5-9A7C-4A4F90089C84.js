const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = v0.toLocaleString(this, this);
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
const v19 = new F1();
const o20 = {
    __proto__: v19,
};
for (const v21 in o20) {
}
for (let i24 = 0, i25 = 10; i24 < i25; i25--) {
}
gc();
