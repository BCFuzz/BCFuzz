let v0 = [];
let v2;
try { v2 = undefined.toLocaleString(undefined, undefined); } catch (e) {}
const v3 = `
    ({"c":v0,"f":v2,} = v2);
`;
function f5(a6) {
    return v3;
}
Date.toString = f5;
new Date(Date);
gc();
