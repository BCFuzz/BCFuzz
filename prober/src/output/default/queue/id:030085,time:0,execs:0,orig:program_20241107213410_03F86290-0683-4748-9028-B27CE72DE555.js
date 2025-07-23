const v2 = new Uint16Array(2);
const v3 = [];
function F4() {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = v3.toLocaleString(this, this);
    for (let i9 = 16, i10 = 1851;
        (() => {
            const v11 = i10--;
            const v14 = ("-789426228").constructor.fromCharCode(v11);
            const v15 = i9 < i10;
            this[v6 + v14] = v11;
            return v15;
        })();
        ) {
    }
}
const v22 = new F4();
const o23 = {
    __proto__: v2,
    ...v22,
};
for (const v24 in o23) {
}
for (let i27 = 0, i28 = 10; i27 < i28; i28--) {
}
gc();
