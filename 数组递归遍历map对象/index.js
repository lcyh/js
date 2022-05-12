const list = [
  {
    gameBaseId: 14,
    gameName: "SDK-DEMO-2",
    gameList: [
      {
        gameId: 2,
        sdkTypeName: "哔哩Android-SDK",
        gameName: "SDK-DEMO-2",
        sdkTypeId: 1,
        gameList: [
          {
            gameId: 12,
            sdkTypeName: "测试-哔哩Android-SDK",
            gameName: "测试SDK-DEMO-2",
            sdkTypeId: 12,
          },
        ],
      },
      {
        gameId: 85,
        gameName: "SDK-DEMO-2",
        sdkTypeId: 2,
        sdkTypeName: "哔哩IOS-SDK",
        gameList: [],
      },
    ],
  },
  {
    gameBaseId: 2,
    gameName: "神之刃",
    gameList: [
      {
        gameId: 9,
        gameName: "神之刃",
        sdkTypeId: 1,
        sdkTypeName: "哔哩Android-SDK",
        gameList: [],
      },
      {
        gameId: 334,
        gameName: "神之刃",
        sdkTypeId: 13,
        sdkTypeName: "付费下载",
        gameList: [
          {
            gameId: 66,
            gameName: "测试神之刃",
            sdkTypeId: 666,
            sdkTypeName: "测试付费下载",
          },
        ],
      },
    ],
  },
];

function handleGetMapList(list) {
  return list.map((item) => {
    let newObj = {};
    if (item.gameBaseId) {
      newObj = {
        title: item.gameName,
        gameName: item.gameName,
        key: item.gameBaseId,
      };
    }
    if (item.sdkTypeId) {
      newObj = {
        title: item.sdkTypeName,
        gameName: item.gameName,
        key: `${item.gameId}-${item.sdkTypeId}`,
      };
    }
    newObj.children = [];
    if (item.gameList?.length > 0) {
      newObj.children = handleGetMapList(item.gameList);
    }
    return newObj;
  });
}

function handleGetChild(list) {
  let arr = [];
  list.forEach((item) => {
    if (item.children?.length > 0) {
      item.children.forEach((i) => {
        arr.push(i);
      });
    }
  });
  return arr;
}

function handleGetIdsMap(list) {
  let map = {};
  list.forEach((item) => {
    if (item.gameList?.length > 0) {
      item.gameList.forEach((sdkItem) => {
        let uuid = `${sdkItem.gameId}-${sdkItem.sdkTypeId}`;
        map[uuid] = {
          uuid,
          gameBaseId: item.gameBaseId,
          gameName: item.gameName,
          gameId: sdkItem.gameId,
          sdkItem: sdkItem.sdkTypeId,
          sdkTypeName: sdkItem.sdkTypeName,
        };
      });
    }
  });
  return map;
}

let mapList = handleGetMapList(list);
let childLst = handleGetChild(mapList);
let mapIdsObj = handleGetIdsMap(list);
// console.log("mapList", JSON.stringify(mapList, null, 2));
console.log("childLst", JSON.stringify(childLst, null, 2));
// console.log("mapIdsObj", JSON.stringify(mapIdsObj, null, 2));
