<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark py-3">
      <div class="container py-0">
        <ul class="nav navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" href="#" aria-current="page"
              >Home <span class="visually-hidden">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Product</a>
          </li>
        </ul>
        <div class="dropdown open">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="triggerId"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Cart
          </button>
          <div>
          <mini-cart />
          
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

import MiniCart from "./MiniCart.vue"
export default {
    components: {MiniCart}
};
</script>

<style>
</style>