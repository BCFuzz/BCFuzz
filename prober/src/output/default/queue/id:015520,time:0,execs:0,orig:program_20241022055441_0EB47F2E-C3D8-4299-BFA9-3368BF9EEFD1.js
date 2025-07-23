const v1 = new Date();
const o2 = {
    [Date]: v1,
};
JSON.stringify(o2);
gc();
