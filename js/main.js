var vm = new Vue({
	el:"#app",
	data:{
		bill:[],
		open:false,
		category:"车贷",
		amount:0,
		type:0,
		billtrue:[],
		shouLu:0,
		zhiChu:0,
	},
	methods:{
		/*读取表格内容*/
		getBiaoGe:function(){
			var that=this;
			/*读取文件内容*/
			axios.get('./bill.csv')
			  .then(function (response) {
				/*文件内容分类*/
				for(let i=1;i<response.data.split("\n").length;i++){
					var str=response.data.split("\n")[i];
					that.bill[i-1]={
						type:str.charAt(0),
						time:that.timestampToTime(parseInt(str.slice(2,15))),
						category:that.FenLei(str.slice(16,str.lastIndexOf(","))),
						amount:parseInt(str.slice(str.lastIndexOf(",")+1)).toFixed(2),
					}
				}
				that.billtrue=that.bill;
				that.open=true;
				that.sumNumber();
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
		},
		/*时间截转换*/
		timestampToTime:function(timestamp){
			var date = new Date(timestamp);
			    var Y = date.getFullYear() + '-';
			    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
			    var D = date.getDate() + 'T';
			    var h = date.getHours() + ':';
			    var m = date.getMinutes() + ':';
			    var s = date.getSeconds();
			    return Y + M + D + h + m + s + "+08:00";
		},
		/*添加数据*/
		addMain:function(){
			var that=this;
			var timestamp1 = Date.parse(new Date()); //获取当前时间并转换成时间截
			var timestamp2 = this.timestampToTime(timestamp1);
			this.bill.push({
				type:this.type,
				time:timestamp2,
				category:this.category,
				amount:parseFloat(this.amount).toFixed(2),
			})
			console.log(this.type,timestamp2,this.category,this.amount)
		},
		/*月份选择*/
		changeMonth:function(arr,x){
			var arr1=[];
			switch(x){
				case "1":
						for(let i=0;i<arr.length;i++){
							if(arr[i].time.slice(5,7)=="01"){
								arr1.push(arr[i]);
							}
						}
						return arr1;
				case "2":
						for(let i=0;i<arr.length;i++){
							if(arr[i].time.slice(5,7)=="02"){
								arr1.push(arr[i]);
							}
						}
						return arr1;
				case "3":
						for(let i=0;i<arr.length;i++){
							if(arr[i].time.slice(5,7)=="03"){
								arr1.push(arr[i]);
							}
						}
						return arr1;
				case "4":
						for(let i=0;i<arr.length;i++){
							if(arr[i].time.slice(5,7)=="04"){
								arr1.push(arr[i]);
							}
						}
						return arr1;
				case "5":
						for(let i=0;i<arr.length;i++){
							if(arr[i].time.slice(5,7)=="05"){
								arr1.push(arr[i]);
							}
						}
						return arr1;
				case "6":
						for(let i=0;i<arr.length;i++){
							if(arr[i].time.slice(5,7)=="06"){
								arr1.push(arr[i]);
							}
						}
						return arr1;
				case "7":
						for(let i=0;i<arr.length;i++){
							if(arr[i].time.slice(5,7)=="07"){
								arr1.push(arr[i]);
							}
						}
						return arr1;
				case "8":
						for(let i=0;i<arr.length;i++){
							if(arr[i].time.slice(5,7)=="08"){
								arr1.push(arr[i]);
							}
						}
						return arr1;
				case "9":
						for(let i=0;i<arr.length;i++){
							if(arr[i].time.slice(5,7)=="09"){
								arr1.push(arr[i]);
							}
						}
						return arr1;
				case "10":
						for(let i=0;i<arr.length;i++){
							if(arr[i].time.slice(5,7)=="10"){
								arr1.push(arr[i]);
							}
						}
						return arr1;
				case "11":
						for(let i=0;i<arr.length;i++){
							if(arr[i].time.slice(5,7)=="11"){
								arr1.push(arr[i]);
							}
						}
						return arr1;
				case "12":
						for(let i=0;i<arr.length;i++){
							if(arr[i].time.slice(5,7)=="12"){
								arr1.push(arr[i]);
							}
						}
						return arr1;
			}
		},
		/*分类*/
		FenLei:function(e){
			switch(e){
				case "1bcddudhmh":
								return "车贷";
				case "hc5g66kviq":
								return "车辆保养";
				case "8s0p77c323":
								return "房贷";
				case "0fnhbcle6hg":
								return "房屋租赁";
				case "odrjk823mj8":
								return "家庭用品";
				case "bsn20th0k2o":
								return "交通";
				case "j1h1nohhmmo":
								return "旅游";
				case "3tqndrjqgrg":
								return "日常饮食";
				case "s73ijpispio":
								return "工资";
				case "1vjj47vpd28":
								return "股票投资";
				case "5il79e11628":
								return "基金投资";
			}
		},
		/*类型分类*/
		LeiXing:function(arr,x){
			var arr1=[];
			switch(x){
				case "车贷":
							for(let i=0;i<arr.length;i++){
								if(arr[i].category=="车贷"){
									arr1.push(arr[i])
								}
							}
							return arr1;
				case "车辆保养":
							for(let i=0;i<arr.length;i++){
								if(arr[i].category=="车辆保养"){
									arr1.push(arr[i])
								}
							}
							return arr1;
				case "房贷":
							for(let i=0;i<arr.length;i++){
								if(arr[i].category=="房贷"){
									arr1.push(arr[i])
								}
							}
							return arr1;
				case "房屋租赁":
							for(let i=0;i<arr.length;i++){
								if(arr[i].category=="房屋租赁"){
									arr1.push(arr[i])
								}
							}
							return arr1;
				case "家庭用品":
							for(let i=0;i<arr.length;i++){
								if(arr[i].category=="家庭用品"){
									arr1.push(arr[i])
								}
							}
							return arr1;
				case "交通":
							for(let i=0;i<arr.length;i++){
								if(arr[i].category=="交通"){
									arr1.push(arr[i])
								}
							}
							return arr1;
				case "旅游":
							for(let i=0;i<arr.length;i++){
								if(arr[i].category=="旅游"){
									arr1.push(arr[i])
								}
							}
							return arr1;
				case "日常饮食":
							for(let i=0;i<arr.length;i++){
								if(arr[i].category=="日常饮食"){
									arr1.push(arr[i])
								}
							}
							return arr1;
				case "工资":
							for(let i=0;i<arr.length;i++){
								if(arr[i].category=="工资"){
									arr1.push(arr[i])
								}
							}
							return arr1;
				case "股票投资":
							for(let i=0;i<arr.length;i++){
								if(arr[i].category=="股票投资"){
									arr1.push(arr[i])
								}
							}
							return arr1;
				case "基金投资":
							for(let i=0;i<arr.length;i++){
								if(arr[i].category=="基金投资"){
									arr1.push(arr[i])
								}
							}
							return arr1;
			}
		},
		/*账单类型分类*/
		typeFenLei:function(arr,y){
			var arr1=[];
			switch(y){
				case "0":
						for(let i=0;i<arr.length;i++){
							if(arr[i].type == "0"){
								arr1.push(arr[i])
							}
						}
						return arr1;
				case "1":
						for(let i=0;i<arr.length;i++){
							if(arr[i].type == "1"){
								arr1.push(arr[i])
							}
						}
						return arr1;
			}
		},
		/*下拉选择器*/
		xiaLa:function(){
			/*清空数组*/
			this.billtrue=[];
			/*获取序号*/
			var x = document.querySelector(".Month").selectedIndex;
			var y = document.querySelector(".type").selectedIndex;
			var z = document.querySelector(".category").selectedIndex;
			/*获取名字*/
			var x1 = document.querySelector(".Month").options[x].text;
			var y1 = document.querySelector(".type").options[y].text;
			var z1 = document.querySelector(".category").options[z].text;
			/*定义数组*/
			var arr999=this.bill.slice(0);
			if(y1 != "请选择"){
				arr999=this.typeFenLei(arr999,y1);
			}
			
			if(x1 != "请选择"){
				arr999=this.changeMonth(arr999,x1.slice(0,x1.lastIndexOf("月")));
			}
			
			if(z1 != "请选择"){
				arr999=this.LeiXing(arr999,z1);
			}
			this.billtrue = arr999;
		},
		/*计算收入和支出*/
		sumNumber:function(){
			var that=this;
			that.zhiChu = 0;
			that.shouLu = 0;
			for(let abc=0;abc<that.billtrue.length;abc++){
				if(that.billtrue[abc].type==0){
					that.zhiChu=that.zhiChu + parseFloat(that.billtrue[abc].amount);
				}else{
					that.shouLu=that.shouLu + parseFloat(that.billtrue[abc].amount);
				}
			}
			that.zhiChu = that.zhiChu.toFixed(2);
			that.shouLu = that.shouLu.toFixed(2);
		},
		/*升序*/
		shengXu:function(){
			this.billtrue.sort(function(a,b){return a.amount - b.amount})
		},
		/*降序*/
		jiangXu:function(){
			this.billtrue.sort(function(a,b){return b.amount - a.amount})
		}
	},
	mounted() {
		this.getBiaoGe();
	}
})