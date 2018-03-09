(function () {
    angular
      .module('myApp')
      .controller('formuControlador', formuControlador);
    function formuControlador($scope, $mdDialog, $location, formuServicio, industriaServicio, carreraServicio, ImageService, Upload) { //se inyecta el service userService en el controlador para que se tenga acceso
        //controlador
        var formuCtrl = this;
        var llaveFormEst = 'formuEst';
        var llaveFormCli = 'formCli';

        formuCtrl.cloudObj = ImageService.getConfiguration();
        function init() { // función que se llama así misma para indicar que sea lo primero que se ejecute
            $scope.formulariosEst = formuServicio.getFormulario(llaveFormEst);
            $scope.formulariosCli = formuServicio.getFormulario(llaveFormCli);
            $scope.industrias = industriaServicio.getIndustrias();
            $scope.carreras = carreraServicio.getCarreras();
        }
        init();


        $scope.saveformEst = function () {
            formuCtrl.cloudObj.data.file = document.getElementById("photo").files[0];
            Upload.upload(formuCtrl.cloudObj)
              .success(function (data) {
                  saveEst(data.url);
              });
            $mdDialog.hide();
            $scope.formulariosEst = formuServicio.getFormulario(llaveFormEst);
        }

        function saveEst(urlImagen) {

            var nuevoFormEst = {
                'cedula': $scope.cedula,
                'nombre': $scope.nombre,
                'carrera': $scope.carrera,
                'genero': $scope.genero,
                'email': $scope.email,
                'edad': $scope.edad,
                'cursos': $scope.cursos,
                'foto': urlImagen
                //'curriculum':$scope.curriculum,
                //'portofolio': $scope.portofolio,

            }

            formuServicio.setFormulario(llaveFormEst, nuevoFormEst);

        };

        $scope.saveCli = function () {
            var nuevoFormCli = {
                'cedulaC': $scope.cedulaC,
                'tipoCedulaC': $scope.tipoCedulaC,
                'nombreE': $scope.nombreE,
                'nombreP': $scope.nombreP,
                'nombreC': $scope.nombreC,
                'industria': $scope.tipoIndustria,
                'emailC': $scope.emailC,
                'telefonoC': $scope.telefonoC,
                'capitalC': $scope.capitalC,
                'profesoresA': [],
                'estudiantes': [],
                'estado': 'En Espera',
                'info': []
                //'resumenC':$scope.resumenC

            }
            formuServicio.setFormulario(llaveFormCli, nuevoFormCli);
            $mdDialog.hide();
        };

        $scope.traerIndustrias = function (tipoIndustria) {
            var industrias = industriaServicio.getIndustrias();
            $scope.industrias = industrias;
        }


        $scope.showDialogEstudiante = function (ev) {
            $mdDialog.show({
                controller: formuControlador,
                templateUrl: 'componentes/formularios/popUpEstudiante.vista.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        }

        $scope.showDialogCliente = function (ev) {
            $mdDialog.show({
                controller: formuControlador,
                templateUrl: 'componentes/formularios/popUpCliente.vista.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        }

        $scope.redirectProyectos = function () {
            $location.path("/proyectos");
        }
        $scope.redirectPostulantes = function () {
            $location.path("/postulantes");
        }



    }
    //se establece un objeto de angular snormal

})();
