const v2 = Symbol.toPrimitive;
const o3 = {
    [v2]: -536870912,
};
try { Object.hasOwn(o3, o3); } catch (e) {}
gc();
