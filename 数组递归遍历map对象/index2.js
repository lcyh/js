const treeData = [
  { key: "0-0", title: "0-0" },
  {
    key: "0-1",
    title: "0-1",
    children: [
      { key: "0-1-0", title: "0-1-0" },
      { key: "0-1-1", title: "0-1-1" },
    ],
  },
  { key: "0-2", title: "0-3" },
];

// const transferDataSource = [];
function flatten(list = [], transferDataSource = []) {
  list.forEach((item) => {
    transferDataSource.push(item);
    flatten(item.children, transferDataSource);
  });
  return transferDataSource;
}
let flattenData = flatten(JSON.parse(JSON.stringify(treeData)));
console.log("flattenData", JSON.stringify(flattenData, null, 2));
