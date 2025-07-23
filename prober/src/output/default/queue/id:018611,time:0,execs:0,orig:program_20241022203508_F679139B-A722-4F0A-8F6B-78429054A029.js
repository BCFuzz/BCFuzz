const v3 = [[Date,Date()]];
const v4 = [536870888,398160010,65535,9458,65537,1073741823,1729316037,6,-11,1683154934];
v4[2] = v3;
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const o9 = {
        __proto__: v4,
    };
    o9.slice().sort();
}
new F5();
gc();
