function companyModifController($scope,$http,$stateParams){
	$scope.userId=$stateParams.userId;
	$scope.title=$scope.userId?"修改":"添加";
	$scope.userData={
		id:$scope.userId?$scope.userId:-1,
		channelname:"",
		company:"12312",
		createDate:"",
		channelID:""
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
			channelname:"呵呵",
			company:"12312",
			createDate:"2016-01-01",
			channelID:"50"
		}
		for(var key in getData){
			saveData[key]=getData[key];
		}
		$scope.userData=getData;
	}
	$scope.userId?$scope.getUserData():0;
	$('#createDate').datetimepicker({ autoclose: true, todayHighlight: true ,language:'zh-CN' ,format:"yyyy-mm-dd",viewSelect:'4',maxView:[4, 'decade']})
}



