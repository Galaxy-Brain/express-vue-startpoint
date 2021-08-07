<template>
    <div>
       <nav class="navbar navbar-expand-md navbar-dark" style="background-color: #1546bb">
           <div class="container">

            <router-link class="navbar-brand" to="/">NYANUMBA</router-link>
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <router-link class="nav-link" href="#">Home <span class="visually-hidden">(current)</span></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <router-link class="dropdown-item" to="/">Home 1</router-link>
                            <router-link class="dropdown-item" to="/">Home 2</router-link>
                        </div>
                    </li>
                </ul>
                <form class="d-flex my-2 my-lg-0">
                    <input class="form-control me-sm-2" type="text" placeholder="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
           </div>
       </nav>

       <main class="py-5">
           <router-view></router-view>
       </main>
    </div>
</template>
<script>
export default {
    
}
</script>