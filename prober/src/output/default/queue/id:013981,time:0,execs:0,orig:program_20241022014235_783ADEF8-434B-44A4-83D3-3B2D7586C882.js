const v0 = [];
const v2 = Date();
const v3 = v2 ** v0;
const v4 = `
    try { Map.groupBy(v3); } catch (e) {}
    function f7() {
        return v3;
    }
`;
v4.replace(v2);
gc();
