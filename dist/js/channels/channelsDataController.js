function channelsDataController($scope,$http){
	$scope.graphfun={
		"dataList_graph":function(data,xdata,target,name){
			if(!data)return;
			if(!target)return;
				target.parent().find('.graph').highcharts({
						title:{text:""},
						chart: {type: 'area'},
						colors: ["#6DC5FD", "#b2de54", "#AA4643", "#80699B", "#3D96AE", "#DB843D", "#92A8CD", "#A47D7C", "#B5CA92"],
						xAxis: {
							type: 'linear',
							tickmarkPlacement: 'on',
							categories: xdata
						},
						yAxis: [{
							title:"",
							labels: {
								format: '{value} '
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
							name: name,
							data: data
						}]
				});
		}
	}
	$scope.channelsListData="";
	$scope.channelDataQuality="";
	$scope.channelDataRevenue="";
	var panel_1 = {
		'model': 'table',
		'dataList_1': {
			'data': '',
			'graphLimit': {
				'sumLen': 0,
				'now': -1,
				'max': 100,
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
				's': '',
				't': ''
			}
		}
	}
	$scope.tabsbtn=0;

	$scope.showPanel=function(data,$event){
		console.log(data);
		data.show_panel=true;
		data.panel_change=false;

		setTimeout(function(){
			data.panel_change=true;
			$($event.target).parent().parent().next().find(".nav .active").click();
		},10);
	}

	$scope.$watch("mchange.date", function (nv, ov) {
		if ($scope.mchange.date) {
			$scope.getAllData();
			$scope.mchange.date = false;
		}
	});
	$scope.getAllData=function(){
		$http.post("testData/channels/channelDataQuantity.json?t="+Math.random(),{"data":$scope.mstatdate}).success(function(data){
			$scope.channelsListData=data.channelDataQuantity;
			for(var i=0;i<$scope.channelsListData.length;i++){

				for(var k=1;k<7;k++)
				{
					$scope.channelsListData[i]["dataList_"+k]={
						'data': '',
						'graphLimit': {
							'sumLen': 0,
							'now': -1,
							'max': 100,
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
							's': '',
							't': ''
						}
					};
				}
				$scope.channelsListData[i].model='graph';
				$scope.channelsListData[i].panel_change=true;
				$scope.channelsListData[i].show_panel=false;
			}
		});
		$http.post("testData/channels/channelDataQuality.json?t="+Math.random(),{"data":$scope.mstatdate}).success(function(data){
			$scope.channelDataQuality=data.channelDataQuality;
			for(var i=0;i<$scope.channelDataQuality.length;i++){
				for(var k=1;k<7;k++)
				{
					$scope.channelDataQuality[i]["dataList_"+k]={
						'data': '',
						'graphLimit': {
							'sumLen': 0,
							'now': -1,
							'max': 100,
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
							's': '',
							't': ''
						}
					};
				}
				$scope.channelDataQuality[i].model='graph';
				$scope.channelDataQuality[i].panel_change=true;
				$scope.channelDataQuality[i].show_panel=false;
			}
		});
		$http.post("testData/channels/channelDataRevenue.json?t="+Math.random(),{"data":$scope.mstatdate}).success(function(data){
			$scope.channelDataRevenue=data.channelDataRevenue;
			for(var i=0;i<$scope.channelDataRevenue.length;i++){
				for(var k=1;k<7;k++)
				{
					$scope.channelDataRevenue[i]["dataList_"+k]={
						'data': '',
						'graphLimit': {
							'sumLen': 0,
							'now': -1,
							'max': 100,
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
							's': '',
							't': ''
						}
					};
				}
				$scope.channelDataRevenue[i].model='graph';
				$scope.channelDataRevenue[i].panel_change=true;
				$scope.channelDataRevenue[i].show_panel=false;
			}
		});
	}
}
