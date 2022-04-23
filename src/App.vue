<template>
  <h1 id="h1">
    Made by
    <span
      ><img
        id="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png"
        alt=""
    /></span>
    <a id="ins" href="https://instagram.com/ism4tullo"> Ismat </a>
  </h1>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/santa">Santa</router-link>|
    <router-link to="/chekisholdiradi">Chekisholdiradi</router-link>|
    <router-link to="/uchaman">Uchaman</router-link>|
    <router-link to="/mojizalar">Mo'jizalar</router-link>|
    <router-link to="/qayiq">Qayiq</router-link>|
    <router-link to="/jinnixona">Jinnixona</router-link>|
    <router-link to="/umrotar">Umr o'tar</router-link>|
    <router-link to="/layli">Layli</router-link>|
    <router-link to="/izladim">Izladim</router-link>|
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
h1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
#logo {
  padding: 10px;
  width: 50px;
  height: 50px;
}
#ins {
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 8px;
  background: #f09433;
  background: -moz-linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  background: -webkit-linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
}
</style>
