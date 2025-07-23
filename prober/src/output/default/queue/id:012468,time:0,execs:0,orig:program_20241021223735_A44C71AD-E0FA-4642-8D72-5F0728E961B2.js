const v1 = new WeakMap();
const v2 = [v1];
const v3 = [v2,v2,v2];
const v4 = [v3,v3];
[v1,WeakMap];
let v7 = undefined;
const o11 = {
    set f(a9) {
        const v10 = v4 % v2;
        v10[7] = v10;
    },
};
v7 = o11;
const v16 = [];
new Map();
for (let v20 = 0; v20 < 5; v20++) {
    const o22 = {
    };
    new ArrayBuffer(5);
    v16["p" + v20] = v20;
}
for (let v29 = 0; v29 < 32; v29++) {
    function F30() {
        if (!new.target) { throw 'must be called with new'; }
        function f33(a34, a35) {
            class C36 {
            }
            return f33;
        }
        f33();
        this.h = F30;
        for (const v39 in v4) {
            Math.abs(v39 | v39);
        }
    }
    const v42 = new F30();
    const t36 = v42.h;
    new t36();
    new F30();
    new F30();
}
gc();
