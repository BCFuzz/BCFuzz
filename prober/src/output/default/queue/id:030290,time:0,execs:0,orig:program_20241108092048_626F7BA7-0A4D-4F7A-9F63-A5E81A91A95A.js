const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = v0.toLocaleString();
    for (let i6 = 16, i7 = 1851;
        (() => {
            const v8 = i7--;
            this.b = this;
            delete this.b;
            const v13 = ("1").constructor.fromCharCode(v8);
            const v14 = i6 < i7;
            this[v3 + v13] = v8;
            return v14;
        })();
        ) {
    }
}
const v21 = new F1();
const o22 = {
    __proto__: v21,
};
for (const v23 in o22) {
}
for (let i26 = 0, i27 = 10; i26 < i27; i27--) {
}
gc();
