function projectModifController($scope,$http,$stateParams,$state){
	$scope.userId=$stateParams.userId;
	$scope.title=$scope.userId?"修改":"添加";
	$scope.userData={
		id:$scope.userId?$scope.userId:-1,
		gameid:"",
		name:"",
		clothingID:"",
		createDate:""
	}
	$scope.gameList=[
		{
			id:0,
			name:"世界线下0"
		},{
			id:1,
			name:"世界线下1"
		},{
			id:2,
			name:"世界线下2"
		}
	];
	$scope.resetData=function(){
		$scope.userData={};
		for(var key in saveData){
			$scope.userData[key]=saveData[key];
		}
		$scope.userId?0:$scope.userData.iswork=1;
		$scope.resetChoose();
	}
	$scope.postData=function(){
		console.log($scope.userData);
	}
	var saveData={};
	$scope.getUserData=function(){
		var getData={
			id:"0",
			name:"呵呵",
			url:"/totalstat/daystat*",
			str:"totaldaystat:check"
		}
		for(var key in getData){
			saveData[key]=getData[key];
		}
		$scope.userData=getData;
	}
	$scope.userId?$scope.getUserData():0;
	$('#createDate').datetimepicker({ autoclose: true, todayHighlight: true ,language:'zh-CN' ,format:"yyyy-mm-dd",viewSelect:'4',maxView:[4, 'decade']})


	$scope.backGo=function(){
		$state.go('main.config.project')
	}
}
