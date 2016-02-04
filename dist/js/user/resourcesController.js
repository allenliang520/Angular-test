function resourcesController($scope,$http,$stateParams){
	$scope.userId=$stateParams.userId;
	$scope.userData={
		id:$scope.userId?$scope.userId:-1,
		project:[],
		game:[],
		channel:[]
	}
	$scope.projectlist=[
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
	$scope.gamelist=[
		{
			id:"0",
			name:"游戏0",
			choosed:false
		},
		{
			id:"1",
			name:"游戏1",
			choosed:false
		},
		{
			id:"2",
			name:"游戏2",
			choosed:false
		},
		{
			id:"4",
			name:"游戏3",
			choosed:false
		},
		{
			id:"5",
			name:"游戏4",
			choosed:false
		},
		{
			id:"6",
			name:"游戏5",
			choosed:false
		},
	];
	$scope.channellist=[
		{
			id:"0",
			name:"渠道0",
			choosed:false
		},
		{
			id:"1",
			name:"渠道1",
			choosed:false
		},
		{
			id:"2",
			name:"渠道2",
			choosed:false
		},
		{
			id:"4",
			name:"渠道3",
			choosed:false
		},
		{
			id:"5",
			name:"渠道4",
			choosed:false
		},
		{
			id:"6",
			name:"渠道5",
			choosed:false
		},
	];
	$scope.selectData={all:false,str:"全选"}
	$scope.selectData2={all:false,str:"全选"}
	$scope.selectData3={all:false,str:"全选"}
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
	$scope.setSelectData3=function(t){
		if(t){
			$scope.selectData3.all=true;
			$scope.selectData3.str="全不选";
		}else{
			$scope.selectData3.str="全选";
			$scope.selectData3.all=false;
		}
		$scope.setData3();
	}
	$scope.allChoose=function(){
		if(!$scope.selectData.all)
		{
			for(var i=0;i<$scope.projectlist.length;i++){
				$scope.projectlist[i].choosed=true;
			}
		}else{
			for(var i=0;i<$scope.projectlist.length;i++){
				$scope.projectlist[i].choosed=false;
			}
		}		$scope.setSelectData($scope.checkAll($scope.projectlist,'choosed'));
	}
	$scope.unChoose=function(){
		for(var i=0;i<$scope.projectlist.length;i++){
			$scope.projectlist[i].choosed=!$scope.projectlist[i].choosed;
		}
		$scope.setSelectData($scope.checkAll($scope.projectlist,'choosed'));
	}
	$scope.allChoose2=function(){
		if(!$scope.selectData2.all)
		{
			for(var i=0;i<$scope.gamelist.length;i++){
				$scope.gamelist[i].choosed=true;
			}
		}else{
			for(var i=0;i<$scope.gamelist.length;i++){
				$scope.gamelist[i].choosed=false;
			}
		}		$scope.setSelectData2($scope.checkAll($scope.gamelist,'choosed'));
	}
	$scope.unChoose2=function(){
		for(var i=0;i<$scope.gamelist.length;i++){
			$scope.gamelist[i].choosed=!$scope.gamelist[i].choosed;
		}
		$scope.setSelectData2($scope.checkAll($scope.gamelist,'choosed'));
	}
	$scope.allChoose3=function(){
		if(!$scope.selectData3.all)
		{
			for(var i=0;i<$scope.channellist.length;i++){
				$scope.channellist[i].choosed=true;
			}
		}else{
			for(var i=0;i<$scope.channellist.length;i++){
				$scope.channellist[i].choosed=false;
			}
		}		$scope.setSelectData3($scope.checkAll($scope.channellist,'choosed'));
	}
	$scope.unChoose3=function(){
		for(var i=0;i<$scope.channellist.length;i++){
			$scope.channellist[i].choosed=!$scope.channellist[i].choosed;
		}
		$scope.setSelectData3($scope.checkAll($scope.channellist,'choosed'));
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
		$scope.userData.project=[];
		for(var i=0;i<$scope.projectlist.length;i++){
			if($scope.projectlist[i].choosed){
				$scope.userData.project.push($scope.projectlist[i].id);
			}
		}
	}
	$scope.setData2=function(){
		$scope.userData.game=[];
		for(var i=0;i<$scope.gamelist.length;i++){
			if($scope.gamelist[i].choosed){
				$scope.userData.game.push($scope.gamelist[i].id);
			}
		}
	}
	$scope.setData3=function(){
		$scope.userData.channel=[];
		for(var i=0;i<$scope.channellist.length;i++){
			if($scope.channellist[i].choosed){
				$scope.userData.channel.push($scope.channellist[i].id);
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
		for(var i=0;i<$scope.projectlist.length;i++){
			$scope.projectlist[i].choosed=false;
			if($scope.userData.project){
			for(var k=0;k<$scope.userData.project.length;k++){
				if($scope.projectlist[i].id==$scope.userData.project[k]){
					$scope.projectlist[i].choosed=true;
				}
			}}
		}
		for(var i=0;i<$scope.gamelist.length;i++){
			$scope.gamelist[i].choosed=false;
			if($scope.userData.game){
			for(var k=0;k<$scope.userData.game.length;k++){
				if($scope.gamelist[i].id==$scope.userData.game[k]){
					$scope.gamelist[i].choosed=true;
				}
			}}
		}
		for(var i=0;i<$scope.channellist.length;i++){
			$scope.channellist[i].choosed=false;
			if($scope.userData.game){
			for(var k=0;k<$scope.userData.game.length;k++){
				if($scope.channellist[i].id==$scope.userData.channel[k]){
					$scope.channellist[i].choosed=true;
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
			project:[0,5,6],
			game:[1,4,2],
			channel:[2,5,4],
		}
		for(var key in getData){
			saveData[key]=getData[key];
		}
		$scope.userData=getData;
		$scope.resetChoose();
	}
	$scope.userId?$scope.getUserData():0;

}
