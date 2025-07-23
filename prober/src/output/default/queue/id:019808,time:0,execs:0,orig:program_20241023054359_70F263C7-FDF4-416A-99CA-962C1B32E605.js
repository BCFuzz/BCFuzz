function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let i4 = 0, i5 = 10;
        (() => {
            const v6 = /i(?<a>.)\k<a>[\c~]?/mygi;
            function f7() {
            }
            function f8(a9) {
            }
            Object.defineProperty(v6, "toString", { enumerable: true, get: f7, set: f8 });
            return i4 < i5;
        })();
        ) {
    }
}
const o15 = {
};
o15.toString().search(F0);
gc();
