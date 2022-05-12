let  menuData = [
    {
      id: 1,
      name: 'ABtest',
      title: 'ABtest',
      path: '/experiment',
      reportUrl: '',
      visible: 1,
      children: [
        {
          id: 11,
          name: 'ABtest',
          title: 'ABtest',
          path: '/experiment',
          reportUrl: '',
          visible: 1,
          children: [
            {
              id: 111,
              name: '实验管理',
              title: '实验管理',
              path: '/experiment/manage',
              reportUrl: '',
              visible: 1,
              children: [],
            },
            {
              id: 112,
              name: '受众管理',
              title: '受众管理',
              path: '/audience/manage',
              reportUrl: '',
              visible: 1,
              children: [],
            },
            {
              id: 113,
              name: '变量管理',
              title: '变量管理',
              path: '/variable/manage',
              reportUrl: '',
              visible: 1,
              children: [],
            },
            {
              id: 114,
              name: '实验层管理',
              title: '实验层管理',
              path: '/laboratory/manage',
              reportUrl: '',
              visible: 1,
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'demo',
      title: 'demo',
      path: '/demo',
      reportUrl: '',
      visible: 1,
      children: [
        {
          id: 21,
          name: 'demo列表',
          title: 'demo列表',
          path: '/demo',
          reportUrl: '',
          visible: 1,
          children: [
            {
              id: 211,
              name: 'demo列表',
              title: 'demo列表',
              path: '/demo/list',
              reportUrl: '',
              visible: 1,
              children: [],
            },
            {
                id: 212,
                name: 'demo详情',
                title: 'demo详情',
                path: '/demo/detail',
                reportUrl: '',
                visible: 1,
                children: [],
              },
          ],
        },
      ],
    },
  ];

function handleGetData(){
  let currentPath = '/demo/detail';
  // 需求：如果currentPath当前路径，匹配上 menuData最里层的path,则取出 menuData的第一二三层的name值
  let oneLevel='',twoLevel='',threeLevel='';
  let currentSelectedFirstMenu = menuData.find((first)=>{
      const curSecond = first.children.find((second)=>{
          const curThird= second.children.find((third)=>{
              if(currentPath===third.path){
                  oneLevel = first.id;
                  twoLevel = second.id;
                  threeLevel = third.id;
                  return third.id;
              }
          });
          return curThird&&curThird.id;
      });
      return curSecond&&curSecond.id;
  });
  console.log('匹配结果',{oneLevel,twoLevel,threeLevel});
  console.log('currentSelectedFirstMenu',JSON.stringify(currentSelectedFirstMenu,null,2));
}
handleGetData();