const v0 = /\cAh/mvgs;
function f1() {
    v0.compile(f1);
    ("exec").replace(/(?<!a)/mdygu, "");
    return "exec";
}
const v8 = new WeakMap();
v8[Symbol.toPrimitive] = f1;
const v11 = [v8];
for (let v12 = 0; v12 < 10; v12++) {
    function F13() {
        if (!new.target) { throw 'must be called with new'; }
        function f15(a16, a17) {
            return this;
        }
        const t15 = f15.constructor;
        t15(v11);
    }
    new F13();
}
gc();
