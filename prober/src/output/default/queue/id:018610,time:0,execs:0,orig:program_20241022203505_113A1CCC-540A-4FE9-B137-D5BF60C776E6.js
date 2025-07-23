function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F0(F0, F0, F0, F0);
function f7() {
    for (let v8 = 0; v8 < 25; v8++) {
        v6.a = v6;
        for (let i11 = 0, i12 = 10;
            i11 < i12;
            (() => {
                let v16 = 0;
                delete v6.a;
                v16++;
                i12--;
            })()) {
        }
    }
    return f7;
}
const t19 = f7.call();
t19();
gc();
