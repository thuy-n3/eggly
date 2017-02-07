angular.module('Eggly', [

])


.controller('MainCtrl', function($scope){
	$scope.categories = [
            {"id": 0, "name": "Development"},
            {"id": 1, "name": "Design"},
            {"id": 2, "name": "Exercise"},
            {"id": 3, "name": "Humor"}
        ];

        $scope.bookmarks = [
            {"id": 0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development" },
            {"id": 1, "title": "Egghead.io", "url": "http://angularjs.org", "category": "Development" },
            {"id": 2, "title": "A List Apart", "url": "http://alistapart.com/", "category": "Design" },
            {"id": 3, "title": "One Page Love", "url": "http://onepagelove.com/", "category": "Design" },
            {"id": 4, "title": "MobilityWOD", "url": "http://www.mobilitywod.com/", "category": "Exercise" },
            {"id": 5, "title": "Robb Wolf", "url": "http://robbwolf.com/", "category": "Exercise" },
            {"id": 6, "title": "Senor Gif", "url": "http://memebase.cheezburger.com/senorgif", "category": "Humor" },
            {"id": 7, "title": "Wimp", "url": "http://wimp.com", "category": "Humor" },
            {"id": 8, "title": "Dump", "url": "http://dump.com", "category": "Humor" }
        ];

    $scope.currentCategory = null; 
    
    function setCurrentCategory(category){
    	$scope.currentCategory = category;

        cancelCreating();
        cancelEditing();
    }

    function isCurrentCategory(category){
    	return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
    } setCurrentCategory;


    $scope.isCurrentCategory = isCurrentCategory;
    $scope.setCurrentCategory = setCurrentCategory;


    //-------------------------------------------------------------------------------------------------
    // CREATING AND EDITING STATES
    //-------------------------------------------------------------------------------------------------

    //default state
    $scope.isCreating = false; 
    $scope.isEditing = false; 

    function startCreating() {
        $scope.isCreating = true; 
        $scope.isEditing = false; 
    }

    function cancelCreating() {
        $scope.isCreating = false;
    }

    function startEditing() {
        $scope.isCreating = false; 
        $scope.isEditing = true; 
    }

   function cancelEditing() {
        $scope.isEditing = false; 
        // $scope.editBook = null;
   }

    function shouldShowCreating(){
        return $scope.currentCategory && !$scope.isEditing;
    }
   
   function shouldShowEditing(){
        return $scope.isEditing && !$scope.isCreating;
   }


    $scope.startCreating = startCreating;
    $scope.cancelCreating = cancelCreating;
    $scope.startEditing = startEditing; 
    $scope.cancelEditing = cancelEditing;
    $scope.shouldShowCreating = shouldShowCreating;
    $scope.shouldShowEditing = shouldShowEditing;



});













