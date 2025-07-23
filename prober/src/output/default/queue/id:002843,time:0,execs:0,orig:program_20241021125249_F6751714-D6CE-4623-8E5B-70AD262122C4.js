function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v3 = [v2];
const v5 = new Uint32Array(v2, F0);
try { v5.set(v3); } catch (e) {}
const o7 = {
    __proto__: v5,
};
o7[1073741824] = o7;
const v8 = o7[1073741824];
try { v8.toReversed(); } catch (e) {}
const v10 = /a\sc\c!KlM\p{gc=Nd}/mdygi;
v10.toString(v10, v5, v2).link().toLowerCase();
const v15 = Set.prototype;
try { v15.add(o7, v15, v3, Set, v2); } catch (e) {}
gc();
