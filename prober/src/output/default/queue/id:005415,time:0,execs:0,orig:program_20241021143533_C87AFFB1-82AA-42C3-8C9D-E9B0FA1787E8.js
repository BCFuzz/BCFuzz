const v1 = new Float64Array();
function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i10 = 0, i11 = 10;
        i11++, i10 < i11;
        (() => {
            const v16 = i11--;
            const t1 = ("isSealed").constructor;
            const v20 = new t1(v16, a7, i10, a4);
            v20.replace(v1, v1);
            const v23 = new Set(v20);
            for (let v24 = 0; v24 < 5; v24++) {
            }
            v23.add().add(255);
        })()) {
        i11--;
    }
}
new F2();
gc();
