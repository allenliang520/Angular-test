function manageController($scope,$http){
	$scope.searchData={name:"",realname:"",role:1};
	$scope.panel_1 = {
		'model': 'table',
		'dataList_1': {
			'data': '',
			'graphLimit': {
				'sumLen': 0,
				'now': -1,
				'max': 10,
				'count': 0
			},
			'limit': {
				'sumLen': 0,
				'now': 0,
				'max': 10,
				'count': 0
			},
			'dataLimit': '',
			'orderBy': {
				's': 'name',
				't': ''
			}
		}
	}
	$scope.changetype=function(i){
		$scope.panel_1.dataList_1.limit.max=i;
		$scope.panel_1.dataList_1.limit.now=0;
		$scope.panel_1.dataList_1.limit.sumLen=($scope.panel_1.dataList_1.data).length;
		$scope.panel_1.dataList_1.limit.count=Math.ceil($scope.panel_1.dataList_1.limit.sumLen/$scope.panel_1.dataList_1.limit.max)-1;
	}


	$scope.delUser=function(id){
		alert("删除"+id);
	}



	$scope.getAllData = function () {
		$scope.panel_1.dataList_1.data=[
				{
					id:"0",
					name:"呵呵",
					realName:"嘎嘎",
					role:"超级管理员,高级运营人员",
					department:"超级管理员",
					tel:"211224",
					lastLoginTime:"21342345",
				}
			];


	};
	$scope.getAllData();
}
