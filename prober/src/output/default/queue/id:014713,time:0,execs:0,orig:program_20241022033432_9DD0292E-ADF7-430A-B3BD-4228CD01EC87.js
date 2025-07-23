const v0 = /[]kZa(?!bbb|bb)c/mdyv;
const o1 = {
};
function f2() {
    function F3(a5, a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v8 = new F3(f2, o1, o1);
    function f9(a10) {
        const v12 = new Int16Array(o1);
        v12.__proto__ = a10;
        return v12.slice();
    }
    v8.constructor = f9;
    return v8.constructor;
}
o1.get = f2;
const v16 = new Proxy(v0, o1);
v16.constructor(v16);
gc();
