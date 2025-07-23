const o1 = {
    "construct": Date,
};
const v3 = new Proxy(Date, o1);
try { new v3(Date); } catch (e) {}
gc();
