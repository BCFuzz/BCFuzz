let v1 = -4294967297;
const v3 = `
    -(++v1) >> "5";
`;
const v7 = v3.split("5");
v7.reverse(runString, runString);
try { v7.flatMap(runString); } catch (e) {}
gc();
