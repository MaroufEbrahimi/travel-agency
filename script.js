if (!navigator.onLine) {
   alert('لطفا به انترنت وصل شوید!');
}

// Sidenav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// Slider 
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
   indicators: false,
   height: 500,
   transition: 500,
   interval: 6000
});

// Autocomplete
const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
   data: {
      "Herat": null,
      "Kabul": null,
      "Farah": null,
      "Mazar": null,
      "Balq": null,
      "Nimroz": null,
      "Jlalabad": null,
   }
});

// Material Boxed
const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});

// ScrollSpy
const ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(ss, {});