<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light opacity-75 ">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="../assets/LogoFac1.png" alt="logo" width="100px" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main_nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse d-flex justify-content-center"
          id="main_nav"
        >
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                ITBS
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#"> Notre Ecole</a></li>
                <li>
                  <a class="dropdown-item" href="#">Etudier en Tunisie</a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Cycle des ingénieurs
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Cycle Préparatoire Intégré en Informatique</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Génie Informatique décisionnel (BI)
                  </a>
                </li>
                <li><a class="dropdown-item" href="#"> Génie Logiciel </a></li>
                <li>
                  <a class="dropdown-item" href="#"> Système Embarqué </a>
                </li>
                <li><a class="dropdown-item" href="#"> Télecom </a></li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
              >
                Masters
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#"> Marketing digital</a>
                </li>

                <li>
                  <a class="dropdown-item" href="#">
                    Information : data science
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    MASTER MANAGEMENT DE PROJET, SÉCURITÉ ET QUALITÉ
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    MASTER INGÉNIERIE FINANCIÈRE
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="d">
          <button class="btn btn-outline-warning " style="color: black" >

  <a href="#" class="a">
                    <i class="fa-solid fa-user " style="color: black"></i> 
  </a>
  <span>Vous n'ete pas connecté <br/> veuillez connecter svp</span>    
          </button>
</div>


        <!-- navbar-collapse.// -->
      </div>
      <!-- container-fluid.// -->
    </nav>

    
  </div>
</template>

<script>
export default {
  name: "Nav-Bar",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media all and (min-width: 992px) {
  .navbar .nav-item .dropdown-menu {
    display: none;
  }
  .navbar .nav-item:hover .nav-link {
    color: #ffc000;
  }
  .navbar .nav-item:hover .dropdown-menu {
    display: block;
  }

  .navbar .nav-item .dropdown-menu {
    margin-top: 0;
  }
}
.dropdown-item:hover {
  background-color: #ffc000;
  color: white;
}

.d{

  display: table;
  
}

.a, span {
  display: table-cell;
  vertical-align: middle;
  padding: 3px;
}
</style>
