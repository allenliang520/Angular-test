function virtualItemsController($scope,$http){
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
		},
		"dataList_graph2":function(data,xdata,target,name){
			if(!data)return;
			if(!target)return;
				target.parent().find('.graph').highcharts({
						title:{text:""},
						chart: {type: 'bar'},
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
	$scope.topSaleItemsByCategory="";
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
	$scope.panel_category = {
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
	$scope.panel_item = {
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
	$scope.showtype="";	//trend,level,stages
	$scope.topSaleItemsByCategory="";
	$scope.topSaleItemsByItem="";
	$scope.changetype=function(data,limitdata,i){
		limitdata.max=i;
		limitdata.now=0;
		limitdata.sumLen=data.length;
		limitdata.count=Math.ceil(limitdata.sumLen/limitdata.max)-1;
	}
	$scope.showPanel=function(data,$event,type){
		data.show_panel=true;
		data.panel_change=false;
		data.showtype=type;
		setTimeout(function(){
			data.panel_change=true;
			$($event.target).parent().parent().parent().find(".panel-act .nav .active").click();
		},10);
	}
	$scope.$watch("mchange.date", function (nv, ov) {
		if ($scope.mchange.date) {
			$scope.getAllData();
			$scope.mchange.date = false;
		}
	});
	$scope.getAllData=function(){
		$http.post("testData/virtualExpense/virtualItems/topSaleItemsByCategory.json?t="+Math.random(),{"data":$scope.mstatdate}).success(function(data){
			$scope.topSaleItemsByCategory=data.topSaleItemsByCategory;
			for(var i=0;i<$scope.topSaleItemsByCategory.length;i++){
				$scope.topSaleItemsByCategory[i].dataList=new Array();
				for(var k=1;k<5;k++)
				{
					$scope.topSaleItemsByCategory[i].view["dataList_"+k]={
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
					$scope.topSaleItemsByCategory[i].levels["dataList_"+k]={
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
				$scope.topSaleItemsByCategory[i].view.model='graph';
				$scope.topSaleItemsByCategory[i].view.panel_change=true;
				$scope.topSaleItemsByCategory[i].view.show_panel=false;
				$scope.topSaleItemsByCategory[i].view.showtype="";
				$scope.topSaleItemsByCategory[i].levels.model='graph';
				$scope.topSaleItemsByCategory[i].levels.panel_change=true;
				$scope.topSaleItemsByCategory[i].levels.show_panel=false;
				$scope.topSaleItemsByCategory[i].levels.showtype="";		//trend,level,stages

			}

		});
	$http.post("testData/virtualExpense/virtualItems/topSaleItemsByItem.json?t="+Math.random(),{"data":$scope.mstatdate}).success(function(data){
			$scope.topSaleItemsByItem=data.topSaleItemsByItem;
			for(var i=0;i<$scope.topSaleItemsByItem.length;i++){
				$scope.topSaleItemsByItem[i].dataList=new Array();
				for(var k=1;k<5;k++)
				{
					$scope.topSaleItemsByItem[i].view["dataList_"+k]={
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

					$scope.topSaleItemsByItem[i].levels["dataList_"+k]={
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
				$scope.topSaleItemsByItem[i].view.model='graph';
				$scope.topSaleItemsByItem[i].view.panel_change=true;
				$scope.topSaleItemsByItem[i].view.show_panel=false;
				$scope.topSaleItemsByItem[i].view.showtype="";
				$scope.topSaleItemsByItem[i].levels.model='graph';
				$scope.topSaleItemsByItem[i].levels.panel_change=true;
				$scope.topSaleItemsByItem[i].levels.show_panel=false;
				$scope.topSaleItemsByItem[i].levels.showtype="";	//trend,level,stages
			}
		});


	}

}
