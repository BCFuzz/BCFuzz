const v3 = /Qj(?:a?)?/vis;
const v4 = /b[\c~](?=a){1,10}aa\w/dgi;
const v5 = /\P{sc=Greek}/gi;
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    const v12 = this.constructor;
    try { new v12(a11, this, a9, a8); } catch (e) {}
    a8.dotAll = a8;
}
new F6("268435439", "NEGATIVE_INFINITY", "398434036", "NEGATIVE_INFINITY");
new F6(v3, "398434036", v3, v4);
new F6(v5, "268435439", v5, v5);
new F6(v4, "398434036", v4, v3);
for (let i20 = 0, i21 = 10; i20 < i21; i21--) {
}
gc();
