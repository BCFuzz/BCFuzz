const v1 = new Int16Array();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = new Int32Array(209);
    const v9 = [F2,F2,F2,F2,F2];
    function f10() {
        const o11 = {
        };
        o11.constructor.assign(o11, a4);
        return a4;
    }
    const v15 = [f10];
    Reflect.apply(v9.toSorted, v8, v15);
}
const v18 = new F2();
const t15 = v18.constructor;
const v20 = new t15();
const t17 = v20.constructor;
new t17(v1);
gc();
