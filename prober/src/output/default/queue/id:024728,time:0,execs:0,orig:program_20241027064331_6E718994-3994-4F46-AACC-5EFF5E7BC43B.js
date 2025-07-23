const v2 = new Int32Array(64);
const v4 = [6,6,6];
for (let v5 = 0; v5 < 5; v5++) {
    function F6() {
        if (!new.target) { throw 'must be called with new'; }
        for (let i9 = 10, i10 = 10;
            (() => {
                const v12 = [6];
                Reflect.apply(v4.includes, v2, v12);
                return v5 < i10;
            })();
            i10--) {
        }
    }
    new F6();
}
gc();
