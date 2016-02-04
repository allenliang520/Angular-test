function roleModifController($scope,$http,$stateParams){
	$scope.userId=$stateParams.userId;
	$scope.title=$scope.userId?"修改":"添加";
	$scope.userData={
		id:$scope.userId?$scope.userId:-1,
		name:"",
		iswork:1,
		competence:[]
	}
	$scope.competencelist=[
		{
			id:"0",
			name:"超级管理员0",
			choosed:false
		},
		{
			id:"1",
			name:"超级管理员1",
			choosed:false
		},
		{
			id:"2",
			name:"超级管理员2",
			choosed:false
		},
		{
			id:"4",
			name:"超级管理员3",
			choosed:false
		},
		{
			id:"5",
			name:"超级管理员4",
			choosed:false
		},
		{
			id:"6",
			name:"超级管理员5",
			choosed:false
		},
	];
	$scope.selectData={all:false,str:"全选"}
	$scope.setSelectData=function(t){
		if(t){
			$scope.selectData.all=true;
			$scope.selectData.str="全不选";
		}else{
			$scope.selectData.str="全选";
			$scope.selectData.all=false;
		}
		$scope.setData1
	}
	$scope.allChoose=function(){
		if(!$scope.selectData.all)
		{
			for(var i=0;i<$scope.competencelist.length;i++){
				$scope.competencelist[i].choosed=true;
			}
		}else{
			for(var i=0;i<$scope.competencelist.length;i++){
				$scope.competencelist[i].choosed=false;
			}
		}		$scope.setSelectData($scope.checkAll($scope.competencelist,'choosed'));
	}
	$scope.unChoose=function(){
		for(var i=0;i<$scope.competencelist.length;i++){
			$scope.competencelist[i].choosed=!$scope.competencelist[i].choosed;
		}
		$scope.setSelectData($scope.checkAll($scope.competencelist,'choosed'));
	}
	$scope.checkAll=function(data,key){
		for(var i=0;i<data.length;i++){
			if(!data[i][key]){
				return false;
			}
		}
		return true;
	}

	$scope.setData1=function(){
		$scope.userData.competence=[];
		for(var i=0;i<$scope.competencelist.length;i++){
			if($scope.competencelist[i].choosed){
				$scope.userData.competence.push($scope.competencelist[i].id);
			}
		}
	}

	$scope.resetData=function(){
		$scope.userData={};
		for(var key in saveData){
			$scope.userData[key]=saveData[key];
		}
		$scope.userId?0:$scope.userData.iswork=1;
		$scope.resetChoose();
	}
	$scope.resetChoose=function(){
		for(var i=0;i<$scope.competencelist.length;i++){
			$scope.competencelist[i].choosed=false;
			if($scope.userData.competence){
			for(var k=0;k<$scope.userData.competence.length;k++){
				if($scope.competencelist[i].id==$scope.userData.competence[k]){
					$scope.competencelist[i].choosed=true;
				}
			}}
		}
	}
	$scope.postData=function(){
		$scope.setData1();
		$scope.setData2();
	}
	var saveData={};
	$scope.getUserData=function(){
		var getData={
			name:"呵呵",
			iswork:"1",
			competence:[0,5,6]
		}
		for(var key in getData){
			saveData[key]=getData[key];
		}
		$scope.userData=getData;
		$scope.resetChoose();
	}
	$scope.userId?$scope.getUserData():0;
}
