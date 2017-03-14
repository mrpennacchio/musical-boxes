angular.module("MusicPlayer")
	.controller('soundCtrl',['$scope', function($scope){		
		

		$scope.playC = function(){
			var middleC = new Audio('/assets/sounds/middle_c.mp3');
			middleC.play();	
		};

		$scope.playD = function(){
			var noteD = new Audio('/assets/sounds/note_d.mp3');
			noteD.play();
		};

		$scope.playE = function(){
			var noteE = new Audio('/assets/sounds/note_e.mp3');
			noteE.play();
		};

		$scope.playF = function(){
			var noteF = new Audio('/assets/sounds/note_f.mp3');
			noteF.play();
		};

		$scope.playG = function(){
			var noteG = new Audio('/assets/sounds/note_g.mp3');
			noteG.play();
		};

		$scope.playA = function(){
			var noteA = new Audio('/assets/sounds/note_a.mp3');
			noteA.play();
		};

		$scope.playB = function(){
			var noteB = new Audio('/assets/sounds/note_b.mp3');
			noteB.play();
		};

		$scope.playHiC = function(){
			var noteC = new Audio('/assets/sounds/note_c.mp3');
			noteC.play();
		};


	}]);
