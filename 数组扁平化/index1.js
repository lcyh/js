/*
 * @Author: changluo
 * @Description: 
 */
let arr = [
    {
        'Id': '1',
        'Name': '教学素材管理',
        'Pid': '0',
        'id': '659354849B9A44AA9E2477223DF68C96',
        'children': [
            {
                'Id': '4DDA93E00CD34E4D812EC1A9E10AA883',
                'Name': '教学素材',
                'Pid': '659354849B9A44AA9E2477223DF68C96',
                'id': '4DDA93E00CD34E4D812EC1A9E10AA883',
                'children': [
                    {
                        'Id': '6CD3A04CFBC1419F81E1A66BDC81F177',
                        'Name': '修改',
                        'Pid': '4DDA93E00CD34E4D812EC1A9E10AA883',
                        'id': '6CD3A04CFBC1419F81E1A66BDC81F177'
                    },
                    {
                        'Id': 'B93352644544420782337BC41C0534A9',
                        'Name': '添加',
                        'Pid': '4DDA93E00CD34E4D812EC1A9E10AA883',
                        'id': 'B93352644544420782337BC41C0534A9'
                    }
                ]
            },
            {
                'Id': '68F89C4E368048E699F3D7EDD69A86A7',
                'Name': '测试试题',
                'Pid': '659354849B9A44AA9E2477223DF68C96',
                'id': '68F89C4E368048E699F3D7EDD69A86A7'
            },
            {
                'Id': 'CF31D0CA5BC34765A61909B296E470C6',
                'Name': '问题任务',
                'Pid': '659354849B9A44AA9E2477223DF68C96',
                'id': 'CF31D0CA5BC34765A61909B296E470C6'
            }
        ]
    },
    {
        'Id': 'B85EAE5FAAC64790AC62FA288E87AEAC',
        'Name': '基础数据管理',
        'Pid': '0',
        'id': 'B85EAE5FAAC64790AC62FA288E87AEAC',
        'children': [
            {
                'Id': '134D7E54B9D041539940D29E24592DF4',
                'Name': '专业设置',
                'Pid': 'B85EAE5FAAC64790AC62FA288E87AEAC',
                'id': '134D7E54B9D041539940D29E24592DF4'
            },
            {
                'Id': '2314DE1399484596A7440326E07590DB',
                'Name': '专业管理',
                'Pid': 'B85EAE5FAAC64790AC62FA288E87AEAC',
                'id': '2314DE1399484596A7440326E07590DB'
            }
        ]
    },
    {
        "Id":'11111',
        'Name': 'test',
        'Pid': '0',
        'id': 'B85EAE5FAAC64',
        "children":[]
    }
]

// 希望结果
//   [
//     {
//       'Id': '1',
//       'Name': '教学素材管理',
//       'Pid': '0',
//       'id': '659354849B9A44AA9E2477223DF68C96'
//     },
//     {
//       'Id': '4DDA93E00CD34E4D812EC1A9E10AA883',
//       'Name': '教学素材',
//       'Pid': '659354849B9A44AA9E2477223DF68C96',
//       'id': '4DDA93E00CD34E4D812EC1A9E10AA883'
//     },
//     {
//       'Id': '6CD3A04CFBC1419F81E1A66BDC81F177',
//       'Name': '修改',
//       'Pid': '4DDA93E00CD34E4D812EC1A9E10AA883',
//       'id': '6CD3A04CFBC1419F81E1A66BDC81F177'
//     },
//     {
//       'Id': 'B93352644544420782337BC41C0534A9',
//       'Name': '添加',
//       'Pid': '4DDA93E00CD34E4D812EC1A9E10AA883',
//       'id': 'B93352644544420782337BC41C0534A9'
//     },
//     {
//       'Id': '68F89C4E368048E699F3D7EDD69A86A7',
//       'Name': '测试试题',
//       'Pid': '659354849B9A44AA9E2477223DF68C96',
//       'id': '68F89C4E368048E699F3D7EDD69A86A7'
//     },
//     {
//       'Id': 'CF31D0CA5BC34765A61909B296E470C6',
//       'Name': '问题任务',
//       'Pid': '659354849B9A44AA9E2477223DF68C96',
//       'id': 'CF31D0CA5BC34765A61909B296E470C6'
//     },
//     {
//       'Id': 'B85EAE5FAAC64790AC62FA288E87AEAC',
//       'Name': '基础数据管理',
//       'Pid': '0',
//       'id': 'B85EAE5FAAC64790AC62FA288E87AEAC'
//     },
//     {
//       'Id': '134D7E54B9D041539940D29E24592DF4',
//       'Name': '专业设置',
//       'Pid': 'B85EAE5FAAC64790AC62FA288E87AEAC',
//       'id': '134D7E54B9D041539940D29E24592DF4'
//     },
//     {
//       'Id': '2314DE1399484596A7440326E07590DB',
//       'Name': '专业管理',
//       'Pid': 'B85EAE5FAAC64790AC62FA288E87AEAC',
//       'id': '2314DE1399484596A7440326E07590DB'
//     }
//   ]

function flatten(data, level = 0) {
    return data.reduce((arr, { Id, Name, Pid, id, children = [] }) => {
        return arr.concat([{ level, Id, Name, Pid, id }], flatten(children, level + 1))
    }, [])
}
let result = flatten(arr);
console.log('result', result);

// concat 返回一个新数组
let arr1 = [];
let newArr = arr1.concat([1,2,3],[4,5]);
console.log('arr1',arr1);
console.log('newArr',newArr);

function treeToList(data){
    const res = [];
    const flat = (data) =>{
        data.forEach(item => {
            if(item.children.length){
                flat(item.children);
            }
            delete item.children;
            res.push(item)
        });
    }
    flat(data)
    return res;
}
// console.log('treeToList(arr)',treeToList(arr));