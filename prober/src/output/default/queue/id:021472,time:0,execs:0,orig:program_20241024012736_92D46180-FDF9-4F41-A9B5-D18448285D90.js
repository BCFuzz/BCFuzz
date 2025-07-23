const v2 = [[]];
v2[1] = v2;
const v4 = [[],"g",v2];
function f5() {
    const o6 = {
    };
    o6.toJSON = v4;
    JSON.stringify(o6);
    return JSON;
}
try { f5(); } catch (e) {}
gc();
