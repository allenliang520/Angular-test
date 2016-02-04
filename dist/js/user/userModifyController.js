function userModifyController($scope,$http,$stateParams){
	$scope.userId=$stateParams.userId;
	$scope.title=$scope.userId?"修改":"添加";
	$scope.userData={
		id:$scope.userId?$scope.userId:-1,
		name:"",
		realname:"",
		password:"",
		tel:"",
		role:[],
		departmen:[]
	}
	$scope.rolelist=[
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
	$scope.departmentlist=[
		{
			id:"0",
			name:"部门0",
			choosed:false
		},
		{
			id:"1",
			name:"部门1",
			choosed:false
		},
		{
			id:"2",
			name:"部门2",
			choosed:false
		},
		{
			id:"4",
			name:"部门3",
			choosed:false
		},
		{
			id:"5",
			name:"部门4",
			choosed:false
		},
		{
			id:"6",
			name:"部门5",
			choosed:false
		},
	];
	$scope.selectData={all:false,str:"全选"}
	$scope.selectData2={all:false,str:"全选"}
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
	$scope.setSelectData2=function(t){
		if(t){
			$scope.selectData2.all=true;
			$scope.selectData2.str="全不选";
		}else{
			$scope.selectData2.str="全选";
			$scope.selectData2.all=false;
		}
		$scope.setData2();
	}
	$scope.allChoose=function(){
		if(!$scope.selectData.all)
		{
			for(var i=0;i<$scope.rolelist.length;i++){
				$scope.rolelist[i].choosed=true;
			}
		}else{
			for(var i=0;i<$scope.rolelist.length;i++){
				$scope.rolelist[i].choosed=false;
			}
		}		$scope.setSelectData($scope.checkAll($scope.rolelist,'choosed'));
	}
	$scope.unChoose=function(){
		for(var i=0;i<$scope.rolelist.length;i++){
			$scope.rolelist[i].choosed=!$scope.rolelist[i].choosed;
		}
		$scope.setSelectData($scope.checkAll($scope.rolelist,'choosed'));
	}
	$scope.allChoose2=function(){
		if(!$scope.selectData2.all)
		{
			for(var i=0;i<$scope.departmentlist.length;i++){
				$scope.departmentlist[i].choosed=true;
			}
		}else{
			for(var i=0;i<$scope.departmentlist.length;i++){
				$scope.departmentlist[i].choosed=false;
			}
		}		$scope.setSelectData2($scope.checkAll($scope.departmentlist,'choosed'));
	}
	$scope.unChoose2=function(){
		for(var i=0;i<$scope.departmentlist.length;i++){
			$scope.departmentlist[i].choosed=!$scope.departmentlist[i].choosed;
		}
		$scope.setSelectData2($scope.checkAll($scope.departmentlist,'choosed'));
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
		$scope.userData.role=[];
		for(var i=0;i<$scope.rolelist.length;i++){
			if($scope.rolelist[i].choosed){
				$scope.userData.role.push($scope.rolelist[i].id);
			}
		}
	}
	$scope.setData2=function(){
		$scope.userData.departmen=[];
		for(var i=0;i<$scope.departmentlist.length;i++){
			if($scope.departmentlist[i].choosed){
				$scope.userData.departmen.push($scope.departmentlist[i].id);
			}
		}
	}

	$scope.resetData=function(){
		$scope.userData={};
		for(var key in saveData){
			$scope.userData[key]=saveData[key];
		}
		$scope.resetChoose();
	}
	$scope.resetChoose=function(){
		for(var i=0;i<$scope.rolelist.length;i++){
			$scope.rolelist[i].choosed=false;
			if($scope.userData.role){
			for(var k=0;k<$scope.userData.role.length;k++){
				if($scope.rolelist[i].id==$scope.userData.role[k]){
					$scope.rolelist[i].choosed=true;
				}
			}}
		}
		for(var i=0;i<$scope.departmentlist.length;i++){
			$scope.departmentlist[i].choosed=false;
			if($scope.userData.departmen){
			for(var k=0;k<$scope.userData.departmen.length;k++){
				if($scope.departmentlist[i].id==$scope.userData.departmen[k]){
					$scope.departmentlist[i].choosed=true;
				}
			}}
		}
	}
	$scope.postData=function(){
		$scope.setData1();
		$scope.setData2();
		console.log($scope.userData);
	}
	var saveData={};
	$scope.getUserData=function(){
		var getData={
			name:"呵呵",
			realname:"嘎嘎",
			password:"123456",
			tel:"6543216547",
			role:[0,5,6],
			departmen:[3,4,1]
		}
		for(var key in getData){
			saveData[key]=getData[key];
		}
		$scope.userData=getData;
		$scope.resetChoose();
	}
	$scope.userId?$scope.getUserData():0;
}
