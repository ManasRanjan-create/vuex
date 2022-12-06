<template>
<div>
  <div class="container-fluid p-5 bg-dark text-white text-left">
    <div class="row row-col">
      <div class="col-sm-4">
        <h3 class="text-center">About Us</h3>
        <p>
         We are dealing with online and offline business
        </p>
      </div>
      <div class="col-sm-4">
        <h3 class="text-center">Useful Links</h3>
        <br>
        <a herf="#" class="btn btn-basic text-white" to="/">Home</a>
        <br />
        <a herf="#" class="btn btn-basic text-white" to="/ProductList">Product</a>
        
      </div>
      <div class="col-sm-4">
        <h3 class="text-center">Contact</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-envelope"
          viewBox="0 0 16 16"
        >
          <path
            d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
          />
        </svg>
        <a href="#" class="btn btn-basic  text-left text-white">
          <h6>manas@wohlig.com</h6>
        </a>
        <br />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-geo-alt-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
          />
        </svg>
        <a href="#" class="btn btn-basic  text-left text-white">
          <h6>Wohlig Transformation</h6>
        </a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "FooterP",
};
</script>
