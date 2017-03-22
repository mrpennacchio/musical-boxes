angular.module("MusicPlayer")
	.controller('soundCtrl',['$scope', '$interval', function($scope, $interval){

		$scope.isClicked = false;
		$scope.noteList = []; // note list array for playback
		$scope.notePressedList = []; // notes pressed array
	
		$scope.addNote = function(sound) {  // add to noteList array to playback
			return $scope.noteList.push(sound);
			console.log(noteList);
		};
		
		$scope.addToNoteList = function(note){ // add to note list to display on screen
			return $scope.notePressedList.push(note);
		};

		$scope.playnoteList = function(noteList){
			for (let i = 0; i < noteList.length; i++) {
				setTimeout(function playList(){
					noteList[i].play();
				},i * 400);
			};
		};
		
		$scope.resetnoteList = function(noteList){
			$scope.noteList.length = 0;
			$scope.notePressedList.length = 0;
			$scope.isClicked = false;
		}

		$scope.playC = function(){
			var middleC = new Audio('/assets/sounds/middle_c.mp3');
			middleC.play();
			$scope.note = "C";
			$scope.isClicked = true;

			$scope.addNote(middleC);
			$scope.addToNoteList($scope.note);
		};

		$scope.playD = function(){
			var noteD = new Audio('/assets/sounds/note_d.mp3');
			$scope.note = "D";
			noteD.play();
			$scope.isClicked = true;

			$scope.addNote(noteD);
			$scope.addToNoteList($scope.note);
		};

		$scope.playE = function(){
			var noteE = new Audio('/assets/sounds/note_e.mp3');
		  $scope.note = "E";
			noteE.play();
			$scope.isClicked = true;


			$scope.addNote(noteE);
			$scope.addToNoteList($scope.note);
		};

		$scope.playF = function(){
			var noteF = new Audio('/assets/sounds/note_f.mp3');
			$scope.note = "F";
			noteF.play();
			$scope.isClicked = true;

			$scope.addNote(noteF);
			$scope.addToNoteList($scope.note);
		};

		$scope.playG = function(){
			var noteG = new Audio('/assets/sounds/note_g.mp3');
			$scope.note = "G";
			noteG.play();
			$scope.isClicked = true;

			$scope.addNote(noteG);
			$scope.addToNoteList($scope.note);
		};

		$scope.playA = function(){
			var noteA = new Audio('/assets/sounds/note_a.mp3');
			$scope.note = "A";
			noteA.play();
			$scope.isClicked = true;

			$scope.addNote(noteA);
			$scope.addToNoteList($scope.note);
		};

		$scope.playB = function(){
			var noteB = new Audio('/assets/sounds/note_b.mp3');
			noteB.play();
			$scope.note = "B";
			$scope.isClicked = true;

			$scope.addNote(noteB);
			$scope.addToNoteList($scope.note);
		};

		$scope.playHiC = function(){
			var noteC = new Audio('/assets/sounds/note_c.mp3');
			noteC.play();
			$scope.note = "C"
			$scope.isClicked = true;

			$scope.addNote(noteC);
			$scope.addToNoteList($scope.note);
		};


	}]);
