/**
 * Created by yangfeng on 2016/3/15.
 */
var _0102_permissionTree = $.extend({}, viewBase,{
	nodes:[{
	    "index": 0,
	    "id": "1000",
	    "name": "商品",
	    "children": [{
	        "index": 0,
	        "pIndex": 0,
	        "id": "1100",
	        "name": "商品发布",
	        "children": [{
	            "index": 0,
	            "pIndex": 0,
	            "aIndex": 0,
	            "id": "1101",
	            "name": "发布商品"
	        }]
	    }, {
	        "index": 1,
	        "pIndex": 0,
	        "id": "1200",
	        "name": "商品管理",
	        "children": [{
	            "index": 0,
	            "pIndex": 1,
	            "aIndex": 0,
	            "id": "1201",
	            "name": "查看商品",
	            "isView": true
	        }, {
	            "index": 1,
	            "pIndex": 1,
	            "aIndex": 0,
	            "id": "1202",
	            "name": "编辑商品"
	        }, {
	            "index": 2,
	            "pIndex": 1,
	            "aIndex": 0,
	            "id": "1203",
	            "name": "删除商品"
	        }]
	    }, {
	        "index": 2,
	        "pIndex": 0,
	        "id": "1300",
	        "name": "可售商品",
	        "children": [{
	            "index": 0,
	            "pIndex": 2,
	            "aIndex": 0,
	            "id": "1301",
	            "name": "查看商品",
	            "isView": true
	        }, {
	            "index": 1,
	            "pIndex": 2,
	            "aIndex": 0,
	            "id": "1302",
	            "name": "编辑商品"
	        }, {
	            "index": 2,
	            "pIndex": 2,
	            "aIndex": 0,
	            "id": "1303",
	            "name": "变更商品（上架｜定时｜仓库｜下架）"
	        }]
	    }]
	}, {
	    "index": 1,
	    "id": "2000",
	    "name": "合同",
	    "children": [{
	        "index": 0,
	        "pIndex": 1,
	        "id": "2100",
	        "name": "合同列表",
	        "children": [{
	            "index": 0,
	            "pIndex": 0,
	            "aIndex": 1,
	            "id": "2101",
	            "name": "查看合同",
	            "isView": true
	        }, {
	            "index": 1,
	            "pIndex": 0,
	            "aIndex": 1,
	            "id": "2102",
	            "name": "打印发货单"
	        }, {
	            "index": 2,
	            "pIndex": 0,
	            "aIndex": 1,
	            "id": "2103",
	            "name": "优惠减免"
	        }, {
	            "index": 3,
	            "pIndex": 0,
	            "aIndex": 1,
	            "id": "2104",
	            "name": "减免余款"
	        }, {
	            "index": 4,
	            "pIndex": 0,
	            "aIndex": 1,
	            "id": "2105",
	            "name": "发货"
	        }]
	    }, {
	        "index": 1,
	        "pIndex": 1,
	        "id": "2200",
	        "name": "地址管理",
	        "children": [{
	            "index": 0,
	            "pIndex": 1,
	            "aIndex": 1,
	            "id": "2201",
	            "name": "查看地址列表",
	            "isView": true
	        }, {
	            "index": 1,
	            "pIndex": 1,
	            "aIndex": 1,
	            "id": "2202",
	            "name": "新建地址"
	        }, {
	            "index": 2,
	            "pIndex": 1,
	            "aIndex": 1,
	            "id": "2203",
	            "name": "修改地址"
	        }, {
	            "index": 3,
	            "pIndex": 1,
	            "aIndex": 1,
	            "id": "2204",
	            "name": "删除地址"
	        }]
	    }, {
	        "index": 2,
	        "pIndex": 1,
	        "id": "2300",
	        "name": "运单模板",
	        "children": [{
	            "index": 0,
	            "pIndex": 2,
	            "aIndex": 1,
	            "id": "2301",
	            "name": "查看运单列表",
	            "isView": true
	        }, {
	            "index": 1,
	            "pIndex": 2,
	            "aIndex": 1,
	            "id": "2302",
	            "name": "新建运单"
	        }, {
	            "index": 2,
	            "pIndex": 2,
	            "aIndex": 1,
	            "id": "2303",
	            "name": "编辑运单"
	        }, {
	            "index": 3,
	            "pIndex": 2,
	            "aIndex": 1,
	            "id": "2304",
	            "name": "测试运单"
	        }, {
	            "index": 4,
	            "pIndex": 2,
	            "aIndex": 1,
	            "id": "2305",
	            "name": "删除运单"
	        }]
	    }, {
	        "index": 3,
	        "pIndex": 1,
	        "id": "2400",
	        "name": "运费模板",
	        "children": [{
	            "index": 0,
	            "pIndex": 3,
	            "aIndex": 1,
	            "id": "2401",
	            "name": "查看运费列表",
	            "isView": true
	        }, {
	            "index": 1,
	            "pIndex": 3,
	            "aIndex": 1,
	            "id": "2402",
	            "name": "新建运费"
	        }, {
	            "index": 2,
	            "pIndex": 3,
	            "aIndex": 1,
	            "id": "2403",
	            "name": "编辑运费"
	        }, {
	            "index": 3,
	            "pIndex": 3,
	            "aIndex": 1,
	            "id": "2404",
	            "name": "测试运费"
	        }, {
	            "index": 4,
	            "pIndex": 3,
	            "aIndex": 1,
	            "id": "2405",
	            "name": "删除模板"
	        }]
	    }]
	}, {
	    "index": 2,
	    "id": "3000",
	    "name": "营销",
	    "children": [{
	        "index": 0,
	        "pIndex": 2,
	        "id": "3100",
	        "name": "活动列表",
	        "children": [{
	            "index": 0,
	            "pIndex": 0,
	            "aIndex": 2,
	            "id": "3101",
	            "name": "查看活动列表",
	            "isView": true
	        }, {
	            "index": 1,
	            "pIndex": 0,
	            "aIndex": 2,
	            "id": "3102",
	            "name": "报名活动"
	        }]
	    }, {
	        "index": 1,
	        "pIndex": 2,
	        "id": "3200",
	        "name": "报名的活动",
	        "children": [{
	            "index": 0,
	            "pIndex": 1,
	            "aIndex": 2,
	            "id": "3201",
	            "name": "查看报名的活动",
	            "isView": true
	        }, {
	            "index": 1,
	            "pIndex": 1,
	            "aIndex": 2,
	            "id": "3202",
	            "name": "增加报名商品"
	        }, {
	            "index": 2,
	            "pIndex": 1,
	            "aIndex": 2,
	            "id": "3203",
	            "name": "取消报名商品"
	        }]
	    }]
	}, {
	    "index": 3,
	    "id": "4000",
	    "name": "统计",
	    "children": [{
	        "index": 0,
	        "pIndex": 3,
	        "id": "4100",
	        "name": "资金结算",
	        "children": [{
	            "index": 0,
	            "pIndex": 0,
	            "aIndex": 3,
	            "id": "4101",
	            "name": "查看资金结算",
	            "isView": true
	        }, {
	            "index": 1,
	            "pIndex": 0,
	            "aIndex": 3,
	            "id": "4102",
	            "name": "打印结算单"
	        }]
	    }, {
	        "index": 1,
	        "pIndex": 3,
	        "id": "4200",
	        "name": "评价统计",
	        "children": [{
	            "index": 0,
	            "pIndex": 1,
	            "aIndex": 3,
	            "id": "4201",
	            "name": "查看评价统计",
	            "isView": true
	        }]
	    }]
	}, {
	    "index": 4,
	    "id": "5000",
	    "name": "店铺",
	    "children": [{
	        "index": 0,
	        "pIndex": 4,
	        "id": "5100",
	        "name": "店铺公司信息",
	        "children": [{
	            "index": 0,
	            "pIndex": 0,
	            "aIndex": 4,
	            "id": "5101",
	            "name": "查看店铺公司信息",
	            "isView": true
	        }]
	    }, {
	        "index": 1,
	        "pIndex": 4,
	        "id": "5200",
	        "name": "证照管理",
	        "children": [{
	            "index": 0,
	            "pIndex": 1,
	            "aIndex": 4,
	            "id": "5201",
	            "name": "查看店铺证照",
	            "isView": true
	        }]
	    }, {
	        "index": 2,
	        "pIndex": 4,
	        "id": "5300",
	        "name": "经营类目",
	        "children": [{
	            "index": 0,
	            "pIndex": 2,
	            "aIndex": 4,
	            "id": "5301",
	            "name": "查看经营类目",
	            "isView": true
	        }, {
	            "index": 1,
	            "pIndex": 2,
	            "aIndex": 4,
	            "id": "5302",
	            "name": "申请经营类型"
	        }, {
	            "index": 2,
	            "pIndex": 2,
	            "aIndex": 4,
	            "id": "5303",
	            "name": "取消申请经营类目"
	        }]
	    }, {
	        "index": 3,
	        "pIndex": 4,
	        "id": "5400",
	        "name": "店内分类",
	        "children": [{
	            "index": 0,
	            "pIndex": 3,
	            "aIndex": 4,
	            "id": "5401",
	            "name": "查看店内分类",
	            "isView": true
	        }, {
	            "index": 1,
	            "pIndex": 3,
	            "aIndex": 4,
	            "id": "5402",
	            "name": "新建店内分类"
	        }, {
	            "index": 2,
	            "pIndex": 3,
	            "aIndex": 4,
	            "id": "5403",
	            "name": "编辑店内分类"
	        }, {
	            "index": 3,
	            "pIndex": 3,
	            "aIndex": 4,
	            "id": "5404",
	            "name": "删除店内分类"
	        }, {
	            "index": 4,
	            "pIndex": 3,
	            "aIndex": 4,
	            "id": "5405",
	            "name": "分类排序"
	        }]
	    }, {
	        "index": 4,
	        "pIndex": 4,
	        "id": "5500",
	        "name": "品牌管理",
	        "children": [{
	            "index": 0,
	            "pIndex": 4,
	            "aIndex": 4,
	            "id": "5501",
	            "name": "查看品牌列表和本店提交的品牌",
	            "isView": true
	        }, {
	            "index": 1,
	            "pIndex": 4,
	            "aIndex": 4,
	            "id": "5502",
	            "name": "申请类目品牌"
	        }, {
	            "index": 2,
	            "pIndex": 4,
	            "aIndex": 4,
	            "id": "5503",
	            "name": "编辑类目品牌"
	        }, {
	            "index": 3,
	            "pIndex": 4,
	            "aIndex": 4,
	            "id": "5504",
	            "name": "删除类目品牌"
	        }]
	    }, {
	        "index": 5,
	        "pIndex": 4,
	        "id": "5600",
	        "name": "相册管理",
	        "children": [{
	            "index": 0,
	            "pIndex": 5,
	            "aIndex": 4,
	            "id": "5601",
	            "name": "查看相册图片",
	            "isView": true
	        }, {
	            "index": 1,
	            "pIndex": 5,
	            "aIndex": 4,
	            "id": "5602",
	            "name": "新建相册"
	        }, {
	            "index": 2,
	            "pIndex": 5,
	            "aIndex": 4,
	            "id": "5603",
	            "name": "编辑相册"
	        }, {
	            "index": 3,
	            "pIndex": 5,
	            "aIndex": 4,
	            "id": "5604",
	            "name": "删除相册"
	        }, {
	            "index": 4,
	            "pIndex": 5,
	            "aIndex": 4,
	            "id": "5605",
	            "name": "上传图片"
	        }, {
	            "index": 5,
	            "pIndex": 5,
	            "aIndex": 4,
	            "id": "5606",
	            "name": "编辑图片"
	        }, {
	            "index": 6,
	            "pIndex": 5,
	            "aIndex": 4,
	            "id": "5607",
	            "name": "移动图片"
	        }, {
	            "index": 7,
	            "pIndex": 5,
	            "aIndex": 4,
	            "id": "5608",
	            "name": "删除图片"
	        }, {
	            "index": 8,
	            "pIndex": 5,
	            "aIndex": 4,
	            "id": "5609",
	            "name": "图片设为封面"
	        }]
	    }]
	}, {
	    "index": 5,
	    "id": "6000",
	    "name": "账户",
	    "children": [{
	        "index": 0,
	        "pIndex": 5,
	        "id": "6100",
	        "name": "账户管理",
	        "children": [{
	            "index": 0,
	            "pIndex": 0,
	            "aIndex": 5,
	            "id": "6101",
	            "name": "查看账户",
	            "isView": true
	        }, {
	            "index": 1,
	            "pIndex": 0,
	            "aIndex": 5,
	            "id": "6102",
	            "name": "新增账户"
	        }, {
	            "index": 2,
	            "pIndex": 0,
	            "aIndex": 5,
	            "id": "6103",
	            "name": "修改账户"
	        }, {
	            "index": 3,
	            "pIndex": 0,
	            "aIndex": 5,
	            "id": "6104",
	            "name": "删除账户"
	        }]
	    }, {
	        "index": 1,
	        "pIndex": 5,
	        "id": "6200",
	        "name": "角色管理",
	        "children": [{
	            "index": 0,
	            "pIndex": 1,
	            "aIndex": 5,
	            "id": "6201",
	            "name": "查看角色",
	            "isView": true
	        }, {
	            "index": 1,
	            "pIndex": 1,
	            "aIndex": 5,
	            "id": "6202",
	            "name": "新增角色"
	        }, {
	            "index": 2,
	            "pIndex": 1,
	            "aIndex": 5,
	            "id": "6203",
	            "name": "修改角色"
	        }, {
	            "index": 3,
	            "pIndex": 1,
	            "aIndex": 5,
	            "id": "6204",
	            "name": "删除角色"
	        }]
	    }, {
	        "index": 2,
	        "pIndex": 5,
	        "id": "6300",
	        "name": "账号日志",
	        "children": [{
	            "index": 0,
	            "pIndex": 2,
	            "aIndex": 5,
	            "id": "6301",
	            "name": "查看账号日志",
	            "isView": true
	        }]
	    }]
	}, {
	    "index": 6,
	    "id": "7000",
	    "name": "设置",
	    "children": [{
	        "index": 0,
	        "pIndex": 6,
	        "id": "7100",
	        "name": "店铺设置",
	        "children": [{
	            "index": 0,
	            "pIndex": 0,
	            "aIndex": 6,
	            "id": "7101",
	            "name": "查看店铺信息",
	            "isView": true
	        }, {
	            "index": 1,
	            "pIndex": 0,
	            "aIndex": 6,
	            "id": "7102",
	            "name": "修改店铺信息"
	        }]
	    }, {
	        "index": 1,
	        "pIndex": 6,
	        "id": "7200",
	        "name": "消息设置",
	        "children": [{
	            "index": 0,
	            "pIndex": 1,
	            "aIndex": 6,
	            "id": "7201",
	            "name": "查看消息设置",
	            "isView": true
	        }, {
	            "index": 1,
	            "pIndex": 1,
	            "aIndex": 6,
	            "id": "7202",
	            "name": "设置消息接收方式"
	        }]
	    }, {
	        "index": 2,
	        "pIndex": 6,
	        "id": "7300",
	        "name": "发货单打印设置",
	        "children": [{
	            "index": 0,
	            "pIndex": 2,
	            "aIndex": 6,
	            "id": "7301",
	            "name": "查看发货单打印设置",
	            "isView": true
	        }, {
	            "index": 1,
	            "pIndex": 2,
	            "aIndex": 6,
	            "id": "7302",
	            "name": "设置打印发货单内容"
	        }]
	    },{
	        "index": 3,
	        "pIndex": 6,
	        "id": "7400",
	        "name": "客服工具设置",
	        "children": [{
	            "index": 0,
	            "pIndex": 3,
	            "aIndex": 6,
	            "id": "7401",
	            "name": "查看客服工具",
	            "isView": true
	        }, {
	            "index": 1,
	            "pIndex": 3,
	            "aIndex": 6,
	            "id": "7402",
	            "name": "增加客服工具"
	        },{
	            "index": 2,
	            "pIndex": 3,
	            "aIndex": 6,
	            "id": "7403",
	            "name": "修改客服工具"
	        },{
	            "index": 3,
	            "pIndex": 3,
	            "aIndex": 6,
	            "id": "7404",
	            "name": "删除客服工具"
	        }]
	    }]
	}, {
	    "index": 7,
	    "id": "8000",
	    "name": "消息",
	    "children": [{
	        "index": 0,
	        "pIndex": 7,
	        "id": "8100",
	        "name": "系统消息",
	        "children": [{
	            "index": 0,
	            "pIndex": 0,
	            "aIndex": 7,
	            "id": "8101",
	            "name": "查看系统消息",
	            "isView": true
	        }, {
	            "index": 1,
	            "pIndex": 0,
	            "aIndex": 7,
	            "id": "8102",
	            "name": "标记为已读/未读"
	        }, {
	            "index": 2,
	            "pIndex": 0,
	            "aIndex": 7,
	            "id": "8103",
	            "name": "删除消息"
	        }]
	    }, {
	        "index": 1,
	        "pIndex": 7,
	        "id": "8200",
	        "name": "平台公告",
	        "children": [{
	            "index": 0,
	            "pIndex": 1,
	            "aIndex": 7,
	            "id": "8201",
	            "name": "查看平台公告"
	        }]
	    }, {
	        "index": 2,
	        "pIndex": 7,
	        "id": "8300",
	        "name": "采购商咨询消息",
	        "children": [{
	            "index": 0,
	            "pIndex": 2,
	            "aIndex": 7,
	            "id": "8301",
	            "name": "查看采购商咨询消息",
	            "isView": true
	        }, {
	            "index": 1,
	            "pIndex": 2,
	            "aIndex": 7,
	            "id": "8302",
	            "name": "回复咨询消息"
	        }]
	    }]
	}],
	//构造权限树数据对象
	getSelectTree: function (nodeIds, nodes) {
        var json = "[";
        var flagIsFatherFirst = true;
        var flagIsSonFirst = true;
        var flagIsGrandsonFirst = true;
        for (var i = 0; i < nodes.length; i++) {
            if (nodeIds.indexOf(nodes[i].id) >= 0) {
                if (flagIsFatherFirst) {
                    json += '{"name":"' + nodes[i].name + '"';
                    flagIsFatherFirst = false;
                } else {
                    json += '},{"name":"' + nodes[i].name + '"';
                }
                if (nodes[i].hasOwnProperty("children")) {
                    for (var j = 0; j < nodes[i].children.length; j++) {
                        if (nodeIds.indexOf(nodes[i].children[j].id) >= 0) {
                            if (flagIsSonFirst) {
                                json += ',"children":[{"name":"' + nodes[i].children[j].name + '"';
                                flagIsSonFirst = false;
                            } else {
                                json += '},{"name":"' + nodes[i].children[j].name + '"';
                            }
                            if (nodes[i].children[j].hasOwnProperty("children")) {
                                for (var k = 0; k < nodes[i].children[j].children.length; k++) {
                                    if (nodeIds.indexOf(nodes[i].children[j].children[k].id) >= 0) {
                                        if (flagIsGrandsonFirst) {
                                            json += ',"children":[{"name":"' + nodes[i].children[j].children[k].name + '"';
                                            flagIsGrandsonFirst = false;
                                        } else {
                                            json += '},{"name":"' + nodes[i].children[j].children[k].name + '"';
                                        }
                                    }
                                }
                                json += '}]';
                                flagIsGrandsonFirst = true;
                            }
                        }
                    }
                    json += '}]';
                    flagIsSonFirst = true;
                }
            }
        }
        if (json.length > 1) {
            json += '}';
        }
        json += ']';
        return JSON.parse(json);
    },
	//查找当前点击的checkbox在节点树中的位置
	findCurNode:function(curId, nodes){
		for (var i=0; i<nodes.length; i++) {
			if (curId == nodes[i].id) {
				return nodes[i];
			}
			if (nodes[i].hasOwnProperty('children')) {
				for (var j=0; j<nodes[i].children.length; j++) {
					if (curId == nodes[i].children[j].id) {
						return nodes[i].children[j];
					}
					if (nodes[i].children[j].hasOwnProperty('children')) {
						for (var k=0; k<nodes[i].children[j].children.length; k++) {
							if (curId == nodes[i].children[j].children[k].id) {
								return nodes[i].children[j].children[k];
							}
						}
					}
				}
			}
		}
		return null;
	},
	//获取关联节点id
	getRelatedNodeIds: function(curNode, nodes){
		var nodeIdObj = {
			level : null,
			c1 : "",
			c2 : [],
			c3 : [],
			view : []
		};
		if (null == curNode) {
			return null;
		}
		//三级节点
		if (curNode.hasOwnProperty('pIndex') && curNode.hasOwnProperty('aIndex')) {
			nodeIdObj.level = 3;
			nodeIdObj.c1 = (nodes[curNode.aIndex].id);
			nodeIdObj.c2.push(nodes[curNode.aIndex].children[curNode.pIndex].id);
			nodeIdObj.c3.push(curNode.id);
			var nodec3_array = nodes[curNode.aIndex].children[curNode.pIndex].children;
			var view = "";
			for(var i=0; i<nodec3_array.length; i++) {
				if (nodec3_array[i].hasOwnProperty('isView')) {
					view += nodec3_array[i].id + ',';
				}
			}
			view = view.slice(0,-1);
			nodeIdObj.view.push(view);
		//二级节点
		} else if(curNode.hasOwnProperty('pIndex')) {
			nodeIdObj.level = 2;
			nodeIdObj.c1 = nodes[curNode.pIndex].id;
			nodeIdObj.c2.push(curNode.id);
			if (curNode.hasOwnProperty('children')) {
				var c3 = "";
				var view = "";
				for (var i=0; i<curNode.children.length; i++) {
					c3 += curNode.children[i].id + ',';
					if (curNode.children[i].hasOwnProperty('isView')) {
						view += curNode.children[i].id + ',';
					}
				}
				c3 = c3.slice(0,-1);
				nodeIdObj.c3.push(c3);
				if (view != "") {
					view = view.slice(0,-1);
					nodeIdObj.view.push(view);
				}
			}
		//一级节点
		} else {
			nodeIdObj.level = 1;
			nodeIdObj.c1 = curNode.id;
			if (curNode.hasOwnProperty('children')) {
				for (var i=0; i<curNode.children.length; i++) {
					nodeIdObj.c2.push(curNode.children[i].id);
					if (curNode.children[i].hasOwnProperty('children')) {
						var c3 = "";
						var view = "";
						for (var j=0; j<curNode.children[i].children.length; j++) {
							c3 += curNode.children[i].children[j].id + ',';
							if (curNode.children[i].children[j].hasOwnProperty('isView') && curNode.children[i].children.length>1) {
								view += curNode.children[i].children[j].id + ',';
							}
						}
						c3 = c3.slice(0,-1);
						nodeIdObj.c3.push(c3);
						if (view != "") {
							view = view.slice(0,-1);
							nodeIdObj.view.push(view);
						}
					}
				}
				
			}
		}
		return nodeIdObj;
	},
	convertIdtoExpr:function(array){
		if (array && array instanceof Array) {
			var str = array.join(",");
			return str.replace(/(\d{4,5})/g, "#$1");
		}
		return null
	},
	//关联选择
	checkRelatedNodes:function(curNode, nodeIdObj, nodes) {
		//勾选1级节点,级联勾选2,3级节点; 
		//勾选2级节点,级联勾选1,3级节点; 
		//勾选3级节点,级联勾选1,2级节点;
		var c1, c2, c3, view;
		if (nodeIdObj.hasOwnProperty('c1')) {
			c1 = '#' + nodeIdObj.c1;
			$(c1).prop("checked", true);
		}
		if (nodeIdObj.hasOwnProperty('c2')) {
			c2 = this.convertIdtoExpr(nodeIdObj.c2);
			$(c2).prop("checked", true);
		}
		if (nodeIdObj.hasOwnProperty('c3')) {
			c3 = this.convertIdtoExpr(nodeIdObj.c3);
			$(c3).prop("checked", true);
		}
		if (nodeIdObj.hasOwnProperty('view')) {
			view = this.convertIdtoExpr(nodeIdObj.view);
			if (nodeIdObj.level === 3 ) {
				if (!curNode.hasOwnProperty('isView')) {
					$(view).prop("checked", true);
					$(view).prop("disabled", true);
				}
			} else {
				$(view).prop("disabled", true);
			} 
		}
	},
	//关联取消
	uncheckRelatedNodes:function(curNode, nodeIdObj, nodes) {
		if (!nodeIdObj) return;
		var c1,c2,c3,view;
		if (nodeIdObj.view) {
			view = this.convertIdtoExpr(nodeIdObj.view);
		}
		//取消勾选1级节点,级联取消2，3级节点
		switch (nodeIdObj.level) {
			case 1:
				c1 = '#' +  curNode.id;
				c2 = this.convertIdtoExpr(nodeIdObj.c2);
			    c3 = this.convertIdtoExpr(nodeIdObj.c3);
				$(c1).prop("checked", false);
				$(c2).prop("checked", false);
				$(c3).prop("checked", false);
				$(view).prop("disabled", false);
				break;
			case 2:
			//取消勾选2级节点,级联取消3级节点
				var c1 = '#' + nodeIdObj.c1;
				var c2 = '#' +  curNode.id;
				var c3 = this.convertIdtoExpr(nodeIdObj.c3);
				$(c2).prop("checked", false);
				$(c3).prop("checked", false);
				//如果2级节点全部取消，取消1级节点勾选
				this.changeRelatedSuperNode(curNode, nodes);
				$(view).prop("disabled", false);
				break;
			//取消勾选3级节点
			case 3:
				//设置三级节点
				c3 = '#' +  curNode.id;
				$(c3).prop("checked", false);
				//设置二级节点
				this.changeRelatedSuperNode(curNode, nodes);
				//设置一级节点
				c2 = nodes[curNode.aIndex].children[curNode.pIndex];
				this.changeRelatedSuperNode(c2, nodes);
				if (!curNode.hasOwnProperty('isView')) {
					var siblings = nodes[curNode.aIndex].children[curNode.pIndex].children;
					var flagViewDisabled = false;
					$.each(siblings, function(index, value){
						//还有一个不是查看权限的节点勾选,则查看复选框的disabled＝true
						if (!siblings[index].hasOwnProperty('isView') && $('#'+siblings[index].id)[0].checked) {
							flagViewDisabled = true;
							return false;
						}
					});
					if (!flagViewDisabled) {
						$(view).prop("disabled",false);
					}
				}
				break;
			default: break;
		}
	},
	checkRleatedView:function(curNode, nodes){
		if (curNode.hasOwnProperty('pIndex') && curNode.hasOwnProperty('aIndex')) {
			if(!curNode.hasOwnProperty('isView') && $('#'+curNode.id)[0].checked) {
				var siblings = nodes[curNode.aIndex].children[curNode.pIndex].children;
				for (var i=0; i<siblings.length; i++) {
					if (siblings[i].hasOwnProperty('isView')) {
						$('#'+siblings[i].id).prop('checked', true);
						$('#'+siblings[i].id).prop('disabled', true);
					}
				}
			}
		}
	},
	changeRelatedSuperNode: function(curNode, nodes){
		if (curNode.hasOwnProperty('pIndex') && curNode.hasOwnProperty('aIndex')) {
			var siblings = nodes[curNode.aIndex].children[curNode.pIndex].children;
			var parentId = nodes[curNode.aIndex].children[curNode.pIndex].id;
		} else if (curNode.hasOwnProperty('pIndex')) {
			var siblings = nodes[curNode.pIndex].children;
			parentId = nodes[curNode.pIndex].id;
		}
		if (null != siblings && siblings.hasOwnProperty('length') && siblings.length>0) {
			$.each(siblings, function(index, value){
				if($('#'+value.id)[0].checked) {
					$('#'+parentId).prop('checked', true);
					return false;
				}
				if (index === siblings.length - 1) {
					$('#'+parentId).prop('checked', false);
				}
			});
		}
	},
	isCheckAll: function($selected, allNodes){
		if (allNodes && allNodes instanceof Array) {
			allNodes = $.grep(allNodes, function(n,i){
				return i === 5; 
			},true);
			var nodeNums = 0;
			for (var i=0; i<allNodes.length; i++) {
				if (allNodes[i].children && allNodes[i].children instanceof Array) 
					nodeNums += allNodes[i].children.length;
				for (var j=0; j<allNodes[i].children.length; j++) {
					if (allNodes[i].children[j].children && allNodes[i].children[j].children instanceof Array)
						nodeNums += allNodes[i].children[j].children.length;
				}
				nodeNums ++;
			}
			if ($selected.length === nodeNums) {
				return true;
			} else {
				return false;
			} 
		}
		return null;
	},
	isUnCheckAll: function($selected, allNodes){
		if (allNodes && allNodes instanceof Array) {
			allNodes = $.grep(allNodes, function(n,i){
				return i === 5; 
			},true);
			if (0 === $selected.length) {
				return true;
			} else {
				return false;
			}
		}
		return null;
	},
	changeTreeNodeStatus: function(rootId, nodes, status){
		var curNode = this.findCurNode(rootId, nodes);
		if (curNode) {
			var nodeIdObj = this.getRelatedNodeIds(curNode, nodes);
		}
		if (nodeIdObj && status) {
			this.checkRelatedNodes(curNode, nodeIdObj, nodes);
		} else {
			this.uncheckRelatedNodes(curNode, nodeIdObj, nodes);
		}
	},
	bindEvent: function($checkbox, nodes){
		var that = this;
		$checkbox.on('change', function(){
			var curNode = that.findCurNode(this.id, nodes);
			var nodeIdObj = that.getRelatedNodeIds(curNode, nodes);
			if (this.checked) {
				that.checkRelatedNodes(curNode, nodeIdObj, nodes);
			} else {
				that.uncheckRelatedNodes(curNode, nodeIdObj, nodes);
			}
		});
		$checkbox.on('load', function(){
			$(this).prop('checked', true);
			var curNode = that.findCurNode(this.id, nodes);
			that.checkRleatedView(curNode, nodes);
		})
	},
	listNodes: function(){
		this.supplierPermissionsFn = function(){
			/*
			 {{if $data.id != 6000}}
			 <div class="rol_53">
			    <div class="rol_54">
			        <input id="${id}" type="checkbox" data-level="1">
			        <label style="vertical-align:middle;">${name}</label>
			    </div>
			    {{if children}}
			    <div class="rol_55">
			    	{{each(i,node2) children}}
			    	{{if i == $data.children.length-1}}
			    	<div class="rol_6 uzz">	
			        {{else}}
			        <div class="rol_6">
			        {{/if}}
			            <div class="rol_61">
							<div class="rol_6a"></div>
							<div class="rol_6b">
								<input type="checkbox" id="${node2.id}" data-level="2"> 
								<label style="vertical-align:middle;">${node2.name}</label>
							</div>
						</div>
						{{if node2.children}}
						<div class="rol_62">
							{{each(j,node3) node2.children}}
							<input type="checkbox" id="${node3.id}" data-level="3"> 
							<label style="vertical-align:middle;">${node3.name}</label> &nbsp;
							{{/each}}
						</div>
						{{/if}}
			        </div>
			        {{/each}}
			    </div>
			    {{/if}}
			</div>
			{{/if}}
			*/
		};
		$.template("supplierPermissions", $.multiline(this.supplierPermissionsFn));
		$.tmpl("supplierPermissions", this.nodes).appendTo(".rol_51");
	},
	// 初始化树
	initTree : function() {
		this.listNodes();
		this.bindEvent($('.rol_51 :checkbox'), this.nodes);
		this.bindEvent($('.rol_52 :checkbox'), JSON.parse($('#dynamicNodes').val()));
	}
});
