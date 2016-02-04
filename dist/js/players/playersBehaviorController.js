function playersBehaviorController($scope,$http){
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
								format: '{value} 分'
							}
						},{
							title:"",
							labels: {
								format: '{value} 次'
							},
							opposite: true
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
							name: '每日游戏时长(分)',
							type: 'column',
							data: ($scope.dataPushArr( $scope.panel_1.dataList_1.data,'accounts')).newArr,
							tooltip: {
								valueSuffix: '分'
							}
						},{
							name: '每日游戏次数(次)',
							type: 'spline',
							data: ($scope.dataPushArr( $scope.panel_1.dataList_1.data,'rate')).newArr,
							tooltip: {
								valueSuffix: '次'
							}
						}]
				});
			},
		"dataList_1_2_graph":function(data,xdata,ydata){
				$('.panel_1 .dataList_2 .graph').highcharts({
						title:{text:""},
						chart: {zoomType: 'xy'},
						colors: ["#6DC5FD", "#b2de54", "#AA4643", "#80699B", "#3D96AE", "#DB843D", "#92A8CD", "#A47D7C", "#B5CA92"],
						xAxis: {
							type: 'linear',
							tickmarkPlacement: 'on',
							categories: ($scope.dataDateArr( $scope.panel_1.dataList_2.data,'statdate')).newArr
						},
						yAxis: [{
							title:"",
							labels: {
								format: '{value} 分'
							}
						},{
							title:"",
							labels: {
								format: '{value} 次'
							},
							opposite: true
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
							name: '每周游戏时长(分)',
							type: 'column',
							data: ($scope.dataPushArr( $scope.panel_1.dataList_2.data,'accounts')).newArr,
							tooltip: {
								valueSuffix: '分'
							}
						},{
							name: '每周游戏次数(次)',
							type: 'spline',
							data: ($scope.dataPushArr( $scope.panel_1.dataList_2.data,'rate')).newArr,
							tooltip: {
								valueSuffix: '次'
							}
						}]
				});
			},
		"dataList_1_3_graph":function(data,xdata,ydata){
				$('.panel_1 .dataList_3 .graph').highcharts({
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
								format: '{value} 分'
							}
						},{
							title:"",
							labels: {
								format: '{value} 次'
							},
							opposite: true
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
							name: '每月游戏时长(分)',
							type: 'column',
							data: ($scope.dataPushArr( $scope.panel_1.dataList_3.data,'accounts')).newArr,
							tooltip: {
								valueSuffix: '分'
							}
						},{
							name: '每月游戏次数(次)',
							type: 'spline',
							data: ($scope.dataPushArr( $scope.panel_1.dataList_3.data,'rate')).newArr,
							tooltip: {
								valueSuffix: '次'
							}
						}]
				});
			},
		"dataList_2_1_graph":function(data,xdata,ydata){
				$('.panel_2 .dataList_1 .graph').highcharts({
						title:{text:""},
						chart: {type: 'bar'},
						colors: ["#6DC5FD", "#b2de54", "#AA4643", "#80699B", "#3D96AE", "#DB843D", "#92A8CD", "#A47D7C", "#B5CA92"],
						xAxis: {
							type: 'linear',
							tickmarkPlacement: 'on',
							categories: ($scope.dataDateArr( $scope.panel_2.dataList_1.data,'statdate')).newArr
						},
						yAxis: [{
							title:"",
							labels: {
								format: '{value} 分'
							}
						},{
							title:"",
							labels: {
								format: '{value} 次'
							},
							opposite: true
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
							name: '月游戏天数',
							data: ($scope.dataPushArr( $scope.panel_2.dataList_1.data,'accounts')).newArr,
							tooltip: {
								valueSuffix: ''
							}
						}]
				});
			},
		"dataList_2_2_graph":function(data,xdata,ydata){
				$('.panel_2 .dataList_2 .graph').highcharts({
						title:{text:""},
						chart: {type: 'bar'},
						colors: ["#6DC5FD", "#b2de54", "#AA4643", "#80699B", "#3D96AE", "#DB843D", "#92A8CD", "#A47D7C", "#B5CA92"],
						xAxis: {
							type: 'linear',
							tickmarkPlacement: 'on',
							categories: ($scope.dataDateArr( $scope.panel_2.dataList_2.data,'statdate')).newArr
						},
						yAxis: [{
							title:"",
							labels: {
								format: '{value} 分'
							}
						},{
							title:"",
							labels: {
								format: '{value} 次'
							},
							opposite: true
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
							name: '周游戏天数',
							data: ($scope.dataPushArr( $scope.panel_2.dataList_2.data,'accounts')).newArr,
							tooltip: {
								valueSuffix: ''
							}
						}]
				});
			},
		"dataList_2_3_graph":function(data,xdata,ydata){
				$('.panel_2 .dataList_3 .graph').highcharts({
						title:{text:""},
						chart: {type: 'bar'},
						colors: ["#6DC5FD", "#b2de54", "#AA4643", "#80699B", "#3D96AE", "#DB843D", "#92A8CD", "#A47D7C", "#B5CA92"],
						xAxis: {
							type: 'linear',
							tickmarkPlacement: 'on',
							categories: ($scope.dataDateArr( $scope.panel_2.dataList_3.data,'statdate')).newArr
						},
						yAxis: [{
							title:"",
							labels: {
								format: '{value} '
							}
						},{
							title:"",
							labels: {
								format: '{value} '
							},
							opposite: true
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
							name: '周游戏次数',
							data: ($scope.dataPushArr( $scope.panel_2.dataList_3.data,'accounts')).newArr,
							tooltip: {
								valueSuffix: ''
							}
						}]
				});
			},
		"dataList_2_4_graph":function(data,xdata,ydata){
				$('.panel_2 .dataList_4 .graph').highcharts({
						title:{text:""},
						chart: {type: 'bar'},
						colors: ["#6DC5FD", "#b2de54", "#AA4643", "#80699B", "#3D96AE", "#DB843D", "#92A8CD", "#A47D7C", "#B5CA92"],
						xAxis: {
							type: 'linear',
							tickmarkPlacement: 'on',
							categories: ($scope.dataDateArr( $scope.panel_2.dataList_4.data,'statdate')).newArr
						},
						yAxis: [{
							title:"",
							labels: {
								format: '{value} '
							}
						},{
							title:"",
							labels: {
								format: '{value} '
							},
							opposite: true
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
							name: '日游戏次数',
							data: ($scope.dataPushArr( $scope.panel_2.dataList_4.data,'accounts')).newArr,
							tooltip: {
								valueSuffix: ''
							}
						}]
				});
			},
		"dataList_3_1_graph":function(data,xdata,ydata){
				$('.panel_3 .dataList_1 .graph').highcharts({
						title:{text:""},
						chart: {type: 'bar'},
						colors: ["#6DC5FD", "#b2de54", "#AA4643", "#80699B", "#3D96AE", "#DB843D", "#92A8CD", "#A47D7C", "#B5CA92"],
						xAxis: {
							type: 'linear',
							tickmarkPlacement: 'on',
							categories: ($scope.dataDateArr( $scope.panel_3.dataList_1.data,'statdate')).newArr
						},
						yAxis: [{
							title:"",
							labels: {
								format: '{value} 分'
							}
						},{
							title:"",
							labels: {
								format: '{value} 次'
							},
							opposite: true
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
							name: '周游戏时长',
							data: ($scope.dataPushArr( $scope.panel_3.dataList_1.data,'accounts')).newArr,
							tooltip: {
								valueSuffix: ''
							}
						}]
				});
			},
		"dataList_3_2_graph":function(data,xdata,ydata){
				$('.panel_3 .dataList_2 .graph').highcharts({
						title:{text:""},
						chart: {type: 'bar'},
						colors: ["#6DC5FD", "#b2de54", "#AA4643", "#80699B", "#3D96AE", "#DB843D", "#92A8CD", "#A47D7C", "#B5CA92"],
						xAxis: {
							type: 'linear',
							tickmarkPlacement: 'on',
							categories: ($scope.dataDateArr( $scope.panel_3.dataList_2.data,'statdate')).newArr
						},
						yAxis: [{
							title:"",
							labels: {
								format: '{value} 分'
							}
						},{
							title:"",
							labels: {
								format: '{value} 次'
							},
							opposite: true
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
							name: '单日游戏时长',
							data: ($scope.dataPushArr( $scope.panel_3.dataList_2.data,'accounts')).newArr,
							tooltip: {
								valueSuffix: ''
							}
						}]
				});
			},
		"dataList_3_3_graph":function(data,xdata,ydata){
				$('.panel_3 .dataList_3 .graph').highcharts({
						title:{text:""},
						chart: {type: 'bar'},
						colors: ["#6DC5FD", "#b2de54", "#AA4643", "#80699B", "#3D96AE", "#DB843D", "#92A8CD", "#A47D7C", "#B5CA92"],
						xAxis: {
							type: 'linear',
							tickmarkPlacement: 'on',
							categories: ($scope.dataDateArr( $scope.panel_3.dataList_3.data,'statdate')).newArr
						},
						yAxis: [{
							title:"",
							labels: {
								format: '{value} '
							}
						},{
							title:"",
							labels: {
								format: '{value} '
							},
							opposite: true
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
							name: '单次游戏时长',
							data: ($scope.dataPushArr( $scope.panel_3.dataList_3.data,'accounts')).newArr,
							tooltip: {
								valueSuffix: ''
							}
						}]
				});
			},
		"dataList_4_1_graph":function(data,xdata,ydata){
				$('.panel_4 .dataList_1 .graph').highcharts({
						title:{text:""},
						chart: {type: 'area'},
						colors: ["#6DC5FD", "#b2de54", "#AA4643", "#80699B", "#3D96AE", "#DB843D", "#92A8CD", "#A47D7C", "#B5CA92"],
						xAxis: {
							type: 'linear',
							tickmarkPlacement: 'on',
							categories: ($scope.dataDateArr( $scope.panel_4.dataList_1.data,'statdate')).newArr
						},
						yAxis: [{
							title:"",
							labels: {
								format: '{value} '
							}
						},{
							title:"",
							labels: {
								format: '{value} '
							},
							opposite: true
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
							name: '游戏时段',
							data: ($scope.dataPushArr( $scope.panel_4.dataList_1.data,'accounts')).newArr,
							tooltip: {
								valueSuffix: ''
							}
						}]
				});
			},
	}
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
		},
		'dataList_3':{
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
		},
		'dataList_3':{
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
		'dataList_4':{
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
	$scope.panel_3={
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
		},
		'dataList_3':{
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
		'dataList_4':{
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
	$scope.panel_4={
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
		},
		'dataList_3':{
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
		'dataList_4':{
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
	$scope.tabsId="0";
	$scope.tabsarr=[{"id":0,"name":"新增玩家"},{"id":1,"name":"活跃玩家"},{"id":2,"name":"付费玩家"}];
	$scope.changetabs=function(i){
		$scope.tabsId=i;
		$scope.getAllData();
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
			$http.post("testData/conversion/firstDayPay.json?date="+$scope.mstatdate+"&channel="+$scope.mchannel+"&qf="+$scope.mareaclothing+"&t="+Math.random(),{"data":$scope.mstatdate,"channel":$scope.mchannel,"qf":$scope.mareaclothing}).success(function(data, status, headers, config){
				$scope.panel_1.dataList_1.data=data.firstDayPay;
				$scope.panel_1.dataList_2.data=data.firstDayPay;
				$scope.panel_1.dataList_3.data=data.firstDayPay;
				$scope.panel_1_change = true;
			});
			$http.post("testData/conversion/firstDayPay.json?date="+$scope.mstatdate+"&channel="+$scope.mchannel+"&qf="+$scope.mareaclothing+"&t="+Math.random(),{"data":$scope.mstatdate,"channel":$scope.mchannel,"qf":$scope.mareaclothing}).success(function(data, status, headers, config){
				$scope.panel_2.dataList_1.data=data.firstDayPay;
				$scope.panel_2.dataList_2.data=data.firstDayPay;
				$scope.panel_2.dataList_3.data=data.firstDayPay;
				$scope.panel_2.dataList_4.data=data.firstDayPay;
				$scope.panel_2_change = true;
			});
			$http.post("testData/conversion/firstDayPay.json?date="+$scope.mstatdate+"&channel="+$scope.mchannel+"&qf="+$scope.mareaclothing+"&t="+Math.random(),{"data":$scope.mstatdate,"channel":$scope.mchannel,"qf":$scope.mareaclothing}).success(function(data, status, headers, config){
				$scope.panel_3.dataList_1.data=data.firstDayPay;
				$scope.panel_3.dataList_2.data=data.firstDayPay;
				$scope.panel_3.dataList_3.data=data.firstDayPay;
				$scope.panel_3_change = true;
			});
			$http.post("testData/conversion/firstDayPay.json?date="+$scope.mstatdate+"&channel="+$scope.mchannel+"&qf="+$scope.mareaclothing+"&t="+Math.random(),{"data":$scope.mstatdate,"channel":$scope.mchannel,"qf":$scope.mareaclothing}).success(function(data, status, headers, config){
				$scope.panel_4.dataList_1.data=data.firstDayPay;
				$scope.panel_4_change = true;
			});
	};
}
