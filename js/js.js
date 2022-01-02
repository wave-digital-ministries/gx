function menu(){
    document.getElementById("menu").innerHTML = '   <div class="dropdown menu" style="position: fixed;"><a class="menu-button" href="./index.html"><img src="./assets/images/index-meta.png" width="75mm" alt="Home button"></a><a class="menu-button" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"><img src="./menu.png" width="50mm" alt="Menu"></a><ul class="dropdown-menu" aria-labelledby="dropdownMenuLink"><li><a class="dropdown-item" href="#search">Search</a></li><!--<li><a class="dropdown-item" href="#">Discover</a></li><li><a class="dropdown-item" href="#">Science</a></li><li><a class="dropdown-item" href="#">History</a></li><li><a class="dropdown-item" href="#">Culture</a></li><li><a class="dropdown-item" href="#">Faith</a></li> --><li><a class="dropdown-item" href="#about">About</a></li><!--<li><a class="dropdown-item" href="https://wdm-scholar.mn.co/feed" target="_blank">Connect</a></li>--><li><a class="dropdown-item" href="./privacy.html">Privacy</a></li></ul></div>'
}

function footer(){
  document.getElementById("footer").innerHTML = ''
}
