const o1 = {
};
Object.defineProperty(o1, "toJSON", { enumerable: true, value: Uint16Array });
try { JSON.stringify(o1); } catch (e) {}
gc();
