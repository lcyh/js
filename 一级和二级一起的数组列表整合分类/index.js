/*
 * @Author: changluo
 * @Description: 
 */
// {
//     "type": 0, //（0代表是根节点(一级菜单), 1代表子节点(子菜单)）
//     "menuId": 1,  //菜单 ID
//     "parentId": 0,  //父菜单ID  
//     "url": "",      //访问路径
//     "name": "业绩表现", //菜单名称
//     "reportUrl": "",   //superSet报表路径
//     "havePermission": 0  //是否有权限 0没有1有
// }
const menuList = [
    {
        "menuId": 1,
        "parentId": 0,
        "url": "",
        "name": "业绩表现",
        "type": 0,
        "reportUrl": "",
        "havePermission": 1
    },
    {
        "menuId": 2,
        "parentId": 0,
        "url": "",
        "name": "数据看板",
        "type": 0,
        "reportUrl": "",
        "havePermission": 1
    },
    {
        "menuId": 3,
        "parentId": 1,
        "url": "/performance/achievement",
        "name": "全平台业绩追踪",
        "type": 1,
        "reportUrl": "http://cpgame-data-superset.biligame.com/superset/show/web/58",
        "havePermission": 1
    },
    {
        "menuId": 4,
        "parentId": 1,
        "url": "/performance/unionOperation",
        "name": "联运业务看板",
        "type": 1,
        "reportUrl": "http://cpgame-data-superset.biligame.com/superset/show/web/58",
        "havePermission": 1
    },
    {
        "menuId": 5,
        "parentId": 2,
        "url": "/databoard/overview",
        "name": "数据概览",
        "type": 1,
        "reportUrl": "http://cpgame-data-superset.biligame.com/superset/show/web/58",
        "havePermission": 1
    },
    {
        "menuId": 6,
        "parentId": 2,
        "url": "/databoard/realtime",
        "name": "实时看板",
        "type": 1,
        "reportUrl": "http://cpgame-data-superset.biligame.com/superset/show/web/58",
        "havePermission": 1
    },
    {
        "menuId": 7,
        "parentId": 2,
        "url": "/databoard/marketing",
        "name": "营销看板",
        "type": 1,
        "reportUrl": "http://cpgame-data-superset.biligame.com/superset/show/web/58",
        "havePermission": 1
    },
    {
        "menuId": 8,
        "parentId": 2,
        "url": "/databoard/newboard",
        "name": "新增看板",
        "type": 1,
        "reportUrl": "http://cpgame-data-superset.biligame.com/superset/show/web/58",
        "havePermission": 1
    },
    {
        "menuId": 9,
        "parentId": 2,
        "url": "/databoard/actived",
        "name": "活跃看板",
        "type": 1,
        "reportUrl": "http://cpgame-data-superset.biligame.com/superset/show/web/58",
        "havePermission": 1
    },
    {
        "menuId": 10,
        "parentId": 2,
        "url": "/databoard/payment",
        "name": "付费看板",
        "type": 1,
        "reportUrl": "http://cpgame-data-superset.biligame.com/superset/show/web/58",
        "havePermission": 1
    },
    {
        "menuId": 11,
        "parentId": 2,
        "url": "/databoard/economy",
        "name": "经济系统",
        "type": 1,
        "reportUrl": "http://cpgame-data-superset.biligame.com/superset/show/web/58",
        "havePermission": 1
    },
    {
        "menuId": 12,
        "parentId": 2,
        "url": "/databoard/activityAnalysis",
        "name": "活动分析",
        "type": 1,
        "reportUrl": "http://cpgame-data-superset.biligame.com/superset/show/web/58",
        "havePermission": 1
    },
    {
        "menuId": 13,
        "parentId": 2,
        "url": "/databoard/playingData",
        "name": "玩法数据",
        "type": 1,
        "reportUrl": "http://cpgame-data-superset.biligame.com/superset/show/web/58",
        "havePermission": 1
    },
    {
        "menuId": 14,
        "parentId": 2,
        "url": "/databoard/custom",
        "name": "自定义看板",
        "type": 1,
        "reportUrl": "http://cpgame-data-superset.biligame.com/superset/show/web/58",
        "havePermission": 1
    }
];

function formatMenu(list) {
    let menu = [];
    let menuObj = {};
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        if (!item.havePermission) {
            continue; //如果没有权限,跳过本次循环，继续下次的循环，不会终止for循环
        }
        // 一级菜单
        if (item.type === 0) {
            menu.push({
                id: item.menuId,
                title: item.name,
                name: item.name
            })
        } else if (item.type === 1) { //  二级菜单
            menuObj[item.parentId] = menuObj[item.parentId] ? menuObj[item.parentId] : [];
            menuObj[item.parentId].push(
                {
                    id: item.menuId,
                    title: item.name,
                    name: item.name,
                    reportUrl: item.reportUrl
                }
            )
        }

    }
    let menuMap = new Map();
    menu.forEach((item) => {
        let key = item.id + '';
        if (menuObj[key]) {
            menuMap.set(item.title, menuObj[key]);
        }
    })
    return { menu, menuObj, menuMap }
}
let res = formatMenu(menuList);
console.log('res', res.menuMap);