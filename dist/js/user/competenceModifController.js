function competenceModifController($scope,$http,$stateParams){
	$scope.userId=$stateParams.userId;
	$scope.title=$scope.userId?"修改":"添加";
	$scope.userData={
		id:$scope.userId?$scope.userId:-1,
		name:"",
		url:"",
		str:""
	}

	$scope.resetData=function(){
		$scope.userData={};
		for(var key in saveData){
			$scope.userData[key]=saveData[key];
		}
		$scope.userId?0:$scope.userData.iswork=1;
		$scope.resetChoose();
	}
	$scope.postData=function(){
		$scope.setData1();
		$scope.setData2();
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
}
