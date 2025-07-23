const v1 = new Set();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = Set;
}
const v6 = new F2(v1, F2, Set, v1, F2);
const v7 = new F2(Set, v6);
const v8 = new F2(v7, v6);
const v9 = [v8,v1,Set];
const v10 = [v1,v7];
[Set,Set,v8,v9,v6,v10,v8];
[v9];
[v10,Set];
[v6];
for (let v15 = 0; v15 < 50; v15++) {
    const v18 = new TypeError();
    function f19(a20, a21) {
        const o26 = {
            o(a23, a24, a25) {
                a24[2124] = a25;
                v18.__proto__ = this;
            },
        };
        o26.o(a20, a20);
        return o26;
    }
    f19(f19(Float32Array, v18, Set));
    f19(f19, v10);
}
gc();
