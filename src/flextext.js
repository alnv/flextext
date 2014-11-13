(function(){
	
	$.fn.flextext = function(opt){
		
		//helper
		function trim(str){
			return str.replace(/^\s+|\s+$/g, '');
		}
		
		
		var size = [];
		var options = opt;
		var important = '';
		
		for (var key in opt){	
			
			var k = key;
			setKeys(k);
			
		}
		
		addStyle();
		checkIfImportent();
		
		size.sort(function(a, b){
			return a - b;
		});
		
		this.each(function(i, e){
			
			
			addFlexSize(e)
			
			
		});
		
		
		function addStyle(){
			
			$('head').append('<style></style>');
			
		}
		
		function setKeys(k){
			
			if(key !== 'important'){
				
				if(typeof k !== 'number'){
				
					parseInt(k);
				
				}
				
				size.push(k);
				
			}
			
			
		}
		
		function checkIfImportent(){
			
			var i = options['important'];
			if(i !== undefined){
				important = i ? '!important' : '';
			}
			
		}
		
		function countEl(e){
			
			var strl = $(e).text()
			strl = trim(strl).length;
			
			return strl;
			
			
		}
		
		
		function addFlexSize(e){
			
			var strl = countEl(e);
			var _css = '';
			var _superSize;
			var _superClass;
			
			for(var i = 0; i < size.length; i++){
				
				if(size[i] <= strl){
					
					_superSize = size[i];
					
				}
				
			}
			
			if(_superSize !== undefined){
				
				
				_superClass = 'x'+ _superSize;
				
				
				for(var j = 0; j < options[_superSize].length; j++){
				
					var curr = options[_superSize][j];
					
					if(j === 0){
					
						_css += '.'+ _superClass +'{ '+
							
							'font-size: '+ curr[0][0] +' '+ important +';'+
							'line-height: '+ curr[0][1] + ' '+ important +';'+
							
						'} ';
						
					}
						
					if(j > 0){
							
						for(var q in curr){
								
								_css  += '@media all and (min-width: '+ q +'px){ '+
									
									'.'+ _superClass + '{ '+
										
										'font-size: '+ curr[q][0] +' '+ important +';'+
										'line-height: '+ curr[q][1] +' '+ important +';'+
										
									'}'+
									
								' }';
								
						}
							
					}
					
				}
				
				document.querySelector('style').textContent += _css;
				 
				
			}
			
			if(_superClass !== undefined){
				
				$(e).addClass(_superClass);
			
			}
			
			
		}
		
		
	}

	
})();
