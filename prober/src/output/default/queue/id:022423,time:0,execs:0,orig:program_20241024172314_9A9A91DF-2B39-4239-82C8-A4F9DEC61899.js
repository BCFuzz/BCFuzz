function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function f3(a4, a5) {
    const v6 = [-1.7976931348623157e+308,4.723783725989775e+307,1.6362776932350362e+307,-1.6916279446499761e+308,-1.0,1.4711245705744993,-33448.77925099211];
    const v8 = new Uint16Array();
    v8.toJSON = v6;
    JSON.parse(JSON.stringify([v8]));
}
v2[Symbol.toPrimitive] = f3;
function f15(a16, a17) {
    const o21 = {
        [v2](a19, a20) {
        },
    };
    return a16;
}
f15();
f15();
gc();
