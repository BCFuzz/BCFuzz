const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = v0.toLocaleString(this, this);
    for (let i6 = 16, i7 = 1851;
        (() => {
            const v8 = i7--;
            this.b = this;
            delete this.b;
            const v11 = i6 < i7;
            this[v3 + v3] = v8;
            return v11;
        })();
        ) {
    }
}
new F1();
for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
}
gc();
