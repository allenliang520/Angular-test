function competenceController($scope,$http,$stateParams){
	$scope.searchData={name:""};
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
					url:"/totalstat/daystat*",
					str:"totaldaystat:check"
				}
			];


	};
	$scope.getAllData();
}
