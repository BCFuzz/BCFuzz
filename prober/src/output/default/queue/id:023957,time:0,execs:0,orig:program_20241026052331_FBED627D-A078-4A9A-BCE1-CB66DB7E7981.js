const v2 = createGlobalObject().Float16Array;
const v4 = new Int16Array(Int16Array);
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    a7.constructor = v2;
    a7.slice(a9, a9, Int16Array);
}
new F5(v4);
gc();
