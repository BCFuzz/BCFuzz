function F0() {
    if (!new.target) { throw 'must be called with new'; }
    let v2;
    try { v2 = this.__defineSetter__(); } catch (e) {}
    for (let i5 = 0, i6 = 10;
        i6--, i5 < i6;
        (() => {
            const o11 = {
            };
            const v12 = o11.constructor;
            try { v12.create(v2); } catch (e) {}
            for (let v14 = 0; v14 < 5; v14++) {
            }
        })()) {
    }
}
new F0();
gc();
