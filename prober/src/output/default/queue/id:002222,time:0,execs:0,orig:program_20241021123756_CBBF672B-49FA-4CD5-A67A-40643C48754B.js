class C4 {
}
const v5 = new C4();
new Float32Array(4, v5, -5.440974883188636);
function f9() {
    const o11 = {
        ["536870888"]: "536870888",
    };
    return o11;
}
const v12 = f9();
function f13(a14) {
    const o15 = {
        ...v12,
    };
    return o15;
}
const v16 = f13(Float32Array);
v16[536870888];
function F18(a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    const t21 = this.constructor;
    t21(v16);
}
function F26(a28, a29, a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
    a28++;
    a30 >> a30;
    a29--;
    this.c = -1.3604407964463793e+308;
}
new F26(-1.3604407964463793e+308, 4, -5.440974883188636, -21.61360290274979);
function F36() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 10;
}
const v39 = new F36();
const v40 = new F36();
for (const v41 in v39) {
    v39[6] = v40;
}
new F26(-21.61360290274979, 4, -1.3604407964463793e+308, -21.61360290274979);
new F26(-1.3604407964463793e+308, 4, -5.440974883188636, -5.440974883188636);
const v46 = new Float64Array(1483);
for (const v47 of v46) {
}
gc();
