    angular.module("mediApp", [])
      .controller("MainControl", function($scope) {
        $scope.searchQuery = "";

        $scope.hospitals = [
          { name: "Apollo Speciality Hospitals" },
          { name: "Meenakshi Mission Hospital & Research Centre" },
          { name: "Vadamalayan Hospitals" },
          { name: "Velammal Medical College Hospital & Research Institute" },
          { name: "Madurai Kidney Centre & Transplantation Research Institute" },
          { name: "Guru Hospital" },
          { name: "Aravind Eye Hospital" },
          { name: "Devadoss Multispeciality Hospital" },
          { name: "Sree Kumaran Hospital" },
          { name: "Vasan Eye Care Hospital" }
        ];

        $scope.selectHospital = function(name) {
          $scope.searchQuery = name;
        };
      });