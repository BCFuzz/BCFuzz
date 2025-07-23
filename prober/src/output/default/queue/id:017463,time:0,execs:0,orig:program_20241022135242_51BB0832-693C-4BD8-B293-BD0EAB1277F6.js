const v1 = [-764.078363447991,-462622.5711852063,NaN];
function F2() {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F2();
const v6 = v4 === v1 ? v4 : v1;
function f7() {
    const t7 = 536870889;
    t7[1073741825] = v6;
    return arguments;
}
f7();
const v12 = new Uint32Array(1003);
for (const v13 in v12) {
}
gc();
