const v0 = [4,25715,18083,-1,0,-1,1073741823,-967871544,0];
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v5 = 0; v5 < 10; v5++) {
        for (let v6 = 0; v6 < 250; v6++) {
        }
        function f7() {
            return this;
        }
        f7.apply(a3, a4);
    }
}
new F1(F1, v0);
for (let i12 = 0, i13 = 10; i12 !== i13; i13--) {
}
gc();
