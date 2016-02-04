function playersChumController($scope,$http){
	$scope.graphfun={
		"dataList_1_1_graph":function(data,xdata,ydata){
				$('.panel_1 .dataList_1 .graph').highcharts({
						title:{text:""},
						chart: {zoomType: 'xy'},
						colors: ["#6DC5FD", "#b2de54", "#AA4643", "#80699B", "#3D96AE", "#DB843D", "#92A8CD", "#A47D7C", "#B5CA92"],
						xAxis: {
							type: 'linear',
							tickmarkPlacement: 'on',
							categories: ($scope.dataDateArr( $scope.panel_1.dataList_1.data,'statdate')).newArr
						},
						yAxis: [{
							title:"",
							labels: {
								formatter: function() {
									return this.value;
								}
							}
						},{
							title:"",
							labels: {
								formatter: function() {
									return this.value+"%";
								}
							}
						}],
						tooltip: {
							shared: true
						},
						plotOptions: {
							area: {
								stacking: 'normal',
								fillOpacity:0.25,
								marker: {
									enabled: false,
			//						symbol: 'circle',
									radius: 1,
									states: {
										hover: {
											enabled: true
										}
									}
								}
							}
						},
						series: [{
							name: '每日流失数(账户)',
							type: 'column',
							data: ($scope.dataPushArr( $scope.panel_1.dataList_1.data,'accounts')).newArr
						},{
							name: '每日流失率(%)',
							type: 'spline',
							data: ($scope.dataPushArr( $scope.panel_1.dataList_1.data,'rate')).newArr
						}]
				});
			},
		"dataList_1_2_graph":function(data,xdata,ydata){
				$('.panel_1 .dataList_2 .graph').highcharts({
						title:{text:""},
						chart: {type: 'area'},
						colors: ["#6DC5FD", "#b2de54", "#AA4643", "#80699B", "#3D96AE", "#DB843D", "#92A8CD", "#A47D7C", "#B5CA92"],
						xAxis: {
							type: 'linear',
							tickmarkPlacement: 'on',
							categories: ($scope.dataDateArr( $scope.panel_1.dataList_2.data,'statdate')).newArr
						},
						yAxis: [{
							title:"",
							labels: {
								formatter: function() {
									return this.value;
								}
							}
						}],
						tooltip: {
							shared: true
						},
						plotOptions: {
							area: {
								stacking: 'normal',
								fillOpacity:0.25,
								marker: {
									enabled: false,
			//						symbol: 'circle',
									radius: 1,
									states: {
										hover: {
											enabled: true
										}
									}
								}
							}
						},
						series: [{
							name: '新增付费玩家(账户)',
							data: ($scope.dataPushArr( $scope.panel_1.dataList_2.data,'accounts')).newArr
						}]
				});
			},
		"dataList_2_1_graph":function(data,xdata,ydata){
				$('.panel_2 .dataList_1 .graph').highcharts({
						title:{text:""},
						chart: {type: 'area'},
						colors: ["#6DC5FD", "#b2de54", "#AA4643", "#80699B", "#3D96AE", "#DB843D", "#92A8CD", "#A47D7C", "#B5CA92"],
						xAxis: {
							type: 'linear',
							tickmarkPlacement: 'on',
							categories: ($scope.dataDateArr( $scope.panel_2.dataList_1.data,'statdate')).newArr
						},
						yAxis: [{
							title:"",
							labels: {
								formatter: function() {
									return this.value;
								}
							}
						}],
						tooltip: {
							shared: true
						},
						plotOptions: {
							area: {
								stacking: 'normal',
								fillOpacity:0.25,
								marker: {
									enabled: false,
			//						symbol: 'circle',
									radius: 1,
									states: {
										hover: {
											enabled: true
										}
									}
								}
							}
						},
						series: [{
							name: '新增付费玩家(账户)',
							data: ($scope.dataPushArr( $scope.panel_2.dataList_1.data,'accounts')).newArr
						}]
				});
			},
	};
	$scope.panel_1={
		'model':'table',
		'dataList_1':{
			'data':'',
			'graphLimit':{
				'sumLen':0,
				'now':-1,
				'max':10,
				'count':0
			},
			'limit':{
				'sumLen':0,
				'now':0,
				'max':10,
				'count':0
			},
			'dataLimit':'',
			'orderBy':{'s':'','t':''}
		},
		'dataList_2':{
			'data':'',
			'graphLimit':{
				'sumLen':0,
				'now':-1,
				'max':10,
				'count':0
			},
			'limit':{
				'sumLen':0,
				'now':0,
				'max':10,
				'count':0
			},
			'dataLimit':'',
			'orderBy':{'s':'','t':''}
		}
	};
	$scope.panel_2={
		'model':'table',
		'dataList_1':{
			'data':'',
			'graphLimit':{
				'sumLen':0,
				'now':-1,
				'max':10,
				'count':0
			},
			'limit':{
				'sumLen':0,
				'now':0,
				'max':10,
				'count':0
			},
			'dataLimit':'',
			'orderBy':{'s':'','t':''},
			'th':{
				'type':['流失前等级','用户生命期','付费金额','付费次数'],
			}
		}
	};


	$scope.day=7;	//连续N天不登陆
	$scope.palyerType=0;	//0：全部玩家 ，1：付费玩家
	$scope.chumplayer=0;	//0：流失前等级 ，1：用户生命期 ，2：付费金额 ，3：付费次数
	$scope.changeday=function(i){
		$scope.day=i;
		$scope.getAllData();
	}
	$scope.changetype=function(i){
		$scope.palyerType=i;
		$scope.getAllData();
	}
	$scope.changechumplayer=function(i){
		$scope.chumplayer=i;
		$scope.getChumPlayerData();
	}

	$scope.$watch("mchange.date", function (nv, ov) {
		if ($scope.mchange.date) {
			$scope.getAllData();
			$scope.mchange.date = false;
		}
	});
	$scope.$watch("mchange.channelQf", function (nv, ov) {
		if ($scope.mchange.channelQf) {
			$scope.callbackChannelQf();
			$scope.getAllData();
			$scope.mchange.channelQf = false;
		}
	});
	$scope.getAllData=function(){
			$http.post("testData/conversion/firstDayPay.json?date="+$scope.mstatdate+"&channel="+$scope.mchannel+"&qf="+$scope.mareaclothing+"&t="+Math.random(),{}).success(function(data, status, headers, config){
				$scope.panel_1.dataList_1.data=data.firstDayPay;
				$scope.panel_1.dataList_2.data=data.firstDayPay;
				$scope.panel_1_change = true;
			});
		$scope.getChumPlayerData();
	};

	$scope.getChumPlayerData=function(){
			$http.post("testData/conversion/firstDayPay.json?date="+$scope.mstatdate+"&channel="+$scope.mchannel+"&qf="+$scope.mareaclothing+"&t="+Math.random(),{}).success(function(data, status, headers, config){
				$scope.panel_2.dataList_1.data=data.firstDayPay;
				$scope.panel_2_change = true;
			});

	}

}
