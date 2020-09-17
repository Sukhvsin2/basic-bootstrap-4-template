import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

document.getElementById("app").innerHTML = `
<nav class="navbar navbar-expand-lg" style="background-color:#2c3e50; ;">
  <a class="navbar-brand" href="#">Portfolio</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#about">About</a>
      </li>
      
    </ul>
  </div>
</nav>
<div class="body">
    <div class="row">
    <img loading="lazy" style="width:100%;height: 50%;filter: 75%;" src="https://source.unsplash.com/1600x300/?nature,ice" alt=""/>
    </div>
    <div class="gallery">
    <h3 class="text-center" style="font-size: 2rem;">My Gallery</h3>
      <div class="row ">
        <div class="col-2 col-md-4 col-sm-6 py-0 px-0 ma-0">
        <img loading="lazy" style="width:100%;" src="https://source.unsplash.com/1600x900/?nature,ice" alt=""/>      
        </div>
        <div class="col-2 col-md-4 col-sm-6 py-0 px-0 ma-0">
        <img loading="lazy" style="width:100%;" src="https://source.unsplash.com/1600x900/?air,water" alt=""/>      
        </div>
        <div class="col-2 col-md-4 col-sm-6 py-0 px-0 ma-0">
        <img loading="lazy" style="width:100%;" src="https://source.unsplash.com/1600x900/?nature,people" alt=""/>      
        </div>
        <div class="col-2 col-md-4 col-sm-6 py-0 px-0 ma-0">
        <img loading="lazy" style="width:100%;" src="https://source.unsplash.com/1600x900/?nature,puppy" alt=""/>      
        </div>
        <div class="col-2 col-md-4 col-sm-6 py-0 px-0 ma-0">
        <img loading="lazy" style="width:100%;" src="https://source.unsplash.com/1600x900/?car,dog" alt=""/>      
        </div>
        <div class="col-2 col-md-4 col-sm-6 py-0 px-0 ma-0">
        <img loading="lazy" style="width:100%;" src="https://source.unsplash.com/1600x900/?wind,water" alt=""/>      
        </div>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-3">
      <img loading="lazy" style="width:100%;" src="https://source.unsplash.com/1600x900/?nature,water" alt=""/>
      </div>
      <div class="col-9 content">
      <p class="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </div>
    <div class="row" id="about">
      <div class="col-4 sm-12">
        <h3 class="text-center">
          Address
        </h3>
        <div class="text-center">
        127 Indian Spring Road
        Kalamazoo, MI 49009
        </div>
      </div>
      <div class="col-4 sm-12">
        <h3 class="text-center">
          Social
        </h3>
        <div class="text-center">
        <i class='fas fa-heart' style='font-size:48px;color:red'></i>
        <i class='fas fa-photo-video' style='font-size:48px;color:red'></i>
        </div>
      </div>
      <div class="col-4 sm-12">
      <h3 class="text-center">
        Contact Me
      </h3>
      <div>
      <form>
      <div class="form-group row">
        <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input type="email" class="form-control" id="inputEmail3">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword3" class="col-sm-2 col-form-label">Message</label>
        <div class="col-sm-10">
          <input type="message" class="form-control" id="inputPassword3">
        </div>
      </div>

     
      </div>
      <div class="form-group row">
        <div class="col-sm-10">
          <button type="submit" class="btn btn-primary">Done</button>
        </div>
      </div>
    </form>
      </div>
      </div>

    </div>
</div>
`;
